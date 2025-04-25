import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";

export const inferTypeHandler: Handler = ({ typeNode }) => {
  return typeNode.isKind(SyntaxKind.InferType)
    ? () => typeNode.getText()
    : undefined;
};
