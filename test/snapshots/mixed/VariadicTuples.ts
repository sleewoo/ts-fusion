import { assert, type Equals } from "tsafe";

import type {
  VariadicTuplesCase1,
  VariadicTuplesCase2,
  VariadicTuplesCase3,
  VariadicTuplesCase4,
  VariadicTuplesCase5,
  VariadicTuplesCase6,
  VariadicTuplesCase7,
  VariadicTuplesCase8,
  VariadicTuplesCase9,
  VariadicTuplesCase10,
  VariadicTuplesCase12,
  VariadicTuplesCase13,
  VariadicTuplesCase14,
  VariadicTuplesCase15,
  VariadicTuplesCase16,
  VariadicTuplesCase17,
  VariadicTuplesCase18,
  VariadicTuplesCase19,
  VariadicTuplesCase21,
  VariadicTuplesCase22,
  VariadicTuplesCase23,
  VariadicTuplesCase24,
  VariadicTuplesCase25,
} from "@/fixtures/mixed/VariadicTuples.ts";

// Inspired by React useState pattern
type VariadicTuplesCase1Flat<T> = [
  T,
  ((newValue: T) => void)
];

// Similar to Redux action tuples
type VariadicTuplesCase2Flat = [
  string,
  ...Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
      users: ReadonlyArray<{
        readonly id: string;
        permissions: readonly [
          string,
          ...(({
            a: number
          } | {
            b: string
          }))[]
        ]
      }>
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }>
];

// Pattern from coordinate transformations
type VariadicTuplesCase3Flat = [
  ...Array<(string & {
    __brand: "TransactionID"
  })>,
  number
];

// Inspired by database query parameters
type VariadicTuplesCase4Flat = [
  string,
  ...Array<(string | number)>
];

// Similar to physics engine vectors
type VariadicTuplesCase5Flat = [
  number,
  number,
  ...number[]
];

// Pattern from CLI command parsing
type VariadicTuplesCase6Flat = [
  command: string,
  ...flags: Array<`--${string}`>
];

// Inspired by pagination controls
type VariadicTuplesCase7Flat = [
  current: number,
  pageSize: number,
  ...number[]
];

// Similar to type-safe paths
type VariadicTuplesCase8Flat = [
  proto: ("http" | "https"),
  ...string[]
];

// Pattern from financial transactions
type VariadicTuplesCase9Flat = [
  from: (Array<(string & {
    __brand: "TransactionID"
  })>)[number],
  ...number[]
];

// Inspired by animation keyframes
type VariadicTuplesCase10Flat = [
  start: number,
  ...Array<[
    number,
    ((req: {
      params: Array<(string & {
        __brand: "TransactionID"
      })>
    }, res: {
      json: ((data: unknown) => void)
    }) => Promise<void>)
  ]>
];

// Similar to recursive spreads
// export type VariadicTuplesCase11<T> = [T, ...VariadicTuplesCase11<T>];
// Pattern from CSV parsing
type VariadicTuplesCase12Flat = [
  header: string,
  ...Array<(string | number)>
];

// Inspired by astronomy coordinates
type VariadicTuplesCase13Flat = [
  ...Array<(string & {
    __brand: "TransactionID"
  })>,
  number,
  number
];

// Similar to quantum state notation
type VariadicTuplesCase14Flat = [
  "|0>",
  ...Array<("|1>" | "+" | "-")>
];

// Pattern from genetic sequences
type VariadicTuplesCase15Flat = [
  "A",
  "T",
  "C",
  "G",
  ...string[]
];

// Inspired by type-safe routes
type VariadicTuplesCase16Flat = [
  `/users/${number}`,
  ...Array<`/posts/${string}`>
];

// Similar to mathematical operations
type VariadicTuplesCase17Flat = [
  "+",
  number,
  number,
  ...number[]
];

// Pattern from IoT sensor data
type VariadicTuplesCase18Flat = [
  timestamp: number,
  ...Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
      users: ReadonlyArray<{
        readonly id: string;
        permissions: readonly [
          string,
          ...(({
            a: number
          } | {
            b: string
          }))[]
        ]
      }>
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }>
];

// Inspired by network packets
type VariadicTuplesCase19Flat = [
  header: Uint8Array,
  ...ArrayBuffer[]
];

// Similar to recursive UI components
// export type VariadicTuplesCase20 = [string, ...Array<VariadicTuplesCase20>];
// Pattern from file formats
type VariadicTuplesCase21Flat = [
  magic: number[],
  ...Uint8Array[]
];

// Inspired by musical notation
type VariadicTuplesCase22Flat = [
  tempo: number,
  ...Array<("C" | "D" | "E")>
];

// Similar to chess moves
type VariadicTuplesCase23Flat = [
  from: string,
  to: string,
  ...Array<("capture" | "check")>
];

// Pattern from chemical formulas
type VariadicTuplesCase24Flat = [
  symbol: string,
  ...Array<(number | string)>
];

// Inspired by astronomy catalogs
type VariadicTuplesCase25Flat = [
  id: (Array<(string & {
    __brand: "TransactionID"
  })>)[number],
  ...([
    componentType: ("transform" | "render"),
    data: ((({
      a: number
    } | {
      b: string
    }))[])[number],
    ...dependencies: string[]
  ][] & {
    projection: ("WGS84" | "Mercator")
  })
];


assert<
  Equals<
    VariadicTuplesCase1<never>,
    VariadicTuplesCase1Flat<never>
  >
>;
assert<
  Equals<
    VariadicTuplesCase2,
    VariadicTuplesCase2Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase3,
    VariadicTuplesCase3Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase4,
    VariadicTuplesCase4Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase5,
    VariadicTuplesCase5Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase6,
    VariadicTuplesCase6Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase7,
    VariadicTuplesCase7Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase8,
    VariadicTuplesCase8Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase9,
    VariadicTuplesCase9Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase10,
    VariadicTuplesCase10Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase12,
    VariadicTuplesCase12Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase13,
    VariadicTuplesCase13Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase14,
    VariadicTuplesCase14Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase15,
    VariadicTuplesCase15Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase16,
    VariadicTuplesCase16Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase17,
    VariadicTuplesCase17Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase18,
    VariadicTuplesCase18Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase19,
    VariadicTuplesCase19Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase21,
    VariadicTuplesCase21Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase22,
    VariadicTuplesCase22Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase23,
    VariadicTuplesCase23Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase24,
    VariadicTuplesCase24Flat
  >
>;
assert<
  Equals<
    VariadicTuplesCase25,
    VariadicTuplesCase25Flat
  >
>;
