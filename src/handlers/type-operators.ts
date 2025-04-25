import { format } from "node:util";

import { SyntaxKind, type TypeNode } from "ts-morph";

import type { Handler } from "@/types";

export const typeOperatorHandler: Handler = ({ typeNode, typeParameters }) => {
  return typeNode.isKind(SyntaxKind.TypeOperator)
    ? (next) => {
        const innerTypeNode = typeNode.getTypeNode();
        const innerType = innerTypeNode.getType();

        let template = "%s";

        if (typeNode.getFirstChildByKind(SyntaxKind.KeyOfKeyword)) {
          template = `keyof ${template}`;
        }

        if (typeNode.getFirstChildByKind(SyntaxKind.ReadonlyKeyword)) {
          template = `readonly ${template}`;
        }

        if (typeNode.getFirstChildByKind(SyntaxKind.UniqueKeyword)) {
          template = `unique ${template}`;
        }

        return format(
          template,
          next({
            typeNode: innerTypeNode as TypeNode,
            type: innerType,
            typeParameters,
          }),
        );
      }
    : undefined;
};
