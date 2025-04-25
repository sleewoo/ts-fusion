// @license MIT
// Contains AI-generated test patterns

import type { ComplexObjectArraysCase1 } from "@/fixtures/arrays/ComplexObjectArrays";
import type { BrandedArraysCase1 } from "@/fixtures/arrays/BrandedArrays";
import type { HybridArraysCase3 } from "@/fixtures/arrays/HybridArrays";

// Zod-like parser
export type AssertionTypesCase1 = {
  parse: (input: unknown) => input is ComplexObjectArraysCase1[number];
};

// React ref type narrowing
export const AssertionTypesCase2 = (el: unknown): el is HTMLCanvasElement =>
  el instanceof HTMLCanvasElement;

// Type narrowing function
export const AssertionTypesCase3 = (
  value: unknown,
): value is BrandedArraysCase1 =>
  Array.isArray(value) && value.every((v) => typeof v === "string");

// Numeric literal check
export type AssertionTypesCase4 = (
  value: unknown,
) => value is 0 | 1 | 2 | 3 | 4 | 5;

// Branded string check
export const AssertionTypesCase5 = (
  value: unknown,
): value is `Bearer ${string}` =>
  typeof value === "string" && value.startsWith("Bearer ");

// Precision branded type
export type AssertionTypesCase6 = number & { __precision: 2 };

// CSS unit check
export const AssertionTypesCase7 = (value: unknown): value is `${number}px` =>
  typeof value === "string" && /^\d+px$/.test(value);

// Version format guard
export const AssertionTypesCase8 = (
  version: string,
): version is `v${number}.${number}` => /^v\d+\.\d+$/.test(version);

// Coordinate check
export const AssertionTypesCase9 = (
  value: unknown,
): value is HybridArraysCase3 =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every((n) => typeof n === "number");

// Physics unit check
export type AssertionTypesCase10 = number & { __unit: "m/s²" };

// Const assertion (value space)
export const AssertionTypesCase11 = ["text", 42] as const;

// Recursive validator
export type AssertionTypesCase12<T> = T extends object
  ? {
      validate: (obj: unknown) => obj is T;
    }
  : never;

// Uppercase enum check
export type AssertionTypesCase13 = { [K in "get" | "post"]: Uppercase<K> };

// Date format check
export const AssertionTypesCase14 = (
  dateStr: unknown,
): dateStr is `${number}-${number}-${number}` =>
  typeof dateStr === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateStr);

// Buffer type assertion
export const AssertionTypesCase15 = (buf: unknown): buf is ArrayBuffer =>
  buf instanceof ArrayBuffer;

// Mathematical operation tuple
export type AssertionTypesCase16 = readonly ["+", number, number];

// Astronomy coordinate check
export type AssertionTypesCase17 = number & { __range: [0, 360] };

// Genetic code check
export const AssertionTypesCase18 = (value: unknown): value is `rs${number}` =>
  typeof value === "string" && /^rs\d+$/.test(value);

// File path check
export const AssertionTypesCase19 = (path: unknown): path is `/${string}.ts` =>
  typeof path === "string" && path.startsWith("/") && path.endsWith(".ts");

// Error assertion
export const AssertionTypesCase20 = (
  value: unknown,
): asserts value is Error => {
  if (!(value instanceof Error)) throw new Error("Invalid error object");
};

// State machine assertion
export const AssertionTypesCase21 = (
  state: unknown,
): asserts state is "loading" | "ready" => {
  if (state !== "loading" && state !== "ready")
    throw new Error("Invalid state");
};

// Composable validator
export type AssertionTypesCase22<T> = {
  /** @ts-expect-error */
  and: <U>(other: (v: T) => v is U) => (v: unknown) => v is T & U;
};

// Quantum state check
export const AssertionTypesCase23 = (state: unknown): state is `|${number}⟩` =>
  typeof state === "string" && /^\|\d⟩$/.test(state);

// Recursive JSON check
export type AssertionTypesCase24<T> = T extends object
  ? {
      [K in keyof T]: AssertionTypesCase24<T[K]>;
    }
  : (value: unknown) => value is T;

// Authentication scope check
export const AssertionTypesCase25 = (
  scope: unknown,
): scope is "admin" | "user" => scope === "admin" || scope === "user";
