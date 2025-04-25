import { format } from "node:util";

import type { Handler } from "@/types";
import { renderCallSignatureAssets } from "@/utils";

export const callSignatureHandler: Handler = ({ type, typeParameters }) => {
  const callSignatures = type.getCallSignatures();

  // if a type has call signatures, it is definitelly a function, is not it?
  return callSignatures.length
    ? (next) => {
        const signatures = callSignatures.map((signature) => {
          const {
            //
            generics,
            parameters,
            returnType,
          } = renderCallSignatureAssets(signature, (data) => {
            return next({ ...data, typeParameters });
          });
          return format(
            callSignatures.length > 1 //
              ? "%s(%s): %s"
              : "%s(%s) => %s",
            generics.length ? format("<%s>", generics.join(", ")) : "",
            parameters.join(", "),
            returnType,
          );
        });
        return format(
          callSignatures.length > 1 //
            ? "{\n%s\n}"
            : "(%s)",
          signatures.join("\n"),
        );
      }
    : undefined;
};
