import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";

export const voidHandler: Handler = ({ typeNode }) => {
  return typeNode.isKind(SyntaxKind.VoidKeyword) ? () => "void" : undefined;
};
