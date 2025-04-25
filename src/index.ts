import { type SourceFile, Project } from "ts-morph";

import type { HandlerStack, Traverse, UserOptions } from "./types";
import builtins from "./builtins";
import { isPrimitive, renderTypeParameter } from "./utils";

import { typeOperatorHandler } from "./handlers/type-operators";
import { symbolHandler } from "./handlers/symbol-keyword";
import { voidHandler } from "./handlers/void-keyword";
import { objectHandler } from "./handlers/object-keyword";
import { constructorTypeHandler } from "./handlers/constructors";
import { conditionalTypeHandler } from "./handlers/conditional-types";
import { optionalTypeHandler } from "./handlers/optional-types";
import { parenthesizedTypeHandler } from "./handlers/parenthesized-types";
import { indexedAccessTypeHandler } from "./handlers/indexed-access";
import { templateLiteralTypeHandler } from "./handlers/template-literals";
import { mappedTypeHandler } from "./handlers/mapped-types";
import { inferTypeHandler } from "./handlers/infers";
import { typeReferenceHandler } from "./handlers/type-references";
import { typeLiteralHandler } from "./handlers/type-literals";
import { typeQueryHandler } from "./handlers/type-queries";
import { unionHandler } from "./handlers/unions";
import { intersectionHandler } from "./handlers/intersections";
import { tupleHandler } from "./handlers/tuples";
import { arrayHandler } from "./handlers/arrays";
import { callSignatureHandler } from "./handlers/call-signatures";

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
  comments: Array<string>;
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

  const { typesFilter, maxDepth = 16 } = { ...opts };

  const overrides: Record<string, string> = {
    ...builtins,
    ...opts?.overrides,
  };

  const handlerStack: HandlerStack = {
    /**
     * always run typeOperatorHandler first!
     * */
    typeOperatorHandler,
    symbolHandler,
    voidHandler,
    objectHandler,
    constructorTypeHandler,
    conditionalTypeHandler,
    optionalTypeHandler,
    parenthesizedTypeHandler,
    indexedAccessTypeHandler,
    templateLiteralTypeHandler,
    mappedTypeHandler,
    inferTypeHandler,
    typeReferenceHandler,
    typeLiteralHandler,
    typeQueryHandler,
    unionHandler,
    intersectionHandler,
    tupleHandler,
    arrayHandler,
    callSignatureHandler,
  };

  const traverse: Traverse = (data, opts, depthLevel = 1) => {
    if (depthLevel > maxDepth) {
      return "never /** maxDepth exceeded */";
    }

    for (const key of Object.keys(handlerStack) as Array<keyof HandlerStack>) {
      const handler = handlerStack[key](data);
      if (handler) {
        return handler((next) => traverse(next, opts, depthLevel + 1), opts);
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
      return typeParameters.length
        ? [
            {
              name: typeName,
              parameters: typeParameters,
              text: traverse(
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
              ),
              comments,
            },
          ]
        : [
            {
              name: typeName,
              parameters: [],
              text: traverse({ typeNode, type }, opts),
              comments,
            },
          ];
    }

    return [];
  });
};
