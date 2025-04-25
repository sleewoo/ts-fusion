import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";

export const objectHandler: Handler = ({ typeNode }) => {
  return typeNode.isKind(SyntaxKind.ObjectKeyword) ? () => "object" : undefined;
};
