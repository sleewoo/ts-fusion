// @license MIT
// Contains AI-generated test patterns

import type { BrandedArraysCase1 } from "@/fixtures/arrays/BrandedArrays";
import type { ComplexObjectArraysCase1 } from "@/fixtures/arrays/ComplexObjectArrays";
import type { HybridArraysCase3 } from "@/fixtures/arrays/HybridArrays";

// Valid type predicate syntax
export type TypePredicatesCase1 = (
  value: unknown,
) => value is BrandedArraysCase1[number];

// Proper union type check
export type TypePredicatesCase2 = (
  res: unknown,
) => res is ComplexObjectArraysCase1;

// Numeric literal type guard
export type TypePredicatesCase3 = (n: unknown) => n is 0 | 1 | 2 | 3 | 4 | 5;

// DOM type guard with proper return type
export type TypePredicatesCase4 = (el: unknown) => el is HTMLElement;

// Fixed React element check
export type TypePredicatesCase5 = (node: unknown) => node is "";

// Valid asserts predicate
export type TypePredicatesCase6 = (value: unknown) => asserts value is Error;

// Template literal type guard
export type TypePredicatesCase7 = (
  version: string,
) => version is `v${number}.${number}`;

// Coordinate type guard
export type TypePredicatesCase8 = (
  coord: unknown,
) => coord is HybridArraysCase3;

// Branded type predicate
export type TypePredicatesCase9 = (
  amount: unknown,
) => amount is number & { __currency: "USD" };

// Generic type predicate
export type TypePredicatesCase10<T> = (obj: unknown) => obj is T;

// ArrayBuffer check
export type TypePredicatesCase11 = (data: unknown) => data is ArrayBuffer;

// Union type narrowing
export type TypePredicatesCase12 = (
  scope: unknown,
) => scope is "read" | "write";

// CSS value check
export type TypePredicatesCase13 = (value: unknown) => value is `${number}px`;

// Date format guard
export type TypePredicatesCase14 = (
  dateStr: unknown,
) => dateStr is `${number}-${number}-${number}`;

// Genetic pattern check
export type TypePredicatesCase15 = (gene: unknown) => gene is `rs${number}`;

// Quantum state guard
export type TypePredicatesCase16 = (state: unknown) => state is `|${number}⟩`;

// Path format check
export type TypePredicatesCase17 = (path: unknown) => path is `/${string}.ts`;

// Range-checked number
export type TypePredicatesCase18 = (
  mag: unknown,
) => mag is number & { __range: [0, 20] };

// Physics unit check
export type TypePredicatesCase19 = (
  value: unknown,
) => value is number & { __unit: "m/s²" };

// Composable type guard
export type TypePredicatesCase20<T> = {
  check: (value: unknown) => value is T;
  and: <U>(other: TypePredicatesCase20<U>) => TypePredicatesCase20<T & U>;
};

// Guard composer
export type TypePredicatesCase21 = <T>(guard: (v: unknown) => v is T) => {
  and: <U>(other: (v: unknown) => v is U) => (v: unknown) => v is T & U;
};

// Error object check
export type TypePredicatesCase22 = (
  error: unknown,
) => error is { code: number; message: string };

// JWT format check
export type TypePredicatesCase23 = (
  token: unknown,
) => token is `Bearer ${string}`;

// State machine guard
export type TypePredicatesCase24 = (
  state: unknown,
) => state is "loading" | "ready" | "error";

// Recursive type guard
export type TypePredicatesCase25<T> = T extends object
  ? { [K in keyof T]: TypePredicatesCase25<T[K]> }
  : (v: unknown) => v is T;
