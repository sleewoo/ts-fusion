import { assert, type Equals } from "tsafe";

import type {
  TupleArraysCase1,
  TupleArraysCase2,
  TupleArraysCase3,
  TupleArraysCase4,
  TupleArraysCase5,
  TupleArraysCase6,
  TupleArraysCase7,
  TupleArraysCase8,
  TupleArraysCase9,
  TupleArraysCase10,
  TupleArraysCase11,
  TupleArraysCase12,
  TupleArraysCase13,
  TupleArraysCase14,
  TupleArraysCase15,
  TupleArraysCase16,
  TupleArraysCase17,
  TupleArraysCase18,
  TupleArraysCase19,
  TupleArraysCase20,
  TupleArraysCase21,
  TupleArraysCase22,
  TupleArraysCase23,
  TupleArraysCase24,
  TupleArraysCase25,
} from "@/fixtures/arrays/tuple-arrays.ts";

// Inspired by React useState pattern
type TupleArraysCase1Flat<T> = [
  T,
  ((newValue: T) => void)
];

// Similar to Redux action-reducer tuples
type TupleArraysCase2Flat = [
  string,
  ...((({
    a: number
  }) | ({
    b: string
  })))[]
];

// Coordinate system pattern (GIS/CAD)
type TupleArraysCase3Flat = [
  number,
  number,
  (number)?
][];

// Database connection config pattern
type TupleArraysCase4Flat = readonly [
  host: string,
  port: number,
  ...sslOptions: Array<{
    cert: string
  }>
];

// Language i18n entry structure
type TupleArraysCase5Flat = [
  key: `i18n_${string}`,
  translations: [
    string,
    ((newValue: string) => void)
  ][]
];

// Network packet header pattern
type TupleArraysCase6Flat = [
  version: ((4) | (6)),
  ...Array<Array<boolean>>,
  metadata: number[]
];

// Pagination control pattern
type TupleArraysCase7Flat = [
  currentPage: number,
  itemsPerPage: number,
  ...pageNumbers: number[]
];

// Type-safe matrix operations
type TupleArraysCase8Flat<T extends number[][]> = [
  matrix: T,
  inverse: T,
  determinant: number
][];

// Form validation results pattern
type TupleArraysCase9Flat = [
  field: string,
  isValid: boolean,
  ...messages: string[]
][];

// API middleware chain pattern
type TupleArraysCase10Flat = Array<[
  priority: number,
  handler: ((...args: unknown[]) => never)
]>;

// Pattern matching path segments
type TupleArraysCase11Flat = [
  ...pathParts: Array<((string) | (number))>,
  queryParams: Record<string, string>
][];

// Versioned configuration pattern
type TupleArraysCase12Flat = [
  version: number,
  ...config: Array<[
    feature: string,
    enabled: boolean
  ]>
];

// Recursive directory structure pattern
type TupleArraysCase13Flat = [
  name: string,
  children: [
    ...string[]
  ],
  size?: number
][];

// Game engine component pattern
type TupleArraysCase14Flat = [
  componentType: (("transform") | ("render")),
  data: ({
    a: number
  }) | ({
    b: string
  }),
  ...dependencies: string[]
][];

// Financial trading pattern
type TupleArraysCase15Flat = [
  timestamp: number,
  price: number,
  volume: number,
  ...exchangeData: Array<[
    exchange: string,
    spread: number
  ]>
][];

// Pattern for ordered CSS transitions
type TupleArraysCase16Flat = [
  property: string,
  duration: number,
  timingFunction: (("ease") | ("linear"))
][];

// Scientific measurement pattern
type TupleArraysCase17Flat = [
  experimentId: string,
  ...readings: Array<[
    time: number,
    value: number,
    precision: number
  ]>
];

// Authentication challenge pattern
type TupleArraysCase18Flat = [
  nonce: string,
  algorithm: (("SHA-256") | ("HMAC")),
  ...parameters: Array<[
    name: string,
    value: ((number) | (string))
  ]>
][];

// Video processing frame pattern
type TupleArraysCase19Flat = [
  frameNumber: number,
  buffers: number[],
  ...metadata: Array<[
    key: string,
    value: number
  ]>
][];

// Pattern for chemical compound notation
type TupleArraysCase20Flat = [
  formula: string,
  bonds: Array<[
    from: number,
    to: number,
    type: (("single") | ("double"))
  ]>,
  charge?: number
][];

// Astronomy observation pattern
type TupleArraysCase21Flat = [
  ra: number,
  dec: number,
  ...magnitudes: Array<[
    band: (("U") | ("B") | ("V")),
    value: number
  ]>
][];

// Machine learning batch pattern
type TupleArraysCase22Flat = [
  batchId: string,
  features: Array<Array<boolean>>,
  labels: number[]
][];

// Pattern for musical notation
type TupleArraysCase23Flat = [
  note: string,
  duration: (("whole") | ("half") | ("quarter")),
  ...modifiers: Array<(("sharp") | ("flat"))>
][];

// Genetic sequence pattern
type TupleArraysCase24Flat = [
  sequenceId: string,
  ...bases: Array<[
    position: number,
    base: (("A") | ("T") | ("C") | ("G"))
  ]>
][];

// Quantum state notation pattern
type TupleArraysCase25Flat = [
  qubitId: number,
  ...states: Array<[
    probability: number,
    state: (("|0>") | ("|1>") | ("+") | ("-"))
  ]>
][];


assert<
  Equals<
    TupleArraysCase1<never>,
    TupleArraysCase1Flat<never>
  >
>;
assert<
  Equals<
    TupleArraysCase2,
    TupleArraysCase2Flat
  >
>;
assert<
  Equals<
    TupleArraysCase3,
    TupleArraysCase3Flat
  >
>;
assert<
  Equals<
    TupleArraysCase4,
    TupleArraysCase4Flat
  >
>;
assert<
  Equals<
    TupleArraysCase5,
    TupleArraysCase5Flat
  >
>;
assert<
  Equals<
    TupleArraysCase6,
    TupleArraysCase6Flat
  >
>;
assert<
  Equals<
    TupleArraysCase7,
    TupleArraysCase7Flat
  >
>;
assert<
  Equals<
    TupleArraysCase8<never>,
    TupleArraysCase8Flat<never>
  >
>;
assert<
  Equals<
    TupleArraysCase9,
    TupleArraysCase9Flat
  >
>;
assert<
  Equals<
    TupleArraysCase10,
    TupleArraysCase10Flat
  >
>;
assert<
  Equals<
    TupleArraysCase11,
    TupleArraysCase11Flat
  >
>;
assert<
  Equals<
    TupleArraysCase12,
    TupleArraysCase12Flat
  >
>;
assert<
  Equals<
    TupleArraysCase13,
    TupleArraysCase13Flat
  >
>;
assert<
  Equals<
    TupleArraysCase14,
    TupleArraysCase14Flat
  >
>;
assert<
  Equals<
    TupleArraysCase15,
    TupleArraysCase15Flat
  >
>;
assert<
  Equals<
    TupleArraysCase16,
    TupleArraysCase16Flat
  >
>;
assert<
  Equals<
    TupleArraysCase17,
    TupleArraysCase17Flat
  >
>;
assert<
  Equals<
    TupleArraysCase18,
    TupleArraysCase18Flat
  >
>;
assert<
  Equals<
    TupleArraysCase19,
    TupleArraysCase19Flat
  >
>;
assert<
  Equals<
    TupleArraysCase20,
    TupleArraysCase20Flat
  >
>;
assert<
  Equals<
    TupleArraysCase21,
    TupleArraysCase21Flat
  >
>;
assert<
  Equals<
    TupleArraysCase22,
    TupleArraysCase22Flat
  >
>;
assert<
  Equals<
    TupleArraysCase23,
    TupleArraysCase23Flat
  >
>;
assert<
  Equals<
    TupleArraysCase24,
    TupleArraysCase24Flat
  >
>;
assert<
  Equals<
    TupleArraysCase25,
    TupleArraysCase25Flat
  >
>;
