import { assert, type Equals } from "tsafe";

import type {
  AssertionTypesCase1,
  AssertionTypesCase4,
  AssertionTypesCase6,
  AssertionTypesCase10,
  AssertionTypesCase12,
  AssertionTypesCase13,
  AssertionTypesCase16,
  AssertionTypesCase17,
  AssertionTypesCase22,
  AssertionTypesCase24,
} from "@/fixtures/mixed/AssertionTypes.ts";

// Zod-like parser
type AssertionTypesCase1Flat = {
  parse: ((input: unknown) => input is (Array<{
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
  }>)[number])
};

// Numeric literal check
type AssertionTypesCase4Flat = ((value: unknown) => value is (0 | 1 | 2 | 3 | 4 | 5));

// Precision branded type
type AssertionTypesCase6Flat = (number & {
  __precision: 2
});

// Physics unit check
type AssertionTypesCase10Flat = (number & {
  __unit: "m/s²"
});

// Recursive validator
type AssertionTypesCase12Flat<T> = T extends object ? {
  validate: ((obj: unknown) => obj is T)
} : never;

// Uppercase enum check
type AssertionTypesCase13Flat = { [K in ("get" | "post")]: Uppercase<K /** unresolved */> };

// Mathematical operation tuple
type AssertionTypesCase16Flat = readonly [
  "+",
  number,
  number
];

// Astronomy coordinate check
type AssertionTypesCase17Flat = (number & {
  __range: [
    0,
    360
  ]
});

// Composable validator
type AssertionTypesCase22Flat<T> = {
  /** @ts-expect-error */
  and: (<U>(other: ((v: T) => v is U /** unresolved */)) => ((v: unknown) => v is (T & U /** unresolved */)))
};

// Recursive JSON check
type AssertionTypesCase24Flat<T> = T extends object ? { [K in keyof T]: AssertionTypesCase24<(T)[K /** unresolved */]> } : ((value: unknown) => value is T);


assert<
  Equals<
    AssertionTypesCase1,
    AssertionTypesCase1Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase4,
    AssertionTypesCase4Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase6,
    AssertionTypesCase6Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase10,
    AssertionTypesCase10Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase12<never>,
    AssertionTypesCase12Flat<never>
  >
>;
assert<
  Equals<
    AssertionTypesCase13,
    AssertionTypesCase13Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase16,
    AssertionTypesCase16Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase17,
    AssertionTypesCase17Flat
  >
>;
assert<
  Equals<
    AssertionTypesCase22<never>,
    AssertionTypesCase22Flat<never>
  >
>;
assert<
  Equals<
    AssertionTypesCase24<never>,
    AssertionTypesCase24Flat<never>
  >
>;
