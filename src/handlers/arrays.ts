import { format } from "node:util";

import { type ArrayTypeNode, SyntaxKind, type TypeNode } from "ts-morph";

import type { HandlerQualifier } from "@/types";

export const handlerQualifier: HandlerQualifier = ({
  typeNode,
  typeParameters,
}) => {
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
            arrayTypeNode.forEachChildAsArray() as [ArrayTypeNode, ...unknown[]]
          )[0];

          isParenthesized = true;
        }

        if (!arrayTypeNode) {
          return "unknown /** unknown array signature */";
        }

        const arrayType = arrayTypeNode.getType();

        return format(
          isParenthesized ? "(%s)[]" : "%s[]",
          next({
            typeNode: arrayTypeNode as TypeNode,
            type: arrayType,
            typeParameters,
          }),
        );
      }
    : undefined;
};
