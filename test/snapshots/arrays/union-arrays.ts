import { assert, type Equals } from "tsafe";

import type {
  UnionArraysCase1,
  UnionArraysCase2,
  UnionArraysCase3,
  UnionArraysCase4,
  UnionArraysCase5,
  UnionArraysCase6,
  UnionArraysCase7,
  UnionArraysCase8,
  UnionArraysCase9,
  UnionArraysCase10,
  UnionArraysCase11,
  UnionArraysCase12,
  UnionArraysCase13,
  UnionArraysCase14,
  UnionArraysCase15,
  UnionArraysCase16,
  UnionArraysCase17,
  UnionArraysCase18,
  UnionArraysCase19,
  UnionArraysCase20,
  UnionArraysCase21,
  UnionArraysCase22,
  UnionArraysCase23,
  UnionArraysCase24,
  UnionArraysCase25,
} from "@/fixtures/arrays/union-arrays.ts";

// Primitive unions
type UnionArraysCase1Flat = (((number) | (string)))[];

type UnionArraysCase2Flat = Array<((boolean) | (null))>;

type UnionArraysCase3Flat = readonly (((string) | (undefined)))[];

// Literal unions
type UnionArraysCase4Flat = (((1) | ("two") | (false)))[];

type UnionArraysCase5Flat = Array<(("success") | ("error"))>;

// Object type unions
type UnionArraysCase6Flat = ((({
  a: number
}) | ({
  b: string
})))[];

type UnionArraysCase7Flat = Array<(({
  x: number
}) | ([
  number
]))>;

// Function unions
type UnionArraysCase8Flat = ((() => ((never) | (Promise<unknown>))))[];

type UnionArraysCase9Flat = Array<((((n: number) => string)) | (SymbolConstructor))>;

// Complex unions
type UnionArraysCase10Flat = (((number[]) | ((((number) | (string)))[])))[];

type UnionArraysCase11Flat = ReadonlyArray<((string) | (number) | (({
  a: number
}) | ({
  b: string
})))>;

// Nullable unions
type UnionArraysCase12Flat = (((number) | (null) | (undefined)))[];

type UnionArraysCase13Flat = Array<((string) | (never) | (unknown))>;

// Branded type unions
type UnionArraysCase14Flat = Array<((((string) & ({
  __brand: "id"
}))) | (((number) & ({
  __brand: "count"
}))))>;

// Recursive unions
type UnionArraysCase15Flat = Array<((UnionArraysCase15) | (string))>;

type UnionArraysCase16Flat = (((UnionArraysCase16[]) | (number)))[];

// Conditional unions
type UnionArraysCase17Flat<T> = Array<((T) extends (string) ? (number) : (boolean))>;

type UnionArraysCase18Flat = Array<(("test") extends (string) ? (number) : (boolean))>;

type UnionArraysCase19Flat = Array<((123) extends (string) ? (number) : (boolean))>;

// Mapped type unions
type UnionArraysCase20Flat<T> = ({ [K in keyof (T)]: (T)[K /** unresolved */][] })[keyof (T)];

// Template literal unions
type UnionArraysCase21Flat = Array<`${number}-${string}`>;

type UnionArraysCase22Flat = `img_${(("jpg") | ("png"))}`[];

// Intersection unions
type UnionArraysCase23Flat = Array<((((number) & ({}))) | (((string) & ({}))))>;

type UnionArraysCase24Flat = ReadonlyArray<(((({
  x: number
}) & ({
  y: number
}))) | ({
  coord: string
}))>;

// Function return unions
type UnionArraysCase25Flat = Array<((ReturnType<typeof Error>) | (Promise<never>))>;


assert<
  Equals<
    UnionArraysCase1,
    UnionArraysCase1Flat
  >
>;
assert<
  Equals<
    UnionArraysCase2,
    UnionArraysCase2Flat
  >
>;
assert<
  Equals<
    UnionArraysCase3,
    UnionArraysCase3Flat
  >
>;
assert<
  Equals<
    UnionArraysCase4,
    UnionArraysCase4Flat
  >
>;
assert<
  Equals<
    UnionArraysCase5,
    UnionArraysCase5Flat
  >
>;
assert<
  Equals<
    UnionArraysCase6,
    UnionArraysCase6Flat
  >
>;
assert<
  Equals<
    UnionArraysCase7,
    UnionArraysCase7Flat
  >
>;
assert<
  Equals<
    UnionArraysCase8,
    UnionArraysCase8Flat
  >
>;
assert<
  Equals<
    UnionArraysCase9,
    UnionArraysCase9Flat
  >
>;
assert<
  Equals<
    UnionArraysCase10,
    UnionArraysCase10Flat
  >
>;
assert<
  Equals<
    UnionArraysCase11,
    UnionArraysCase11Flat
  >
>;
assert<
  Equals<
    UnionArraysCase12,
    UnionArraysCase12Flat
  >
>;
assert<
  Equals<
    UnionArraysCase13,
    UnionArraysCase13Flat
  >
>;
assert<
  Equals<
    UnionArraysCase14,
    UnionArraysCase14Flat
  >
>;
assert<
  Equals<
    UnionArraysCase15,
    UnionArraysCase15Flat
  >
>;
assert<
  Equals<
    UnionArraysCase16,
    UnionArraysCase16Flat
  >
>;
assert<
  Equals<
    UnionArraysCase17<never>,
    UnionArraysCase17Flat<never>
  >
>;
assert<
  Equals<
    UnionArraysCase18,
    UnionArraysCase18Flat
  >
>;
assert<
  Equals<
    UnionArraysCase19,
    UnionArraysCase19Flat
  >
>;
assert<
  Equals<
    UnionArraysCase20<never>,
    UnionArraysCase20Flat<never>
  >
>;
assert<
  Equals<
    UnionArraysCase21,
    UnionArraysCase21Flat
  >
>;
assert<
  Equals<
    UnionArraysCase22,
    UnionArraysCase22Flat
  >
>;
assert<
  Equals<
    UnionArraysCase23,
    UnionArraysCase23Flat
  >
>;
assert<
  Equals<
    UnionArraysCase24,
    UnionArraysCase24Flat
  >
>;
assert<
  Equals<
    UnionArraysCase25,
    UnionArraysCase25Flat
  >
>;
