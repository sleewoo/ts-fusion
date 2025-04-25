import { TypeFlags } from "ts-morph";

import type { Handler } from "@/types";

export const symbolHandler: Handler = ({ type }) => {
  return type.getFlags() & (TypeFlags.ESSymbol | TypeFlags.UniqueESSymbol)
    ? () => "symbol"
    : undefined;
};
