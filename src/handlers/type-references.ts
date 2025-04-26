import { format } from "node:util";

import { SyntaxKind } from "ts-morph";

import type { HandlerQualifier, CycleParameters } from "@/types";

export const handlerQualifier: HandlerQualifier = ({
  typeNode,
  typeParameters,
}) => {
  return typeNode.isKind(SyntaxKind.TypeReference)
    ? (next, { overrides }) => {
        const nameNode = typeNode.getTypeName();
        const typeName = nameNode.getText();

        if (typeParameters?.[typeName]) {
          return typeParameters[typeName];
        }

        const typeArguments = typeNode.getTypeArguments().map((param) => {
          return next({
            typeNode: param,
            type: param.getType(),
            typeParameters,
          });
        });

        if (overrides[typeName]) {
          return typeArguments.length
            ? format("%s<%s>", overrides[typeName], typeArguments.join(", "))
            : overrides[typeName];
        }

        /**
         * using name symbol cause type symbol/aliasedSymbol very unreliable here.
         *
         * - type symbol/aliasedSymbol is dropped on some "complex" types like:
         *   type Re16 = readonly [number, ...(readonly boolean[])];
         *   type RT05 = [header: string, ...rows: Array<string[]>];
         *
         * - type symbol/aliasedSymbol is flattening builtins, eg:
         *   export type Test = Readonly<{}>
         *   converted to:
         *   type Readonly<T>={readonly[P in keyof T]:T[P];}
         * */
        const nameSymbol =
          nameNode
            .getSymbol()
            ?.getAliasedSymbol() ?? //
          nameNode.getSymbol();

        const aliasDeclaration = nameSymbol
          ?.getDeclarations()
          ?.find((e) => e.isKind(SyntaxKind.TypeAliasDeclaration));

        const aliasNode = aliasDeclaration
          ? aliasDeclaration.getTypeNode()
          : undefined;

        let text: string;

        if (aliasNode) {
          const aliasType = aliasNode.getType();
          text = next({
            typeNode: aliasNode,
            type: aliasType.getTargetType() || aliasType,
            typeParameters: aliasDeclaration
              ?.getTypeParameters()
              .reduce((map: CycleParameters, param, i) => {
                map[param.getName()] =
                  typeArguments[i] ?? // empty string is a valid value
                  param.getDefault()?.getText();
                return map;
              }, {}),
          });
        } else {
          text = format("%s /** unresolved */", typeNode.getText());
        }

        return text;
      }
    : undefined;
};
