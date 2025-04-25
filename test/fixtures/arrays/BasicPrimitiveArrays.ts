// @license MIT
// Contains AI-generated test patterns

// Core language primitives
export type BasicPrimitiveArraysCase1 = number[];
export type BasicPrimitiveArraysCase2 = string[];
export type BasicPrimitiveArraysCase3 = boolean[];
export type BasicPrimitiveArraysCase4 = null[];
export type BasicPrimitiveArraysCase5 = undefined[];

// Alternative syntax forms
export type BasicPrimitiveArraysCase6 = Array<symbol>;
export type BasicPrimitiveArraysCase7 = ReadonlyArray<bigint>;
export type BasicPrimitiveArraysCase8 = readonly unknown[];

// Literal value arrays
export type BasicPrimitiveArraysCase9 = 1[];
export type BasicPrimitiveArraysCase10 = "demo"[];
export type BasicPrimitiveArraysCase11 = true[];
export type BasicPrimitiveArraysCase12 = 0b1010[];
export type BasicPrimitiveArraysCase13 = 0x1a3f[];

// Special primitive arrays
export type BasicPrimitiveArraysCase14 = never[];
export type BasicPrimitiveArraysCase15 = unknown[];
export type BasicPrimitiveArraysCase16 = `${number}`[];

// Mixed declaration styles
export type BasicPrimitiveArraysCase17 = Array<number> & { length: 5 };
export type BasicPrimitiveArraysCase18 = [number] extends infer T ? T[] : never;
export type BasicPrimitiveArraysCase19 = readonly number[][];
export type BasicPrimitiveArraysCase20 = Array<Array<never>>;

// Negative/edge cases
export type BasicPrimitiveArraysCase21 = -5[];
export type BasicPrimitiveArraysCase22 = 99999999999[];
export type BasicPrimitiveArraysCase23 = (number & {})[];
export type BasicPrimitiveArraysCase24 = (string | never)[];
export type BasicPrimitiveArraysCase25 = Array<number | never>;
