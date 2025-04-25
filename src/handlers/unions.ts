import { format } from "node:util";

import { SyntaxKind, type TypeNode } from "ts-morph";

import type { Handler } from "@/types";

export const unionHandler: Handler = ({ typeNode, typeParameters }) => {
  return typeNode.isKind(SyntaxKind.UnionType)
    ? (next) => {
        /**
         * type.getUnionTypes() is dropping undefined elements.
         * using typeNode.forEachChildAsArray() to get original user input.
         * */
        return format(
          "(%s)",
          typeNode
            .forEachChildAsArray()
            .map((typeNode) => {
              return next({
                typeNode: typeNode as TypeNode,
                type: typeNode.getType(),
                typeParameters,
              });
            })
            .join(" | "),
        );
      }
    : undefined;
};
