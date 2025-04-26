import { TypeFlags } from "ts-morph";

import type { HandlerQualifier } from "@/types";

export const handlerQualifier: HandlerQualifier = ({ type }) => {
  return type.getFlags() & (TypeFlags.ESSymbol | TypeFlags.UniqueESSymbol)
    ? () => "symbol"
    : undefined;
};
