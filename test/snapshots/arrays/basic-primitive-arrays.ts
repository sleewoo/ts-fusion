import { assert, type Equals } from "tsafe";

import type {
  BasicPrimitiveArraysCase1,
  BasicPrimitiveArraysCase2,
  BasicPrimitiveArraysCase3,
  BasicPrimitiveArraysCase4,
  BasicPrimitiveArraysCase5,
  BasicPrimitiveArraysCase6,
  BasicPrimitiveArraysCase7,
  BasicPrimitiveArraysCase8,
  BasicPrimitiveArraysCase9,
  BasicPrimitiveArraysCase10,
  BasicPrimitiveArraysCase11,
  BasicPrimitiveArraysCase12,
  BasicPrimitiveArraysCase13,
  BasicPrimitiveArraysCase14,
  BasicPrimitiveArraysCase15,
  BasicPrimitiveArraysCase16,
  BasicPrimitiveArraysCase17,
  BasicPrimitiveArraysCase18,
  BasicPrimitiveArraysCase19,
  BasicPrimitiveArraysCase20,
  BasicPrimitiveArraysCase21,
  BasicPrimitiveArraysCase22,
  BasicPrimitiveArraysCase23,
  BasicPrimitiveArraysCase24,
  BasicPrimitiveArraysCase25,
} from "@/fixtures/arrays/basic-primitive-arrays.ts";

// @license MIT
// Contains AI-generated test patterns
// Core language primitives
type BasicPrimitiveArraysCase1Flat = number[];

type BasicPrimitiveArraysCase2Flat = string[];

type BasicPrimitiveArraysCase3Flat = boolean[];

type BasicPrimitiveArraysCase4Flat = null[];

type BasicPrimitiveArraysCase5Flat = undefined[];

// Alternative syntax forms
type BasicPrimitiveArraysCase6Flat = Array<symbol>;

type BasicPrimitiveArraysCase7Flat = ReadonlyArray<bigint>;

type BasicPrimitiveArraysCase8Flat = readonly unknown[];

// Literal value arrays
type BasicPrimitiveArraysCase9Flat = 1[];

type BasicPrimitiveArraysCase10Flat = "demo"[];

type BasicPrimitiveArraysCase11Flat = true[];

type BasicPrimitiveArraysCase12Flat = 10[];

type BasicPrimitiveArraysCase13Flat = 6719[];

// Special primitive arrays
type BasicPrimitiveArraysCase14Flat = never[];

type BasicPrimitiveArraysCase15Flat = unknown[];

type BasicPrimitiveArraysCase16Flat = `${number}`[];

// Mixed declaration styles
type BasicPrimitiveArraysCase17Flat = ((Array<number>) & ({
  length: 5
}));

type BasicPrimitiveArraysCase18Flat = (([
  number
]) extends (infer T) ? (T /** unresolved */[]) : (never));

type BasicPrimitiveArraysCase19Flat = readonly number[][];

type BasicPrimitiveArraysCase20Flat = Array<Array<never>>;

// Negative/edge cases
type BasicPrimitiveArraysCase21Flat = -5[];

type BasicPrimitiveArraysCase22Flat = 99999999999[];

type BasicPrimitiveArraysCase23Flat = (((number) & ({})))[];

type BasicPrimitiveArraysCase24Flat = (((string) | (never)))[];

type BasicPrimitiveArraysCase25Flat = Array<((number) | (never))>;


assert<
  Equals<
    BasicPrimitiveArraysCase1,
    BasicPrimitiveArraysCase1Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase2,
    BasicPrimitiveArraysCase2Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase3,
    BasicPrimitiveArraysCase3Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase4,
    BasicPrimitiveArraysCase4Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase5,
    BasicPrimitiveArraysCase5Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase6,
    BasicPrimitiveArraysCase6Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase7,
    BasicPrimitiveArraysCase7Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase8,
    BasicPrimitiveArraysCase8Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase9,
    BasicPrimitiveArraysCase9Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase10,
    BasicPrimitiveArraysCase10Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase11,
    BasicPrimitiveArraysCase11Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase12,
    BasicPrimitiveArraysCase12Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase13,
    BasicPrimitiveArraysCase13Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase14,
    BasicPrimitiveArraysCase14Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase15,
    BasicPrimitiveArraysCase15Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase16,
    BasicPrimitiveArraysCase16Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase17,
    BasicPrimitiveArraysCase17Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase18,
    BasicPrimitiveArraysCase18Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase19,
    BasicPrimitiveArraysCase19Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase20,
    BasicPrimitiveArraysCase20Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase21,
    BasicPrimitiveArraysCase21Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase22,
    BasicPrimitiveArraysCase22Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase23,
    BasicPrimitiveArraysCase23Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase24,
    BasicPrimitiveArraysCase24Flat
  >
>;
assert<
  Equals<
    BasicPrimitiveArraysCase25,
    BasicPrimitiveArraysCase25Flat
  >
>;
