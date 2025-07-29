// @license MIT
// Contains AI-generated test patterns

import type { BasicPrimitiveArraysCase7 } from "./basic-primitive-arrays";
import type { TupleArraysCase7 } from "./tuple-arrays";
import type { UnionArraysCase1 } from "./union-arrays";

// Simple nested arrays
export type MultidimensionalArraysCase1 = number[][];
export type MultidimensionalArraysCase2 = string[][][];
export type MultidimensionalArraysCase3 = Array<Array<boolean>>;

// Mixed dimensions
export type MultidimensionalArraysCase4 = (number[] | string)[][];
export type MultidimensionalArraysCase5 = ReadonlyArray<readonly number[][]>;

// Tuple matrices
export type MultidimensionalArraysCase6 = [number, string][][];
export type MultidimensionalArraysCase7 = Array<[boolean, null][]>;

// Complex element types
export type MultidimensionalArraysCase8 = Array<UnionArraysCase1[]>;
export type MultidimensionalArraysCase9 = MultidimensionalArraysCase8[];

// Recursive nesting
export type MultidimensionalArraysCase10 = BasicPrimitiveArraysCase7[][];
export type MultidimensionalArraysCase11 = Array<Array<TupleArraysCase7>>;

// Mixed array types
export type MultidimensionalArraysCase12 = (number[] | string[])[][];
export type MultidimensionalArraysCase13 = Array<ReadonlyArray<number>[]>;

// Function-generated arrays
export type MultidimensionalArraysCase14 = ReturnType<() => [[[1]], [[[2]]]]>;

// Mapped dimensions
export type MultidimensionalArraysCase15 = {
  [K in 0 | 1]: Array<Array<K>>;
}[];

// Spread operations
export type MultidimensionalArraysCase16 = [...number[]][][];
export type MultidimensionalArraysCase17 = [...Array<[...string[]]>];

// Conditional nesting
export type MultidimensionalArraysCase18<T> = T extends number ? T[][][] : T[];
export type MultidimensionalArraysCase19 = MultidimensionalArraysCase18<5>;

// Intersection matrices
export type MultidimensionalArraysCase20 = (number[] & { fixed: true })[][];

// Branded nested arrays
export type MultidimensionalArraysCase21 = Array<
  Array<string & { __coordinate: true }>
>;

// Async multidimensional
export type MultidimensionalArraysCase22 = Promise<number[]>[];
export type MultidimensionalArraysCase23 = Array<
  Promise<Array<Promise<boolean>>>
>;

// Variadic tuple nesting
export type MultidimensionalArraysCase24 = [number, ...[string[]]][][];
export type MultidimensionalArraysCase25 = Array<[boolean, ...number[][]]>;
