// @license MIT
// Contains AI-generated test patterns

import type { BasicPrimitiveArraysCase1 } from "./BasicPrimitiveArrays";

// Primitive unions
export type UnionArraysCase1 = (number | string)[];
export type UnionArraysCase2 = Array<boolean | null>;
export type UnionArraysCase3 = readonly (string | undefined)[];

// Literal unions
export type UnionArraysCase4 = (1 | "two" | false)[];
export type UnionArraysCase5 = Array<"success" | "error">;

// Object type unions
export type UnionArraysCase6 = ({ a: number } | { b: string })[];
export type UnionArraysCase7 = Array<{ x: number } | [number]>;

// Function unions
export type UnionArraysCase8 = (() => never | Promise<unknown>)[];
export type UnionArraysCase9 = Array<
  ((n: number) => string) | SymbolConstructor
>;

// Complex unions
export type UnionArraysCase10 = (
  | BasicPrimitiveArraysCase1
  | UnionArraysCase1
)[];
export type UnionArraysCase11 = ReadonlyArray<
  string | number | UnionArraysCase6[number]
>;

// Nullable unions
export type UnionArraysCase12 = (number | null | undefined)[];
export type UnionArraysCase13 = Array<string | never | unknown>;

// Branded type unions
export type UnionArraysCase14 = Array<
  (string & { __brand: "id" }) | (number & { __brand: "count" })
>;

// Recursive unions
export type UnionArraysCase15 = Array<UnionArraysCase15 | string>;
export type UnionArraysCase16 = (UnionArraysCase16[] | number)[];

// Conditional unions
export type UnionArraysCase17<T> = Array<T extends string ? number : boolean>;
export type UnionArraysCase18 = UnionArraysCase17<"test">; // number[]
export type UnionArraysCase19 = UnionArraysCase17<123>; // boolean[]

// Mapped type unions
export type UnionArraysCase20<T> = {
  [K in keyof T]: T[K][];
}[keyof T];

// Template literal unions
export type UnionArraysCase21 = Array<`${number}-${string}`>;
export type UnionArraysCase22 = `img_${"jpg" | "png"}`[];

// Intersection unions
export type UnionArraysCase23 = Array<(number & {}) | (string & {})>;
export type UnionArraysCase24 = ReadonlyArray<
  ({ x: number } & { y: number }) | { coord: string }
>;

// Function return unions
export type UnionArraysCase25 = Array<
  ReturnType<typeof Error> | Promise<never>
>;
