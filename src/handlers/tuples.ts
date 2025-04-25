import { format } from "node:util";

import { SyntaxKind } from "ts-morph";

import type { Handler } from "@/types";
import { indent } from "@/utils";

export const tupleHandler: Handler = ({ typeNode, typeParameters }) => {
  return typeNode.isKind(SyntaxKind.TupleType)
    ? (next) => {
        const elements = typeNode.getElements().map((element) => {
          const isOptional = element.isKind(SyntaxKind.OptionalType);
          let isRest = element.isKind(SyntaxKind.RestType);

          let name: string | undefined;
          let value = "unknown /** unknown tuple element signature */";

          if (element.isKind(SyntaxKind.NamedTupleMember)) {
            name = element.hasQuestionToken()
              ? format("%s?", element.getName())
              : element.getName();

            const elementTypeNode = element.getTypeNode();

            value = next({
              typeNode: elementTypeNode,
              type: elementTypeNode.getType(),
              typeParameters,
            });

            if (element.getFirstChildByKind(SyntaxKind.DotDotDotToken)) {
              isRest = true;
            }
          } else if (element.isKind(SyntaxKind.RestType)) {
            const parenthesizedType = element.getFirstChildByKind(
              SyntaxKind.ParenthesizedType,
            );
            if (parenthesizedType) {
              const innerTypeNode = parenthesizedType.getTypeNode();
              value = format(
                "(%s)",
                next({
                  typeNode: innerTypeNode,
                  type: innerTypeNode.getType(),
                  typeParameters,
                }),
              );
            } else {
              const elementTypeNode = element.getTypeNode();
              value = next({
                typeNode: elementTypeNode,
                type: elementTypeNode.getType(),
                typeParameters,
              });
            }
          } else {
            value = next({
              typeNode: element,
              type: element.getType(),
              typeParameters,
            });
          }

          if (isRest) {
            return name
              ? format("...%s: %s", name, value)
              : format("...%s", value);
          }

          return name
            ? format("%s: %s", name, value)
            : isOptional
              ? format("(%s)?", value)
              : value;
        });

        return format(
          elements.length ? "[\n%s\n]" : "[%s]",
          elements.map((e) => indent(e)).join(",\n"),
        );
      }
    : undefined;
};
