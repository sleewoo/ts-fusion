import { format } from "node:util";

import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";
import { renderCallSignatureParameter, renderTypeParameter } from "@/utils";

export const constructorTypeHandler: Handler = ({ typeNode }) => {
  return typeNode.isKind(SyntaxKind.ConstructorType)
    ? (next) => {
        const generics = typeNode
          .getChildrenOfKind(SyntaxKind.TypeParameter)
          .map((param) => renderTypeParameter(param, next).text);

        const parameters = typeNode
          .getChildrenOfKind(SyntaxKind.Parameter)
          .map((param) => renderCallSignatureParameter(param, next));

        const returnTypeNode = typeNode.getReturnTypeNode();

        return format(
          "new %s(%s) => %s",
          generics.length ? format("<%s>", generics.join(", ")) : "",
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
};
