import { assert, type Equals } from "tsafe";

import type {
  UtilityPatternsTest1,
  UtilityPatternsTest2,
  UtilityPatternsTest3,
  UtilityPatternsTest4,
  UtilityPatternsTest5,
  UtilityPatternsTest6,
  UtilityPatternsTest7,
  UtilityPatternsTest8,
  UtilityPatternsTest9,
  UtilityPatternsTest10,
  UtilityPatternsTest11,
  UtilityPatternsTest12,
  UtilityPatternsTest13,
  UtilityPatternsTest14,
  UtilityPatternsTest15,
  UtilityPatternsTest16,
  UtilityPatternsTest17,
  UtilityPatternsTest18,
  UtilityPatternsTest19,
  UtilityPatternsTest20,
  UtilityPatternsTest21,
  UtilityPatternsTest22,
  UtilityPatternsTest23,
  UtilityPatternsTest24,
  UtilityPatternsTest25,
} from "@/fixtures/tuples/utility-patterns.ts";

// @license MIT
// Contains AI-generated test patterns
type UtilityPatternsTest1Flat<T> = [
  T,
  (Error | null)
];

type UtilityPatternsTest2Flat = [
  init: (() => void),
  dispose: (() => void)
];

type UtilityPatternsTest3Flat<T> = [
  state: T,
  setState: ((newState: T) => void)
];

type UtilityPatternsTest4Flat<T> = [
  current: T,
  previous: T
];

type UtilityPatternsTest5Flat = [
  id: string,
  ...dependencies: never[]
];

type UtilityPatternsTest6Flat = [
  timestamp: Date,
  ...data: unknown[]
];

type UtilityPatternsTest7Flat = [
  string,
  ...((number | boolean))[]
];

type UtilityPatternsTest8Flat = [
  readonly string[],
  mutable: number[]
];

type UtilityPatternsTest9Flat<T> = [
  Promise<T>,
  AbortController
];

type UtilityPatternsTest10Flat = [
  key: string,
  handler: ((...args: never[]) => void),
  options?: {
    once?: boolean
  }
];

type UtilityPatternsTest11Flat<T> = [
  factory: (() => T),
  ...dependencies: never[]
];

type UtilityPatternsTest12Flat<T> = [
  key: keyof T,
  defaultValue: (T)[keyof T]
];

type UtilityPatternsTest13Flat<T> = [
  T,
  ...Partial<T>[]
];

type UtilityPatternsTest14Flat<T> = [
  T,
  ...((T extends unknown[] ? (T)[number][] : never))
];

type UtilityPatternsTest15Flat<T> = [
  T,
  ...(keyof T)[]
];

type UtilityPatternsTest16Flat<T> = [
  T,
  ...((T extends object ? [
    keyof T
  ] : never))
];

type UtilityPatternsTest17Flat<T> = [
  T,
  ...((T extends Date ? [
    number
  ] : [
    string
  ]))
];

type UtilityPatternsTest18Flat<T> = [
  T,
  ...((T extends Error ? [
    string
  ] : [
    number
  ]))
];

type UtilityPatternsTest19Flat<T> = [
  T,
  ...((T extends Map<infer K, infer V> ? [
    K /** unresolved */,
    V /** unresolved */
  ] : never))
];

type UtilityPatternsTest20Flat<T> = [
  T,
  ...((T extends Set<infer V> ? [
    V /** unresolved */
  ] : never))
];

type UtilityPatternsTest21Flat<T> = [
  T,
  ...((T extends Promise<infer V> ? [
    V /** unresolved */
  ] : never))
];

type UtilityPatternsTest22Flat<T> = [
  T,
  ...((T extends ((...args: never) => never) ? Parameters<T> : never))
];

type UtilityPatternsTest23Flat<T> = [
  T,
  ...((T extends new (...args: never) => never ? ConstructorParameters<T> : never))
];

type UtilityPatternsTest24Flat<T> = [
  T,
  ...((T extends Array<infer U> ? [
    U /** unresolved */
  ] : never))
];

type UtilityPatternsTest25Flat<T> = [
  T,
  ...((T extends Record<string, infer V> ? [
    V /** unresolved */
  ] : never))
];


assert<
  Equals<
    UtilityPatternsTest1<never>,
    UtilityPatternsTest1Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest2,
    UtilityPatternsTest2Flat
  >
>;
assert<
  Equals<
    UtilityPatternsTest3<never>,
    UtilityPatternsTest3Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest4<never>,
    UtilityPatternsTest4Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest5,
    UtilityPatternsTest5Flat
  >
>;
assert<
  Equals<
    UtilityPatternsTest6,
    UtilityPatternsTest6Flat
  >
>;
assert<
  Equals<
    UtilityPatternsTest7,
    UtilityPatternsTest7Flat
  >
>;
assert<
  Equals<
    UtilityPatternsTest8,
    UtilityPatternsTest8Flat
  >
>;
assert<
  Equals<
    UtilityPatternsTest9<never>,
    UtilityPatternsTest9Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest10,
    UtilityPatternsTest10Flat
  >
>;
assert<
  Equals<
    UtilityPatternsTest11<never>,
    UtilityPatternsTest11Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest12<never>,
    UtilityPatternsTest12Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest13<never>,
    UtilityPatternsTest13Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest14<never>,
    UtilityPatternsTest14Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest15<never>,
    UtilityPatternsTest15Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest16<never>,
    UtilityPatternsTest16Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest17<never>,
    UtilityPatternsTest17Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest18<never>,
    UtilityPatternsTest18Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest19<never>,
    UtilityPatternsTest19Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest20<never>,
    UtilityPatternsTest20Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest21<never>,
    UtilityPatternsTest21Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest22<never>,
    UtilityPatternsTest22Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest23<never>,
    UtilityPatternsTest23Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest24<never>,
    UtilityPatternsTest24Flat<never>
  >
>;
assert<
  Equals<
    UtilityPatternsTest25<never>,
    UtilityPatternsTest25Flat<never>
  >
>;
