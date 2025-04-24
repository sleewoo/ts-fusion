import { format } from "node:util";

import {
  type Type,
  type SourceFile,
  type TypeNode,
  type ArrayTypeNode,
  type Signature,
  type TypeParameterDeclaration,
  type CallSignatureDeclaration,
  type MethodDeclaration,
  type ParameterDeclaration,
  Project,
  SyntaxKind,
  TypeFlags,
} from "ts-morph";

import builtins from "./builtins";

type ManagedSignatures =
  | "symbol"
  | "void"
  | "object"
  | "constructorType"
  | "conditionalType"
  | "optionalType"
  | "parenthesizedType"
  | "indexedAccessType"
  | "templateLiteralType"
  | "mappedType"
  | "inferType"
  | "typeOperator"
  | "typeReference"
  | "typeLiteral"
  | "union"
  | "intersection"
  | "tuple"
  | "array"
  | "functionSignature";

type TraverseDataParameters = Record<string, string | undefined>;

type TraverseData = {
  typeNode: TypeNode;
  type: Type;
  typeParameters?: TraverseDataParameters | undefined;
};

type Traverse = (data: TraverseData, depthLevel?: number) => string;

type Next = (data: TraverseData) => string;

type HandlerStack = Record<
  `${ManagedSignatures}Handler`,
  (
    data: TraverseData,
    opts: UserOptions | undefined,
  ) => ((next: Next) => string) | undefined
>;

type UserOptions = {
  /**
   * by default all exported types will be processed.
   * use this filter to only process specific types.
   */
  typesFilter?: (typeName: string) => boolean;
  /**
   * a map of types to override default name for.
   *
   * eg. you have a CustomPromise type that should be rendered as native Promise:
   *    import { CustomPromise } from "@/lib";
   *    export type ResponseHandler = () => CustomPromise<...>
   *
   * then add CustomPromise to `overrides`:
   *    overrides: {
   *      CustomPromise: "Promise",
   *    }
   *
   * and the flattened result will be:
   *    export type ResponseHandler = () => Promise<...>
   * */
  overrides?: Record<string, string>;
  /**
   * limit recursion to this level depth.
   * default: 16 */
  maxDepth?: number;
};

export default (
  // either a project or path to tsconfig.json
  tsConfigFilePathOrProject: string | Project,
  // either sourceFile or path to file
  file: string | SourceFile,
  opts?: UserOptions,
): Array<{
  name: string;
  parameters: Array<{ name: string; text: string }>;
  text: string;
}> => {
  const project =
    typeof tsConfigFilePathOrProject === "string"
      ? new Project({
          tsConfigFilePath: tsConfigFilePathOrProject,
          skipAddingFilesFromTsConfig: true,
          compilerOptions: { skipLibCheck: true },
        })
      : tsConfigFilePathOrProject;

  const sourceFile =
    typeof file === "string"
      ? project.getSourceFile(file) || project.addSourceFileAtPath(file)
      : file;

  const { maxDepth = 16 } = { ...opts };

  const traverse: Traverse = (data, depthLevel = 1) => {
    if (depthLevel > maxDepth) {
      return "never /** maxDepth exceeded */";
    }

    for (const key of Object.keys(handlerStack) as Array<keyof HandlerStack>) {
      const handler = handlerStack[key](data, opts);
      if (handler) {
        return handler((next) => traverse(next, depthLevel + 1));
      }
    }

    // if no handler matched so far, perhaps it's a primitive value
    if (isPrimitive(data.type)) {
      return data.type.getText(data.typeNode);
    }

    return "unknown /** unresolved */";
  };

  return sourceFile.getTypeAliases().flatMap((typeAlias) => {
    if (!typeAlias.isExported()) {
      return [];
    }

    const typeNode = typeAlias.getTypeNode();

    if (!typeNode) {
      return [];
    }

    const typeName = typeAlias.getName();

    const type = typeAlias.getType();

    const typeParameters = typeAlias.getTypeParameters().map((param) => {
      return renderTypeParameter(param, traverse);
    });

    if (!opts?.typesFilter || opts.typesFilter(typeName)) {
      return typeParameters.length
        ? [
            {
              name: typeName,
              parameters: typeParameters,
              text: traverse({
                typeNode,
                type,
                typeParameters: typeParameters.reduce(
                  (map: Record<string, string>, { name }) => {
                    map[name] = name;
                    return map;
                  },
                  {},
                ),
              }),
            },
          ]
        : [
            {
              name: typeName,
              parameters: [],
              text: traverse({ typeNode, type }),
            },
          ];
    }

    return [];
  });
};

const handlerStack: HandlerStack = {
  symbolHandler({ type }) {
    return type.getFlags() & (TypeFlags.ESSymbol | TypeFlags.UniqueESSymbol)
      ? () => "symbol"
      : undefined;
  },

  voidHandler({ typeNode }) {
    return typeNode.isKind(SyntaxKind.VoidKeyword) ? () => "void" : undefined;
  },

  objectHandler({ typeNode }) {
    return typeNode.isKind(SyntaxKind.ObjectKeyword)
      ? () => "object"
      : undefined;
  },

  constructorTypeHandler({ typeNode }) {
    return typeNode.isKind(SyntaxKind.ConstructorType)
      ? (next) => {
          const parameters = typeNode
            .getChildrenOfKind(SyntaxKind.Parameter)
            .map((param) => renderCallSignatureParameter(param, next));

          const returnTypeNode = typeNode.getReturnTypeNode();

          return format(
            "new (%s) => %s",
            parameters.join(", "),
            returnTypeNode
              ? next({
                  typeNode: returnTypeNode,
                  type: returnTypeNode.getType(),
                })
              : "unknown /** unknown return type */",
          );
        }
      : undefined;
  },

  conditionalTypeHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.ConditionalType)
      ? (next) => {
          return format(
            "%s extends %s ? %s : %s",
            ...[
              typeNode.getCheckType(),
              typeNode.getExtendsType(),
              typeNode.getTrueType(),
              typeNode.getFalseType(),
            ].map((e) =>
              next({ typeNode: e, type: e.getType(), typeParameters }),
            ),
          );
        }
      : undefined;
  },

  optionalTypeHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.OptionalType)
      ? (next) => {
          const [innerType] = typeNode.forEachChildAsArray();
          return next({
            typeNode: innerType as TypeNode,
            type: innerType.getType(),
            typeParameters,
          });
        }
      : undefined;
  },

  parenthesizedTypeHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.ParenthesizedType)
      ? (next) => {
          const [innerType] = typeNode.forEachChildAsArray();
          return next({
            typeNode: innerType as TypeNode,
            type: innerType.getType(),
            typeParameters,
          });
        }
      : undefined;
  },

  indexedAccessTypeHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.IndexedAccessType)
      ? (next) => {
          const objectTypeNode = typeNode.getObjectTypeNode();
          const indexTypeNode = typeNode.getIndexTypeNode();
          return format(
            "%s[%s]",
            next({
              typeNode: objectTypeNode,
              type: objectTypeNode.getType(),
              typeParameters,
            }),
            next({
              typeNode: indexTypeNode,
              type: indexTypeNode.getType(),
              typeParameters,
            }),
          );
        }
      : undefined;
  },

  templateLiteralTypeHandler({ typeNode }) {
    return typeNode.isKind(SyntaxKind.TemplateLiteralType)
      ? (next) => {
          const head = typeNode.getHead().getText();
          const tail = typeNode.getTemplateSpans().map((span) => {
            return span
              .getChildren()
              .map((e) => {
                return [
                  SyntaxKind.TemplateMiddle,
                  SyntaxKind.TemplateTail,
                ].includes(e.getKind())
                  ? e.getText()
                  : next({
                      typeNode: e as TypeNode,
                      type: e.getType(),
                    });
              })
              .join("");
          });
          return format("%s%s", head, tail.join(""));
        }
      : undefined;
  },

  mappedTypeHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.MappedType)
      ? (next) => {
          const mappedTypeParameter = typeNode.getTypeParameter();

          const mappedTypeConstraint = mappedTypeParameter.getConstraint();

          const mappedTypeNode = typeNode.getTypeNode();

          const nameTypeNode = typeNode.getNameTypeNode();

          return format(
            "{ [%s in %s%s]%s: %s }",
            mappedTypeParameter.getNameNode().getText(),
            mappedTypeConstraint
              ? next({
                  typeNode: mappedTypeConstraint,
                  type: mappedTypeConstraint.getType(),
                  typeParameters,
                })
              : "unknown /** unresolved mapped type constraint */",
            nameTypeNode
              ? format(
                  " as %s",
                  next({
                    typeNode: nameTypeNode,
                    type: nameTypeNode.getType(),
                    typeParameters,
                  }),
                )
              : "",
            typeNode.getQuestionToken() ? "?" : "",
            mappedTypeNode
              ? next({
                  typeNode: mappedTypeNode,
                  type: mappedTypeNode?.getType(),
                  typeParameters,
                })
              : "unknown /** unresolved mapped type node */",
          );
        }
      : undefined;
  },

  inferTypeHandler({ typeNode }) {
    return typeNode.isKind(SyntaxKind.InferType)
      ? () => typeNode.getText()
      : undefined;
  },

  typeOperatorHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.TypeOperator)
      ? (next) => {
          let template = "%s";

          if (typeNode.getFirstChildByKind(SyntaxKind.KeyOfKeyword)) {
            template = "keyof %s";
          }

          if (typeNode.getFirstChildByKind(SyntaxKind.ReadonlyKeyword)) {
            template = "readonly %s";
          }

          const innertTypeNode = typeNode.getTypeNode();

          return format(
            template,
            next({
              typeNode: innertTypeNode as TypeNode,
              type: innertTypeNode.getType(),
              typeParameters,
            }),
          );
        }
      : undefined;
  },

  typeReferenceHandler({ typeNode, typeParameters }, opts) {
    return typeNode.isKind(SyntaxKind.TypeReference)
      ? (next) => {
          const nameNode = typeNode.getTypeName();
          const typeName = nameNode.getText();

          if (typeParameters?.[typeName]) {
            return typeParameters[typeName];
          }

          const typeArguments = typeNode.getTypeArguments().map((param) => {
            return next({
              typeNode: param,
              type: param.getType(),
              typeParameters,
            });
          });

          const overrides: Record<string, string> = {
            ...builtins,
            ...opts?.overrides,
          };

          if (overrides[typeName]) {
            return typeArguments.length
              ? format("%s<%s>", overrides[typeName], typeArguments.join(", "))
              : overrides[typeName];
          }

          /**
           * using name symbol cause type symbol/aliasedSymbol very unreliable here.
           *
           * - type symbol/aliasedSymbol is dropped on some "complex" types like:
           *   type Re16 = readonly [number, ...(readonly boolean[])];
           *   type RT05 = [header: string, ...rows: Array<string[]>];
           *
           * - type symbol/aliasedSymbol is flattening builtins, eg:
           *   export type Test = Readonly<{}>
           *   converted to:
           *   type Readonly<T>={readonly[P in keyof T]:T[P];}
           * */
          const nameSymbol =
            nameNode
              .getSymbol()
              ?.getAliasedSymbol() ?? //
            nameNode.getSymbol();

          const aliasDeclaration = nameSymbol
            ?.getDeclarations()
            ?.find((e) => e.isKind(SyntaxKind.TypeAliasDeclaration));

          const aliasNode = aliasDeclaration
            ? aliasDeclaration.getTypeNode()
            : undefined;

          if (aliasNode) {
            const aliasType = aliasNode.getType();
            return next({
              typeNode: aliasNode,
              type: aliasType.getTargetType() || aliasType,
              typeParameters: aliasDeclaration
                ?.getTypeParameters()
                .reduce((map: TraverseDataParameters, param, i) => {
                  map[param.getName()] =
                    typeArguments[i] ?? // empty string is a valid value
                    param.getDefault()?.getText();
                  return map;
                }, {}),
            });
          }

          return format("%s /** unresolved */", typeNode.getText());
        }
      : undefined;
  },

  typeLiteralHandler({ typeNode, type, typeParameters }) {
    return typeNode.isKind(SyntaxKind.TypeLiteral)
      ? (next) => {
          /**
           * collecting regular index signatures, without comments:
           *    Record<string, ...>
           *    { [key: string]: ... }
           *    Record<number, ...>
           *    { [key: number]: ... }
           * and template index signatures, also without comments:
           *     Record<`some_${string}`, ...>
           *     { [key: `some_${string}`]: ... }
           */
          const indexSignatures = typeNode
            .getIndexSignatures()
            .flatMap((signature) => {
              const keyTypeNode = signature.getKeyTypeNode();
              const returnTypeNode = signature.getReturnTypeNode();
              return [
                {
                  key: keyTypeNode.getText(),
                  val: returnTypeNode
                    ? next({
                        typeNode: returnTypeNode,
                        type: returnTypeNode.getType(),
                        typeParameters,
                      })
                    : "unknown /** unresolved */",
                },
              ];
            });

          /**
           * collecting construct signatures, without comments:
           *    export type Constructable = {
           *      new (...): ...;
           *    }
           * */
          const constructSignatures = type.getConstructSignatures();

          /**
           * collecting method signatures, with comments (jsDoc format only):
           *    export type ObjectWithMethods = {
           *      calculate(...): ...;
           *    }
           * */
          const methodSignatures = typeNode
            .getChildrenOfKind(SyntaxKind.MethodSignature)
            .map((methodSignature) => {
              return {
                name: methodSignature.getName(),
                signatures: methodSignature.getType().getCallSignatures(),
                comments: methodSignature
                  .getJsDocs()
                  .map((e) => e.getText().trim()),
              };
            });

          /**
           * collecting regular properties, with comments (jsDoc format only)
           * */
          const propertySignatures = typeNode
            .getChildrenOfKind(SyntaxKind.PropertySignature)
            .map((propertySignature) => {
              const propertySymbol = propertySignature.getSymbol();
              const propertyTypeNode = propertySignature.getTypeNode();
              return {
                name: propNameWrapper(propertySignature.getName(), {
                  isOptional: propertySymbol?.isOptional() || false,
                }),
                value: propertyTypeNode
                  ? next({
                      typeNode: propertyTypeNode,
                      type: propertyTypeNode.getType(),
                      typeParameters,
                    })
                  : "unknown /** unknown property signature */",
                comments: propertySignature
                  .getJsDocs()
                  .map((e) => e.getText().trim()),
              };
            });

          const hunks: Array<string> = [];

          for (const { key, val } of indexSignatures) {
            hunks.push(format("[k: %s]: %s", key, val));
          }

          for (const signature of constructSignatures) {
            const { parameters, returnType } = renderCallSignatureAssets(
              signature,
              (data) => next({ ...data, typeParameters }),
            );
            hunks.push(
              format(
                "new (%s): %s", //
                parameters.join(", "),
                returnType,
              ),
            );
          }

          for (const { name, signatures, comments } of methodSignatures) {
            for (const signature of signatures) {
              const { parameters, returnType } = renderCallSignatureAssets(
                signature,
                (data) => next({ ...data, typeParameters }),
              );
              hunks.push(
                [
                  ...comments,
                  format(`${name}(%s): %s`, parameters.join(", "), returnType),
                ].join("\n"),
              );
            }
          }

          for (const { name, value, comments } of propertySignatures) {
            hunks.push(
              [
                //
                ...comments,
                format("%s: %s", name, value),
              ].join("\n"),
            );
          }

          return format(
            hunks.length ? "{\n%s\n}" : "{%s}",
            hunks.map((e) => indent(e)).join(";\n"),
          );
        }
      : undefined;
  },

  unionHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.UnionType)
      ? (next) => {
          /**
           * type.getUnionTypes() is dropping undefined elements.
           * using typeNode.forEachChildAsArray() to get original user input.
           * */
          return typeNode
            .forEachChildAsArray()
            .map((typeNode) => {
              return next({
                typeNode: typeNode as TypeNode,
                type: typeNode.getType(),
                typeParameters,
              });
            })
            .join(" | ");
        }
      : undefined;
  },

  intersectionHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.IntersectionType)
      ? (next) => {
          /** type.getIntersectionTypes() is converting whole type to undefined
           * if it contains an undefined element.
           * using typeNode.forEachChildAsArray() to get original user input.
           * */
          return typeNode
            .forEachChildAsArray()
            .map((intersectionTypeNode) => {
              return next({
                typeNode: intersectionTypeNode as TypeNode,
                type: intersectionTypeNode.getType(),
                typeParameters,
              });
            })
            .join(" & ");
        }
      : undefined;
  },

  tupleHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.TupleType)
      ? (next) => {
          const elements = typeNode.getElements().map((element) => {
            const isOptional = element.isKind(SyntaxKind.OptionalType);
            let isRest = element.isKind(SyntaxKind.RestType);

            let name: string | undefined;
            let value = "unknown /** unknown tuple element signature */";

            if (element.isKind(SyntaxKind.NamedTupleMember)) {
              name = element.hasQuestionToken()
                ? format("%s?", element.getName())
                : element.getName();

              const elementTypeNode = element.getTypeNode();

              value = next({
                typeNode: elementTypeNode,
                type: elementTypeNode.getType(),
                typeParameters,
              });

              if (element.getFirstChildByKind(SyntaxKind.DotDotDotToken)) {
                isRest = true;
              }
            } else if (element.isKind(SyntaxKind.RestType)) {
              const parenthesizedType = element.getFirstChildByKind(
                SyntaxKind.ParenthesizedType,
              );
              if (parenthesizedType) {
                const innertTypeNode = parenthesizedType.getTypeNode();
                value = format(
                  "(%s)",
                  next({
                    typeNode: innertTypeNode,
                    type: innertTypeNode.getType(),
                    typeParameters,
                  }),
                );
              } else {
                const elementTypeNode = element.getTypeNode();
                value = next({
                  typeNode: elementTypeNode,
                  type: elementTypeNode.getType(),
                  typeParameters,
                });
              }
            } else {
              value = next({
                typeNode: element,
                type: element.getType(),
                typeParameters,
              });
            }

            if (isRest) {
              return name
                ? format("...%s: %s", name, value)
                : format("...%s", value);
            }

            return name
              ? format("%s: %s", name, value)
              : isOptional
                ? format("(%s)?", value)
                : value;
          });

          return format(
            elements.length ? "[\n%s\n]" : "[%s]",
            elements.map((e) => indent(e)).join(",\n"),
          );
        }
      : undefined;
  },

  arrayHandler({ typeNode, typeParameters }) {
    return typeNode.isKind(SyntaxKind.ArrayType)
      ? (next) => {
          /**
           * getTypeNode() does not seem to work here.
           * getFirstChild() may return artefacts.
           * */
          let [arrayTypeNode] = typeNode.forEachChildAsArray() as [
            ArrayTypeNode,
            ...unknown[],
          ];

          let isParenthesized = false;

          if (arrayTypeNode?.isKind(SyntaxKind.ParenthesizedType)) {
            /**
             * getFirstChild() returns OpenParenToken, so using forEachChildAsArray()
             * (ParenthesizedType can not have multiple elements anyway)
             * not sure about getTypeNode() in this context.
             * */
            arrayTypeNode = (
              arrayTypeNode.forEachChildAsArray() as [
                ArrayTypeNode,
                ...unknown[],
              ]
            )[0];

            isParenthesized = true;
          }

          if (!arrayTypeNode) {
            return "unknown /** unknown array signature */";
          }

          return format(
            isParenthesized //
              ? "(%s)[]"
              : "%s[]",
            next({
              typeNode: arrayTypeNode as TypeNode,
              type: arrayTypeNode.getType(),
              typeParameters,
            }),
          );
        }
      : undefined;
  },

  functionSignatureHandler({ type, typeParameters }) {
    const callSignatures = type.getCallSignatures();

    // if a type has call signatures, it is definitelly a function, is not it?
    return callSignatures.length
      ? (next) => {
          const signatures = callSignatures.map((signature) => {
            const {
              //
              generics,
              parameters,
              returnType,
            } = renderCallSignatureAssets(signature, (data) => {
              return next({ ...data, typeParameters });
            });
            return format(
              callSignatures.length > 1 //
                ? "%s(%s): %s"
                : "%s(%s) => %s",
              generics.length ? format("<%s>", generics.join(", ")) : "",
              parameters.join(", "),
              returnType,
            );
          });
          return format(
            callSignatures.length > 1 //
              ? "{\n%s\n}"
              : "(%s)",
            signatures.join("\n"),
          );
        }
      : undefined;
  },
};

const renderTypeParameter = (param: TypeParameterDeclaration, next: Next) => {
  const name = param.getName();
  const constraint = param.getConstraint();
  return {
    name,
    text: constraint
      ? format(
          "%s extends %s",
          name,
          next({ typeNode: constraint, type: constraint.getType() }),
        )
      : name,
  };
};

const renderCallSignatureAssets = (signature: Signature, next: Next) => {
  const declaration = signature.getDeclaration() as
    | CallSignatureDeclaration
    | MethodDeclaration;

  const generics = declaration
    .getTypeParameters()
    .map((param) => renderTypeParameter(param, next).text);

  const parameters = declaration
    .getChildrenOfKind(SyntaxKind.Parameter)
    .map((param) => renderCallSignatureParameter(param, next));

  const returnTypeNode = declaration.getReturnTypeNode();

  return {
    generics,
    parameters,
    returnType: returnTypeNode
      ? next({
          typeNode: returnTypeNode,
          type: returnTypeNode.getType(),
        })
      : "unknown /** unknown return type */",
  };
};

const renderCallSignatureParameter = (
  param: ParameterDeclaration,
  next: Next,
) => {
  const paramTypeNode = param.getTypeNode();

  const value = paramTypeNode
    ? next({
        typeNode: paramTypeNode,
        type: paramTypeNode.getType(),
      })
    : "unknown /** unknown param node */";

  return param.isRestParameter()
    ? format("...%s: %s", param.getName(), value)
    : format(
        "%s%s: %s",
        param.getName(),
        param.hasQuestionToken() ? "?" : "",
        value,
      );
};

const isPrimitive = (type: Type) => {
  return [
    type.isBoolean,
    type.isBooleanLiteral,
    type.isNumber,
    type.isNumberLiteral,
    type.isBigInt,
    type.isString,
    type.isStringLiteral,
    type.isUndefined,
    type.isNull,
    type.isUnknown,
    type.isAny,
    type.isNever,
  ].some((e) => e.call(type));
};

const propNameWrapper = (
  propName: string,
  flags?: { isOptional?: boolean },
) => {
  let name = propName;

  if (/[^\w]/.test(name) || /^\d/.test(name) || name === "") {
    name = /^"|^'/.test(name) ? name : `"${name}"`;
  }

  if (flags?.isOptional) {
    name = `${name}?`;
  }

  return name;
};

const indent = (hunk: string, level = 1) => {
  return hunk.replace(/^/gm, " ".repeat(level * 2));
};
