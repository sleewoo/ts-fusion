import { format } from "node:util";

import {
  type CallSignatureDeclaration,
  type MethodDeclaration,
  type NumericLiteral,
  type ParameterDeclaration,
  type PropertySignature,
  type Signature,
  type StringLiteral,
  SyntaxKind,
  type Type,
  type TypeNode,
  type TypeParameterDeclaration,
} from "ts-morph";

import type { Next, ResolvedType } from "./types";

/**
 * Extracts direct property names from a given TypeNode.
 * Operating purely on syntax — no TypeChecker involved.
 *
 * Works on plain object types `{ a: string }`,
 * intersections `{ a } & { b }`, and unions `{ a } | { b }`,
 * including parenthesized variants.
 *
 * @param typeNode - A TypeNode to extract property names from.
 * @returns A list of deduplicated property names.
 **/
export const extractObjectProperties = (typeNode: TypeNode): Array<string> => {
  const props = new Set<string>();
  const kind = typeNode.getKind();

  if (
    [
      SyntaxKind.ParenthesizedType,
      SyntaxKind.IntersectionType,
      SyntaxKind.UnionType,
    ].includes(kind)
  ) {
    for (const node of typeNode.forEachChildAsArray()) {
      for (const prop of extractObjectProperties(node as TypeNode)) {
        props.add(prop);
      }
    }
  } else if (kind === SyntaxKind.TypeLiteral) {
    for (const prop of typeNode.getChildrenOfKind(
      SyntaxKind.PropertySignature,
    )) {
      const name = getSafePropName(prop);
      if (name) {
        props.add(name);
      }
    }
  }

  return [...props];
};

/**
 * Safely extracts a printable property name from a PropertySignature node.
 *
 * Handles:
 * - Identifiers (e.g., `id`, `username`)
 * - String or numeric literals (e.g., `"foo-bar"`, `123`)
 *
 * Skips:
 * - Computed properties (e.g., `[Symbol.iterator]`)
 *
 * @param prop The PropertySignature node to extract the name from.
 * @returns A string representing the safe property name, or undefined if unsupported.
 * */
export const getSafePropName = (
  prop: PropertySignature,
): string | undefined => {
  const nameNode = prop.getNameNode();
  const kind = nameNode.getKind();

  // Case: simple identifier, like `id` or `username`
  if (kind === SyntaxKind.Identifier) {
    // Identifiers are not quoted, so simply returning name
    return prop.getName();
  }

  // Case: string or number literal (e.g., `"first-name"`, `123`)
  if ([SyntaxKind.StringLiteral, SyntaxKind.NumericLiteral].includes(kind)) {
    // Extracting raw value, without quotes
    return (nameNode as StringLiteral | NumericLiteral).getLiteralText();
  }

  // Case: computed property name (e.g., [Symbol.iterator]) — unsupported here
  return undefined;
};

export const renderTypeParameter = (
  param: TypeParameterDeclaration,
  next: Next,
): ResolvedType["parameters"][number] => {
  const name = param.getName();

  const constraint = param.getConstraint();
  const defaultParam = param.getDefault();

  if (constraint && defaultParam) {
    const text = next({ typeNode: defaultParam, type: defaultParam.getType() });
    return {
      name,
      text,
      fullText: format(
        "%s extends %s = %s",
        name,
        next({ typeNode: constraint, type: constraint.getType() }),
        text,
      ),
    };
  }

  if (constraint) {
    const text = next({ typeNode: constraint, type: constraint.getType() });
    return {
      name,
      text,
      fullText: `${name} extends ${text}`,
    };
  }

  if (defaultParam) {
    const text = next({ typeNode: defaultParam, type: defaultParam.getType() });
    return {
      name,
      text,
      fullText: `${name} = ${text}`,
    };
  }

  return {
    name,
    text: name,
    fullText: name,
  };
};

export const renderCallSignatureAssets = (signature: Signature, next: Next) => {
  const declaration = signature.getDeclaration() as
    | CallSignatureDeclaration
    | MethodDeclaration;

  const generics = declaration
    .getTypeParameters()
    .map((param) => renderTypeParameter(param, next).fullText);

  const parameters = declaration
    .getChildrenOfKind(SyntaxKind.Parameter)
    .map((param) => renderCallSignatureParameter(param, next));

  const returnTypeNode = declaration.getReturnTypeNode();

  let returnType = "unknown /** unknown return type */";

  if (returnTypeNode?.isKind(SyntaxKind.TypePredicate)) {
    const predicateTypeNode = returnTypeNode.getTypeNode();
    returnType = format(
      returnTypeNode.getAssertsModifier() //
        ? "asserts %s is %s"
        : "%s is %s",
      returnTypeNode.getParameterNameNode().getText(),
      predicateTypeNode
        ? next({
            typeNode: predicateTypeNode,
            type: predicateTypeNode.getType(),
          })
        : "unknown /** unresolved predicate type */",
    );
  } else if (returnTypeNode) {
    returnType = next({
      typeNode: returnTypeNode,
      type: returnTypeNode.getType(),
    });
  }

  return {
    generics,
    parameters,
    returnType,
  };
};

export const renderCallSignatureParameter = (
  param: ParameterDeclaration,
  next: Next,
) => {
  const paramTypeNode = param.getTypeNode();

  const value = paramTypeNode
    ? next({
        typeNode: paramTypeNode,
        type: paramTypeNode.getType(),
      })
    : "unknown /** unknown param node */";

  return param.isRestParameter()
    ? format("...%s: %s", param.getName(), value)
    : format(
        "%s%s: %s",
        param.getName(),
        param.hasQuestionToken() ? "?" : "",
        value,
      );
};

export const isPrimitive = (type: Type) => {
  return [
    type.isBoolean,
    type.isBooleanLiteral,
    type.isNumber,
    type.isNumberLiteral,
    type.isBigInt,
    type.isString,
    type.isStringLiteral,
    type.isUndefined,
    type.isNull,
    type.isUnknown,
    type.isAny,
    type.isNever,
  ].some((e) => e.call(type));
};

export const indent = (hunk: string, level = 1) => {
  return hunk.replace(/^/gm, " ".repeat(level * 2));
};
