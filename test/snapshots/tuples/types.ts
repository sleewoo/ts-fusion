import { assert, type Equals } from "tsafe";

import type {
  TypesUser,
  TypesProduct,
  TypesErrorResult,
  TypesHttpMethod,
  TypesHttpResponse,
  TypesReducerAction,
  TypesMiddleware,
  TypesValidator,
  TypesTransformer,
  TypesComparator,
} from "@/fixtures/tuples/types.ts";

// @license MIT
// Contains AI-generated test patterns
type TypesUserFlat = {
  id: string;
  name: string
};

type TypesProductFlat = {
  sku: string;
  price: number
};

type TypesErrorResultFlat = {
  code: number;
  message: string
};

type TypesHttpMethodFlat = ("GET" | "POST" | "PUT" | "DELETE");

type TypesHttpResponseFlat<T> = [
  status: number,
  body: T,
  headers?: Record<string, string>
];

type TypesReducerActionFlat<T> = {
  type: string;
  payload?: T
};

type TypesMiddlewareFlat = ((next: (() => void)) => (() => void));

type TypesValidatorFlat<T> = ((input: unknown) => T);

type TypesTransformerFlat<T, U> = ((input: T) => U);

type TypesComparatorFlat<T> = ((a: T, b: T) => number);


assert<
  Equals<
    TypesUser,
    TypesUserFlat
  >
>;
assert<
  Equals<
    TypesProduct,
    TypesProductFlat
  >
>;
assert<
  Equals<
    TypesErrorResult,
    TypesErrorResultFlat
  >
>;
assert<
  Equals<
    TypesHttpMethod,
    TypesHttpMethodFlat
  >
>;
assert<
  Equals<
    TypesHttpResponse<never>,
    TypesHttpResponseFlat<never>
  >
>;
assert<
  Equals<
    TypesReducerAction<never>,
    TypesReducerActionFlat<never>
  >
>;
assert<
  Equals<
    TypesMiddleware,
    TypesMiddlewareFlat
  >
>;
assert<
  Equals<
    TypesValidator<never>,
    TypesValidatorFlat<never>
  >
>;
assert<
  Equals<
    TypesTransformer<never, never>,
    TypesTransformerFlat<never, never>
  >
>;
assert<
  Equals<
    TypesComparator<never>,
    TypesComparatorFlat<never>
  >
>;
