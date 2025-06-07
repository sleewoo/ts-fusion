import { format } from "node:util";

import { type SourceFile, Project } from "ts-morph";

import type { FlattenedLiteral, CycleSignature, UserOptions } from "./types";
import builtins from "./builtins";
import { isPrimitive, renderTypeParameter } from "./utils";

import { handlerQualifier as typeOperatorQualifier } from "./handlers/type-operators";
import { handlerQualifier as symbolQualifier } from "./handlers/symbol-keyword";
import { handlerQualifier as voidQualifier } from "./handlers/void-keyword";
import { handlerQualifier as objectQualifier } from "./handlers/object-keyword";
import { handlerQualifier as constructorTypeQualifier } from "./handlers/constructors";
import { handlerQualifier as conditionalTypeQualifier } from "./handlers/conditional-types";
import { handlerQualifier as optionalTypeQualifier } from "./handlers/optional-types";
import { handlerQualifier as parenthesizedTypeQualifier } from "./handlers/parenthesized-types";
import { handlerQualifier as indexedAccessTypeQualifier } from "./handlers/indexed-access";
import { handlerQualifier as templateLiteralTypeQualifier } from "./handlers/template-literals";
import { handlerQualifier as mappedTypeQualifier } from "./handlers/mapped-types";
import { handlerQualifier as inferTypeQualifier } from "./handlers/infers";
import { handlerQualifier as typeReferenceQualifier } from "./handlers/type-references";
import { handlerQualifier as typeLiteralQualifier } from "./handlers/type-literals";
import { handlerQualifier as typeQueryQualifier } from "./handlers/type-queries";
import { handlerQualifier as unionQualifier } from "./handlers/unions";
import { handlerQualifier as intersectionQualifier } from "./handlers/intersections";
import { handlerQualifier as tupleQualifier } from "./handlers/tuples";
import { handlerQualifier as arrayQualifier } from "./handlers/arrays";
import { handlerQualifier as callSignatureQualifier } from "./handlers/call-signatures";

export type { FlattenedLiteral };

export default (file: string, opts?: UserOptions) => {
  const project = new Project({ compilerOptions: { skipLibCheck: true } });
  const sourceFile = project.addSourceFileAtPath(file);
  return flattener(project, sourceFile, opts);
};

export const flattener = (
  project: Project,
  file: string | SourceFile,
  opts?: UserOptions,
): Array<FlattenedLiteral> => {
  const sourceFile =
    typeof file === "string"
      ? project.getSourceFile(file) || project.addSourceFileAtPath(file)
      : file;

  const { typesFilter, escapeBackticks, maxDepth = 16 } = { ...opts };

  const overrides: Record<string, string> = {
    ...builtins,
    ...opts?.overrides,
  };

  const handlerStack = [
    /**
     * always run typeOperatorQualifier first!
     * */
    typeOperatorQualifier,
    symbolQualifier,
    voidQualifier,
    objectQualifier,
    constructorTypeQualifier,
    conditionalTypeQualifier,
    optionalTypeQualifier,
    parenthesizedTypeQualifier,
    indexedAccessTypeQualifier,
    templateLiteralTypeQualifier,
    mappedTypeQualifier,
    inferTypeQualifier,
    typeReferenceQualifier,
    typeLiteralQualifier,
    typeQueryQualifier,
    unionQualifier,
    intersectionQualifier,
    tupleQualifier,
    arrayQualifier,
    callSignatureQualifier,
  ];

  const traverse: CycleSignature = (data, opts, depthLevel = 1) => {
    if (depthLevel > maxDepth) {
      return "never /** maxDepth exceeded */";
    }

    for (const qualifier of handlerStack) {
      const handler = qualifier(data);
      if (handler) {
        return handler((next) => {
          return traverse(next, opts, depthLevel + 1);
        }, opts);
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

    const comments = typeAlias
      .getLeadingCommentRanges()
      .map((e) => e.getText());

    const typeName = typeAlias.getName();

    const type = typeAlias.getType();

    const opts = {
      overrides: {
        ...overrides,
        // overriding type to avoid recursing into itself
        [typeName]: typeName,
      },
    };

    const typeParameters = typeAlias.getTypeParameters().map((param) => {
      return renderTypeParameter(param, (data) => traverse(data, opts));
    });

    if (!typesFilter || typesFilter(typeName)) {
      const text = traverse(
        {
          typeNode,
          type,
          typeParameters: typeParameters.reduce(
            (map: Record<string, string>, { name }) => {
              map[name] = name;
              return map;
            },
            {},
          ),
        },
        opts,
      );

      return [
        {
          name: typeName,
          parameters: typeParameters,
          comments,
          get text() {
            return escapeBackticks //
              ? text.replace(/`/g, "\\`")
              : text;
          },
          get fullText() {
            return format(
              "%s\nexport type %s%s = %s",
              comments.join("\n"),
              typeName,
              typeParameters.length
                ? format("<%s>", typeParameters.map((e) => e.text).join(", "))
                : "",
              this.text,
            ).trim();
          },
        },
      ];
    }

    return [];
  });
};
