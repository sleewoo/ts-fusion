import { SyntaxKind, type TypeNode } from "ts-morph";

import type { HandlerQualifier } from "@/types";

export const handlerQualifier: HandlerQualifier = ({ typeNode }) => {
  return typeNode.isKind(SyntaxKind.TypeQuery)
    ? (next, { overrides }) => {
        /**
         * getExprName().getText() always returns only the name, without parameters.
         * if exprName is a builtin/override, return it as is.
         * otherwise get first child and pass it down the chain.
         * */
        if (overrides[typeNode.getExprName().getText()]) {
          return typeNode.getText();
        }

        const [innerTypeNode] = typeNode.forEachChildAsArray();

        return next({
          typeNode: innerTypeNode as TypeNode,
          type: innerTypeNode.getType(),
        });
      }
    : undefined;
};
