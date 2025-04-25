import { format } from "node:util";

import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";
import { indent, renderCallSignatureAssets } from "@/utils";

export const typeLiteralHandler: Handler = ({
  typeNode,
  type,
  typeParameters,
}) => {
  return typeNode.isKind(SyntaxKind.TypeLiteral)
    ? (next) => {
        /**
         * collecting regular index signatures, without comments:
         *    Record<string, ...>
         *    { [key: string]: ... }
         *    Record<number, ...>
         *    { [key: number]: ... }
         * and template index signatures, also without comments:
         *     Record<`some_${string}`, ...>
         *     { [key: `some_${string}`]: ... }
         */
        const indexSignatures = typeNode
          .getIndexSignatures()
          .flatMap((signature) => {
            const keyTypeNode = signature.getKeyTypeNode();
            const returnTypeNode = signature.getReturnTypeNode();
            return [
              {
                key: keyTypeNode.getText(),
                val: returnTypeNode
                  ? next({
                      typeNode: returnTypeNode,
                      type: returnTypeNode.getType(),
                      typeParameters,
                    })
                  : "unknown /** unresolved */",
              },
            ];
          });

        /**
         * collecting construct signatures, without comments:
         *    export type Constructable = {
         *      new (...): ...;
         *    }
         * */
        const constructSignatures = type.getConstructSignatures();

        /**
         * collecting method signatures, with comments (jsDoc format only):
         *    export type ObjectWithMethods = {
         *      calculate(...): ...;
         *    }
         * */
        const methodSignatures = typeNode
          .getChildrenOfKind(SyntaxKind.MethodSignature)
          .map((methodSignature) => {
            return {
              name: methodSignature.getName(),
              signatures: methodSignature.getType().getCallSignatures(),
              comments: methodSignature
                .getJsDocs()
                .map((e) => e.getText().trim()),
            };
          });

        /**
         * collecting regular properties, with comments (jsDoc format only)
         * */
        const propertySignatures = typeNode
          .getChildrenOfKind(SyntaxKind.PropertySignature)
          .map((propertySignature) => {
            const propertyTypeNode = propertySignature.getTypeNode();
            const name = format(
              "%s%s%s",
              propertySignature.isReadonly() ? "readonly " : "",
              propertySignature.getName(),
              propertySignature.hasQuestionToken() ? "?" : "",
            );
            return {
              name,
              value: propertyTypeNode
                ? next({
                    typeNode: propertyTypeNode,
                    type: propertyTypeNode.getType(),
                    typeParameters,
                  })
                : "unknown /** unknown property signature */",
              comments: propertySignature
                .getJsDocs()
                .map((e) => e.getText().trim()),
            };
          });

        const hunks: Array<string> = [];

        for (const { key, val } of indexSignatures) {
          hunks.push(format("[k: %s]: %s", key, val));
        }

        for (const signature of constructSignatures) {
          const { generics, parameters, returnType } =
            renderCallSignatureAssets(signature, (data) =>
              next({ ...data, typeParameters }),
            );
          hunks.push(
            format(
              "new %s(%s): %s",
              generics.length ? format("<%s>", generics.join(", ")) : "",
              parameters.join(", "),
              returnType,
            ),
          );
        }

        for (const { name, signatures, comments } of methodSignatures) {
          for (const signature of signatures) {
            const { generics, parameters, returnType } =
              renderCallSignatureAssets(signature, (data) =>
                next({ ...data, typeParameters }),
              );
            hunks.push(
              [
                ...comments,
                format(
                  "%s%s(%s): %s",
                  name,
                  generics.length ? format("<%s>", generics.join(", ")) : "",
                  parameters.join(", "),
                  returnType,
                ),
              ].join("\n"),
            );
          }
        }

        for (const { name, value, comments } of propertySignatures) {
          hunks.push(
            [
              //
              ...comments,
              format("%s: %s", name, value),
            ].join("\n"),
          );
        }

        return format(
          hunks.length ? "{\n%s\n}" : "{%s}",
          hunks.map((e) => indent(e)).join(";\n"),
        );
      }
    : undefined;
};
