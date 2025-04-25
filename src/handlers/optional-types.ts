import { SyntaxKind, type TypeNode } from "ts-morph";

import type { Handler } from "@/types";

export const optionalTypeHandler: Handler = ({ typeNode, typeParameters }) => {
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
};
