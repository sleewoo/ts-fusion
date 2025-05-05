import { assert, type Equals } from "tsafe";

import type {
  MultidimensionalArraysCase1,
  MultidimensionalArraysCase2,
  MultidimensionalArraysCase3,
  MultidimensionalArraysCase4,
  MultidimensionalArraysCase5,
  MultidimensionalArraysCase6,
  MultidimensionalArraysCase7,
  MultidimensionalArraysCase8,
  MultidimensionalArraysCase9,
  MultidimensionalArraysCase10,
  MultidimensionalArraysCase11,
  MultidimensionalArraysCase12,
  MultidimensionalArraysCase13,
  MultidimensionalArraysCase14,
  MultidimensionalArraysCase15,
  MultidimensionalArraysCase16,
  MultidimensionalArraysCase17,
  MultidimensionalArraysCase18,
  MultidimensionalArraysCase19,
  MultidimensionalArraysCase20,
  MultidimensionalArraysCase21,
  MultidimensionalArraysCase22,
  MultidimensionalArraysCase23,
  MultidimensionalArraysCase24,
  MultidimensionalArraysCase25,
} from "@/fixtures/arrays/MultidimensionalArrays.ts";

// Simple nested arrays
type MultidimensionalArraysCase1Flat = number[][];

type MultidimensionalArraysCase2Flat = string[][][];

type MultidimensionalArraysCase3Flat = Array<Array<boolean>>;

// Mixed dimensions
type MultidimensionalArraysCase4Flat = (((number[]) | (string)))[][];

type MultidimensionalArraysCase5Flat = ReadonlyArray<readonly number[][]>;

// Tuple matrices
type MultidimensionalArraysCase6Flat = [
  number,
  string
][][];

type MultidimensionalArraysCase7Flat = Array<[
  boolean,
  null
][]>;

// Complex element types
type MultidimensionalArraysCase8Flat = Array<(((number) | (string)))[][]>;

type MultidimensionalArraysCase9Flat = Array<(((number) | (string)))[][]>[];

// Recursive nesting
type MultidimensionalArraysCase10Flat = ReadonlyArray<bigint>[][];

type MultidimensionalArraysCase11Flat = Array<Array<[
  currentPage: number,
  itemsPerPage: number,
  ...pageNumbers: number[]
]>>;

// Mixed array types
type MultidimensionalArraysCase12Flat = (((number[]) | (string[])))[][];

type MultidimensionalArraysCase13Flat = Array<ReadonlyArray<number>[]>;

// Function-generated arrays
type MultidimensionalArraysCase14Flat = ReturnType<(() => [
  [
    [
      1
    ]
  ],
  [
    [
      [
        2
      ]
    ]
  ]
])>;

// Mapped dimensions
type MultidimensionalArraysCase15Flat = { [K in ((0) | (1))]: Array<Array<K /** unresolved */>> }[];

// Spread operations
type MultidimensionalArraysCase16Flat = [
  ...number[]
][][];

type MultidimensionalArraysCase17Flat = [
  ...Array<[
    ...string[]
  ]>
];

// Conditional nesting
type MultidimensionalArraysCase18Flat<T> = ((T) extends (number) ? (T[][][]) : (T[]));

type MultidimensionalArraysCase19Flat = ((5) extends (number) ? (5[][][]) : (5[]));

// Intersection matrices
type MultidimensionalArraysCase20Flat = (((number[]) & ({
  fixed: true
})))[][];

// Branded nested arrays
type MultidimensionalArraysCase21Flat = Array<Array<((string) & ({
  __coordinate: true
}))>>;

// Async multidimensional
type MultidimensionalArraysCase22Flat = Promise<number[]>[];

type MultidimensionalArraysCase23Flat = Array<Promise<Array<Promise<boolean>>>>;

// Variadic tuple nesting
type MultidimensionalArraysCase24Flat = [
  number,
  ...[
    string[]
  ]
][][];

type MultidimensionalArraysCase25Flat = Array<[
  boolean,
  ...number[][]
]>;


assert<
  Equals<
    MultidimensionalArraysCase1,
    MultidimensionalArraysCase1Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase2,
    MultidimensionalArraysCase2Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase3,
    MultidimensionalArraysCase3Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase4,
    MultidimensionalArraysCase4Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase5,
    MultidimensionalArraysCase5Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase6,
    MultidimensionalArraysCase6Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase7,
    MultidimensionalArraysCase7Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase8,
    MultidimensionalArraysCase8Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase9,
    MultidimensionalArraysCase9Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase10,
    MultidimensionalArraysCase10Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase11,
    MultidimensionalArraysCase11Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase12,
    MultidimensionalArraysCase12Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase13,
    MultidimensionalArraysCase13Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase14,
    MultidimensionalArraysCase14Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase15,
    MultidimensionalArraysCase15Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase16,
    MultidimensionalArraysCase16Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase17,
    MultidimensionalArraysCase17Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase18<never>,
    MultidimensionalArraysCase18Flat<never>
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase19,
    MultidimensionalArraysCase19Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase20,
    MultidimensionalArraysCase20Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase21,
    MultidimensionalArraysCase21Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase22,
    MultidimensionalArraysCase22Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase23,
    MultidimensionalArraysCase23Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase24,
    MultidimensionalArraysCase24Flat
  >
>;
assert<
  Equals<
    MultidimensionalArraysCase25,
    MultidimensionalArraysCase25Flat
  >
>;
