import { format } from "node:util";

import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";

export const indexedAccessTypeHandler: Handler = ({
  typeNode,
  typeParameters,
}) => {
  return typeNode.isKind(SyntaxKind.IndexedAccessType)
    ? (next) => {
        const objectTypeNode = typeNode.getObjectTypeNode();
        const indexTypeNode = typeNode.getIndexTypeNode();
        return format(
          "(%s)[%s]",
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
};
