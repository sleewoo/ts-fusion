import { assert, type Equals } from "tsafe";

import type {
  DataTransformationTest1,
  DataTransformationTest2,
  DataTransformationTest3,
  DataTransformationTest4,
  DataTransformationTest5,
  DataTransformationTest6,
  DataTransformationTest7,
  DataTransformationTest8,
  DataTransformationTest9,
  DataTransformationTest10,
  DataTransformationTest11,
  DataTransformationTest12,
  DataTransformationTest13,
  DataTransformationTest14,
  DataTransformationTest15,
  DataTransformationTest16,
  DataTransformationTest17,
  DataTransformationTest18,
  DataTransformationTest19,
  DataTransformationTest20,
  DataTransformationTest21,
  DataTransformationTest22,
  DataTransformationTest23,
  DataTransformationTest24,
  DataTransformationTest25,
} from "@/fixtures/tuples/data-transformation.ts";

type DataTransformationTest1Flat<T, U> = [
  input: unknown,
  ...validators: ((input: unknown) => T)[],
  output: U
];

type DataTransformationTest2Flat<T, U> = [
  source: T,
  ...pipes: ((input: T) => U)[],
  destination: U
];

type DataTransformationTest3Flat = [
  readonly [
    ...string[]
  ],
  mutable: [
    ...number[]
  ]
];

type DataTransformationTest4Flat = [
  threshold: number,
  ...[
    ...samples: number[]
  ]
];

type DataTransformationTest5Flat<T> = [
  ((T) extends (string) ? ("string") : ("other")),
  ...T[]
];

type DataTransformationTest6Flat = [
  format: (("csv") | ("json")),
  ...data: [
    ...(((string) | (number)))[]
  ]
];

type DataTransformationTest7Flat = [
  template: string,
  ...values: [
    ...unknown[]
  ]
];

type DataTransformationTest8Flat = [
  start: Date,
  end: Date,
  ...milestones: [
    ...Date[]
  ]
];

type DataTransformationTest9Flat = [
  header: [
    ...string[]
  ],
  ...rows: [
    ...[
      ...number[]
    ][]
  ]
];

type DataTransformationTest10Flat = [
  primaryKey: string,
  ...relations: [
    string,
    string
  ][]
];

type DataTransformationTest11Flat<T, U> = [
  input: T,
  ...mappers: [
    ((item: T) => U)
  ][],
  comparator: ((a: U, b: U) => number)
];

type DataTransformationTest12Flat<T, U> = [
  rawData: unknown,
  ...transformations: [
    ((input: T) => U),
    ...never[]
  ]
];

type DataTransformationTest13Flat<T> = [
  dataset: T[],
  ...splitPoints: number[]
];

type DataTransformationTest14Flat<T, U> = [
  encoder: ((input: T) => U),
  decoder: ((input: U) => T),
  ...samples: T[]
];

type DataTransformationTest15Flat = [
  compression: (("gzip") | ("brotli")),
  ...chunks: Uint8Array[]
];

type DataTransformationTest16Flat<T, U> = [
  normalizer: ((input: T) => U),
  denormalizer: ((input: U) => T),
  ...data: T[]
];

type DataTransformationTest17Flat<T> = [
  schema: unknown,
  ...migrations: [
    ((old: T) => T)
  ][]
];

type DataTransformationTest18Flat<T, U> = [
  sourceFormat: string,
  targetFormat: string,
  ...converters: [
    ((input: T) => U)
  ][]
];

type DataTransformationTest19Flat<T> = [
  input: T,
  ...validationSteps: [
    ((input: unknown) => T),
    ...never[]
  ]
];

type DataTransformationTest20Flat<T, U, V> = [
  merger: ((a: T, b: U) => V),
  ...items: [
    T,
    U
  ][]
];

type DataTransformationTest21Flat<T> = [
  parser: ((raw: string) => T),
  serializer: ((data: T) => string),
  ...rawData: string[]
];

type DataTransformationTest22Flat<T> = [
  diffAlgorithm: ((a: T, b: T) => never),
  ...versions: T[]
];

type DataTransformationTest23Flat<T> = [
  hashFunction: ((data: T) => string),
  ...dataBlocks: T[]
];

type DataTransformationTest24Flat<T> = [
  sortKey: keyof (T),
  ...items: T[]
];

type DataTransformationTest25Flat<T> = [
  groupBy: ((item: T) => string),
  ...items: T[]
];


assert<
  Equals<
    DataTransformationTest1<never, never>,
    DataTransformationTest1Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest2<never, never>,
    DataTransformationTest2Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest3,
    DataTransformationTest3Flat
  >
>;
assert<
  Equals<
    DataTransformationTest4,
    DataTransformationTest4Flat
  >
>;
assert<
  Equals<
    DataTransformationTest5<never>,
    DataTransformationTest5Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest6,
    DataTransformationTest6Flat
  >
>;
assert<
  Equals<
    DataTransformationTest7,
    DataTransformationTest7Flat
  >
>;
assert<
  Equals<
    DataTransformationTest8,
    DataTransformationTest8Flat
  >
>;
assert<
  Equals<
    DataTransformationTest9,
    DataTransformationTest9Flat
  >
>;
assert<
  Equals<
    DataTransformationTest10,
    DataTransformationTest10Flat
  >
>;
assert<
  Equals<
    DataTransformationTest11<never, never>,
    DataTransformationTest11Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest12<never, never>,
    DataTransformationTest12Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest13<never>,
    DataTransformationTest13Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest14<never, never>,
    DataTransformationTest14Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest15,
    DataTransformationTest15Flat
  >
>;
assert<
  Equals<
    DataTransformationTest16<never, never>,
    DataTransformationTest16Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest17<never>,
    DataTransformationTest17Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest18<never, never>,
    DataTransformationTest18Flat<never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest19<never>,
    DataTransformationTest19Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest20<never, never, never>,
    DataTransformationTest20Flat<never, never, never>
  >
>;
assert<
  Equals<
    DataTransformationTest21<never>,
    DataTransformationTest21Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest22<never>,
    DataTransformationTest22Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest23<never>,
    DataTransformationTest23Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest24<never>,
    DataTransformationTest24Flat<never>
  >
>;
assert<
  Equals<
    DataTransformationTest25<never>,
    DataTransformationTest25Flat<never>
  >
>;
