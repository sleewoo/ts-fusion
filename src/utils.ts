import { format } from "node:util";

import {
  type ParameterDeclaration,
  type Type,
  type CallSignatureDeclaration,
  type MethodDeclaration,
  type Signature,
  type TypeParameterDeclaration,
  SyntaxKind,
} from "ts-morph";

import type { Next } from "./types";

export const renderTypeParameter = (
  param: TypeParameterDeclaration,
  next: Next,
) => {
  const name = param.getName();
  const constraint = param.getConstraint();
  return {
    name,
    text: constraint
      ? format(
          "%s extends %s",
          name,
          next({ typeNode: constraint, type: constraint.getType() }),
        )
      : name,
  };
};

export const renderCallSignatureAssets = (signature: Signature, next: Next) => {
  const declaration = signature.getDeclaration() as
    | CallSignatureDeclaration
    | MethodDeclaration;

  const generics = declaration
    .getTypeParameters()
    .map((param) => renderTypeParameter(param, next).text);

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
