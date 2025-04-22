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
  Project,
  SyntaxKind,
  TypeFlags,
} from "ts-morph";

import builtins from "./builtins";

type ManagedSignatures =
  | "symbol"
  | "void"
  | "object"
  | "conditionalType"
  | "optionalType"
  | "parenthesizedType"
  | "indexedAccessType"
  | "mappedType"
  | "typeOperator"
  | "typeReference"
  | "typeLiteral"
  | "union"
  | "intersection"
  | "tuple"
  | "array"
  | "functionSignature";

type TraverseData = {
  typeNode: TypeNode;
  type: Type;
  typeParameters?: Record<string, string> | undefined;
};

type Traverse = (traverseData: TraverseData, indentLevel?: number) => string;

type HandlerStack = Record<
  `${ManagedSignatures}Handler`,
  (
    traverseData: TraverseData,
    indentLevel: number,
  ) => undefined | (() => string)
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
   * default: 9 */
  maxDepth?: number;
};

export default (
  // either a project or path to tsconfig.json
  tsConfigFilePathOrProject: string | Project,
  // either sourceFile or path to file
  file: string | SourceFile,
  opts?: UserOptions,
) => {
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

  const traverse = traverseFactory(opts);

  return sourceFile
    .getTypeAliases()
    .flatMap((typeAlias) => {
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
              format(
                "export type %s<%s> = %s;\n",
                typeName,
                typeParameters.map(({ text }) => text).join(", "),
                traverse({
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
              ),
            ]
          : [
              format(
                "export type %s = %s;\n",
                typeName,
                traverse({ typeNode, type }),
              ),
            ];
      }

      return [];
    })
    .join("\n");
};

const traverseFactory = (opts: UserOptions | undefined): Traverse => {
  const overrides: Record<string, string> = {
    ...builtins,
    ...opts?.overrides,
  };

  const { maxDepth = 9 } = { ...opts };

  const traverse: Traverse = (factorySettings, factoryIndentLevel = 1) => {
    if (factoryIndentLevel > maxDepth) {
      return `"..."`;
    }

    const handlerStack: HandlerStack = {
      symbolHandler({ type }) {
        return type.getFlags() & (TypeFlags.ESSymbol | TypeFlags.UniqueESSymbol)
          ? () => "symbol"
          : undefined;
      },

      voidHandler({ typeNode }) {
        return typeNode.isKind(SyntaxKind.VoidKeyword)
          ? () => "void"
          : undefined;
      },

      objectHandler({ typeNode }) {
        return typeNode.isKind(SyntaxKind.ObjectKeyword)
          ? () => "object"
          : undefined;
      },

      conditionalTypeHandler({ typeNode }) {
        return typeNode.isKind(SyntaxKind.ConditionalType)
          ? () => typeNode.getText()
          : undefined;
      },

      optionalTypeHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.OptionalType)
          ? () => {
              const [innerType] = typeNode.forEachChildAsArray();
              return traverse(
                {
                  typeNode: innerType as TypeNode,
                  type: innerType.getType(),
                  typeParameters,
                },
                indentLevel,
              );
            }
          : undefined;
      },

      parenthesizedTypeHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.ParenthesizedType)
          ? () => {
              const [innerType] = typeNode.forEachChildAsArray();
              return traverse(
                {
                  typeNode: innerType as TypeNode,
                  type: innerType.getType(),
                  typeParameters,
                },
                indentLevel,
              );
            }
          : undefined;
      },

      indexedAccessTypeHandler({ typeNode, typeParameters }) {
        return typeNode.isKind(SyntaxKind.IndexedAccessType)
          ? () => {
              const objectTypeNode = typeNode.getObjectTypeNode();
              const indexTypeNode = typeNode.getIndexTypeNode();
              return format(
                "%s[%s]",
                traverse({
                  typeNode: objectTypeNode,
                  type: objectTypeNode.getType(),
                  typeParameters,
                }),
                traverse({
                  typeNode: indexTypeNode,
                  type: indexTypeNode.getType(),
                  typeParameters,
                }),
              );
            }
          : undefined;
      },

      mappedTypeHandler({ typeNode }) {
        return typeNode.isKind(SyntaxKind.MappedType)
          ? () => {
              const mappedTypeParameter = typeNode.getTypeParameter();

              const mappedTypeConstraint = mappedTypeParameter.getConstraint();

              const mappedTypeNode = typeNode.getTypeNode();

              return format(
                "{ [%s in %s]%s: %s }",
                mappedTypeParameter.getNameNode().getText(),
                mappedTypeConstraint
                  ? traverse({
                      typeNode: mappedTypeConstraint,
                      type: mappedTypeConstraint.getType(),
                    })
                  : "unknown /** unresolved mapped type constraint */",
                typeNode.getQuestionToken() ? "?" : "",
                mappedTypeNode
                  ? traverse({
                      typeNode: mappedTypeNode,
                      type: mappedTypeNode?.getType(),
                    })
                  : "unknown /** unresolved mapped type node */",
              );
            }
          : undefined;
      },

      typeOperatorHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.TypeOperator)
          ? () => {
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
                traverse(
                  {
                    typeNode: innertTypeNode as TypeNode,
                    type: innertTypeNode.getType(),
                    typeParameters,
                  },
                  indentLevel,
                ),
              );
            }
          : undefined;
      },

      typeReferenceHandler({ typeNode, type, typeParameters }) {
        return typeNode.isKind(SyntaxKind.TypeReference)
          ? () => {
              const aliasSymbol =
                type.getAliasSymbol() ??
                type.getSymbol() ??
                type.getTargetType()?.getSymbol();

              const aliasName = aliasSymbol?.getName();

              if (aliasName && typeParameters?.[aliasName]) {
                return typeParameters[aliasName];
              }

              const typeArguments = typeNode.getTypeArguments().map((param) => {
                return traverse({ typeNode: param, type: param.getType() });
              });

              if (aliasName && overrides[aliasName]) {
                return typeArguments.length
                  ? format(
                      "%s<%s>",
                      overrides[aliasName],
                      typeArguments.join(", "),
                    )
                  : overrides[aliasName];
              }

              const aliasDeclaration = aliasSymbol
                ?.getDeclarations()
                ?.find((e) => e.isKind(SyntaxKind.TypeAliasDeclaration));

              const aliasNode = aliasDeclaration
                ? aliasDeclaration.getTypeNode()
                : undefined;

              if (aliasNode) {
                return traverse({
                  typeNode: aliasNode,
                  type: aliasNode.getType(),
                  typeParameters: aliasDeclaration
                    ?.getTypeParameters()
                    .reduce((map: Record<string, string>, param, i) => {
                      map[param.getName()] = typeArguments[i];
                      return map;
                    }, {}),
                });
              }

              /**
               * if no alias, most likely the target type got "hard" flattened by TypeScript.
               *
               * some "complex" types are flattened and losing symbol, eg:
               * type Re16 = readonly [number, ...(readonly boolean[])];
               * type RT05 = [header: string, ...rows: Array<string[]>];
               *
               * TypeScript treats these types as a synthetic structural type (not a direct alias).
               * These types loses alias symbol because considered a "compound" type.
               *
               * The only way, for now, to render these types is to rely on getText.
               * With one caveat: if they have references to another types,
               * they wont be resolved, rather rendered as is.
               * */

              return format("%s /** unresolved */", typeNode.getText());
            }
          : undefined;
      },

      typeLiteralHandler({ typeNode, type, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.TypeLiteral)
          ? () => {
              /**
               * collecting string/number index signatures, without comments:
               *    Record<string, ...>
               *    { [key: string]: ... }
               *    Record<number, ...>
               *    { [key: number]: ... }
               */
              const numberIndexSignature = type.getNumberIndexType();
              const stringIndexSignature = type.getStringIndexType();

              /**
               * collecting template index signatures, without comments:
               *     Record<`some_${string}`, ...>
               *     { [key: `some_${string}`]: ... }
               */
              const templateIndexSignatures = typeNode
                .getIndexSignatures()
                .flatMap((signature) => {
                  const keyTypeNode = signature.getKeyTypeNode();
                  if (!keyTypeNode.isKind(SyntaxKind.TemplateLiteralType)) {
                    return [];
                  }
                  const returnTypeNode = signature.getReturnTypeNode();
                  return [
                    {
                      key: keyTypeNode.getText(),
                      val: returnTypeNode
                        ? traverse({
                            typeNode: returnTypeNode,
                            type: returnTypeNode.getType(),
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
                      ? traverse(
                          {
                            typeNode: propertyTypeNode,
                            type: propertyTypeNode.getType(),
                            typeParameters,
                          },
                          indentLevel,
                        )
                      : "unknown /** unknown property signature */",
                    comments: propertySignature
                      .getJsDocs()
                      .map((e) => e.getText().trim()),
                  };
                });

              const hunks: Array<string> = [];

              for (const [indexSignature, template] of [
                [numberIndexSignature, "[k: number]: %s"],
                [stringIndexSignature, "[k: string]: %s"],
              ] as Array<[Type, string]>) {
                if (indexSignature) {
                  const declaration = indexSignature
                    .getSymbol()
                    ?.getDeclarations()
                    .find((e) => e.isKind(SyntaxKind.TypeLiteral));
                  hunks.push(
                    format(
                      template,
                      declaration
                        ? traverse(
                            {
                              typeNode: declaration,
                              type: declaration.getType(),
                            },
                            indentLevel,
                          )
                        : "unknown /** unresolved index signature */",
                    ),
                  );
                }
              }

              for (const { key, val } of templateIndexSignatures) {
                hunks.push(format("[k: %s]: %s", key, val));
              }

              for (const signature of constructSignatures) {
                const { parameters, returnType } = renderCallSignatureAssets(
                  signature,
                  (data) => traverse({ ...data, typeParameters }),
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
                    (data) => traverse({ ...data, typeParameters }),
                  );
                  hunks.push(
                    [
                      ...comments,
                      format(
                        `${name}(%s): %s`,
                        parameters.join(", "),
                        returnType,
                      ),
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

      unionHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.UnionType)
          ? () => {
              /**
               * type.getUnionTypes() is dropping undefined elements.
               * using typeNode.forEachChildAsArray() to get original user input.
               * */
              return typeNode
                .forEachChildAsArray()
                .map((typeNode) => {
                  return traverse(
                    {
                      typeNode: typeNode as TypeNode,
                      type: typeNode.getType(),
                      typeParameters,
                    },
                    indentLevel,
                  );
                })
                .join(" | ");
            }
          : undefined;
      },

      intersectionHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.IntersectionType)
          ? () => {
              /** type.getIntersectionTypes() is converting whole type to undefined
               * if it contains an undefined element.
               * using typeNode.forEachChildAsArray() to get original user input.
               * */
              return typeNode
                .forEachChildAsArray()
                .map((intersectionTypeNode) => {
                  return traverse(
                    {
                      typeNode: intersectionTypeNode as TypeNode,
                      type: intersectionTypeNode.getType(),
                      typeParameters,
                    },
                    indentLevel,
                  );
                })
                .join(" & ");
            }
          : undefined;
      },

      tupleHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.TupleType)
          ? () => {
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

                  value = traverse({
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
                      traverse({
                        typeNode: innertTypeNode,
                        type: innertTypeNode.getType(),
                        typeParameters,
                      }),
                    );
                  } else {
                    const elementTypeNode = element.getTypeNode();
                    value = traverse({
                      typeNode: elementTypeNode,
                      type: elementTypeNode.getType(),
                      typeParameters,
                    });
                  }
                } else {
                  value = traverse(
                    {
                      typeNode: element,
                      type: element.getType(),
                      typeParameters,
                    },
                    indentLevel,
                  );
                }

                if (isRest) {
                  return indent(
                    name
                      ? format("...%s: %s", name, value)
                      : format("...%s", value),
                  );
                }

                return indent(
                  name
                    ? format("%s: %s", name, value)
                    : isOptional
                      ? format("(%s)?", value)
                      : value,
                );
              });

              return format(
                elements.length ? "[\n%s\n]" : "[%s]",
                elements.join(",\n"),
              );
            }
          : undefined;
      },

      arrayHandler({ typeNode, typeParameters }, indentLevel) {
        return typeNode.isKind(SyntaxKind.ArrayType)
          ? () => {
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
                traverse(
                  {
                    typeNode: arrayTypeNode as TypeNode,
                    type: arrayTypeNode.getType(),
                    typeParameters,
                  },
                  indentLevel,
                ),
              );
            }
          : undefined;
      },

      functionSignatureHandler({ type, typeParameters }) {
        const callSignatures = type.getCallSignatures();

        // if a type has call signatures, it is definitelly a function, is not it?
        return callSignatures.length
          ? () => {
              const signatures = callSignatures.map((signature) => {
                const {
                  //
                  generics,
                  parameters,
                  returnType,
                } = renderCallSignatureAssets(signature, (data) => {
                  return traverse({ ...data, typeParameters });
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

    for (const key of Object.keys(handlerStack) as Array<keyof HandlerStack>) {
      const handler = handlerStack[key](factorySettings, factoryIndentLevel);
      if (handler) {
        return handler();
      }
    }

    // if no handler matched so far, perhaps it's a primitive value
    if (isPrimitive(factorySettings.type)) {
      return factorySettings.type.getText(factorySettings.typeNode);
    }

    return "unknown";
  };

  return traverse;
};

const renderTypeParameter = (
  param: TypeParameterDeclaration,
  traverse: Traverse,
) => {
  const name = param.getName();
  const constraint = param.getConstraint();
  return {
    name,
    text: constraint
      ? format(
          "%s extends %s",
          name,
          traverse({ typeNode: constraint, type: constraint.getType() }),
        )
      : name,
  };
};

const renderCallSignatureAssets = (
  signature: Signature,
  traverse: Traverse,
) => {
  const declaration = signature.getDeclaration() as
    | CallSignatureDeclaration
    | MethodDeclaration;

  const generics = declaration.getTypeParameters().map((param) => {
    return renderTypeParameter(param, traverse).text;
  });

  const parameters = declaration
    .getChildrenOfKind(SyntaxKind.Parameter)
    .map((param) => {
      const paramTypeNode = param.getTypeNode();

      const value = paramTypeNode
        ? traverse({
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
    });

  const returnTypeNode = declaration.getReturnTypeNode();

  return {
    generics,
    parameters,
    returnType: returnTypeNode
      ? traverse({
          typeNode: returnTypeNode,
          type: returnTypeNode.getType(),
        })
      : "unknown /** unknown return type */",
  };
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

const indent = (text: string, l = 1) => text.replace(/^/gm, " ".repeat(l * 2));
