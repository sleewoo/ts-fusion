import { assert, type Equals } from "tsafe";

import type {
  TypePredicatesCase1,
  TypePredicatesCase2,
  TypePredicatesCase3,
  TypePredicatesCase4,
  TypePredicatesCase5,
  TypePredicatesCase6,
  TypePredicatesCase7,
  TypePredicatesCase8,
  TypePredicatesCase9,
  TypePredicatesCase10,
  TypePredicatesCase11,
  TypePredicatesCase12,
  TypePredicatesCase13,
  TypePredicatesCase14,
  TypePredicatesCase15,
  TypePredicatesCase16,
  TypePredicatesCase17,
  TypePredicatesCase18,
  TypePredicatesCase19,
  TypePredicatesCase20,
  TypePredicatesCase21,
  TypePredicatesCase22,
  TypePredicatesCase23,
  TypePredicatesCase24,
  TypePredicatesCase25,
} from "@/fixtures/mixed/TypePredicates.ts";

// Valid type predicate syntax
type TypePredicatesCase1Flat = ((value: unknown) => value is (string) & ({
  __brand: "TransactionID"
}));

// Proper union type check
type TypePredicatesCase2Flat = ((res: unknown) => res is Array<{
  id: ((string) & ({
    __brand: "ProductID"
  }));
  variants:  readonly [
        string,
        ...((({
          a: number
        }) | ({
          b: string
        })))[]
      ];
  pricing: {
    base: number;
    currency: (((string) & ({
      __brand: "id"
    }))) | (((number) & ({
      __brand: "count"
    })));
    discounts?: [
      key: `i18n_${string}`,
      translations: [
        string,
        ((newValue: string) => void)
      ][]
    ]
  }
}>);

// Numeric literal type guard
type TypePredicatesCase3Flat = ((n: unknown) => n is ((0) | (1) | (2) | (3) | (4) | (5)));

// DOM type guard with proper return type
type TypePredicatesCase4Flat = ((el: unknown) => el is HTMLElement);

// Fixed React element check
type TypePredicatesCase5Flat = ((node: unknown) => node is "");

// Valid asserts predicate
type TypePredicatesCase6Flat = ((value: unknown) => asserts value is Error);

// Template literal type guard
type TypePredicatesCase7Flat = ((version: string) => version is `v${number}.${number}`);

// Coordinate type guard
type TypePredicatesCase8Flat = ((coord: unknown) => coord is (([
  componentType: (("transform") | ("render")),
  data: ({
    a: number
  }) | ({
    b: string
  }),
  ...dependencies: string[]
][]) & ({
  projection: (("WGS84") | ("Mercator"))
})));

// Branded type predicate
type TypePredicatesCase9Flat = ((amount: unknown) => amount is ((number) & ({
  __currency: "USD"
})));

// Generic type predicate
type TypePredicatesCase10Flat<T> = ((obj: unknown) => obj is T);

// ArrayBuffer check
type TypePredicatesCase11Flat = ((data: unknown) => data is ArrayBuffer);

// Union type narrowing
type TypePredicatesCase12Flat = ((scope: unknown) => scope is (("read") | ("write")));

// CSS value check
type TypePredicatesCase13Flat = ((value: unknown) => value is `${number}px`);

// Date format guard
type TypePredicatesCase14Flat = ((dateStr: unknown) => dateStr is `${number}-${number}-${number}`);

// Genetic pattern check
type TypePredicatesCase15Flat = ((gene: unknown) => gene is `rs${number}`);

// Quantum state guard
type TypePredicatesCase16Flat = ((state: unknown) => state is `|${number}⟩`);

// Path format check
type TypePredicatesCase17Flat = ((path: unknown) => path is `/${string}.ts`);

// Range-checked number
type TypePredicatesCase18Flat = ((mag: unknown) => mag is ((number) & ({
  __range: [
    0,
    20
  ]
})));

// Physics unit check
type TypePredicatesCase19Flat = ((value: unknown) => value is ((number) & ({
  __unit: "m/s²"
})));

// Composable type guard
type TypePredicatesCase20Flat<T> = {
  check: ((value: unknown) => value is T);
  and: (<U>(other: TypePredicatesCase20<U /** unresolved */>) => TypePredicatesCase20<((T) & (U /** unresolved */))>)
};

// Guard composer
type TypePredicatesCase21Flat = (<T>(guard: ((v: unknown) => v is T /** unresolved */)) => {
  and: (<U>(other: ((v: unknown) => v is U /** unresolved */)) => ((v: unknown) => v is ((T /** unresolved */) & (U /** unresolved */))))
});

// Error object check
type TypePredicatesCase22Flat = ((error: unknown) => error is {
  code: number;
  message: string
});

// JWT format check
type TypePredicatesCase23Flat = ((token: unknown) => token is `Bearer ${string}`);

// State machine guard
type TypePredicatesCase24Flat = ((state: unknown) => state is (("loading") | ("ready") | ("error")));

// Recursive type guard
type TypePredicatesCase25Flat<T> = ((T) extends (object) ? ({ [K in keyof (T)]: TypePredicatesCase25<(T)[K /** unresolved */]> }) : (((v: unknown) => v is T)));


assert<
  Equals<
    TypePredicatesCase1,
    TypePredicatesCase1Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase2,
    TypePredicatesCase2Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase3,
    TypePredicatesCase3Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase4,
    TypePredicatesCase4Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase5,
    TypePredicatesCase5Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase6,
    TypePredicatesCase6Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase7,
    TypePredicatesCase7Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase8,
    TypePredicatesCase8Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase9,
    TypePredicatesCase9Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase10<never>,
    TypePredicatesCase10Flat<never>
  >
>;
assert<
  Equals<
    TypePredicatesCase11,
    TypePredicatesCase11Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase12,
    TypePredicatesCase12Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase13,
    TypePredicatesCase13Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase14,
    TypePredicatesCase14Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase15,
    TypePredicatesCase15Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase16,
    TypePredicatesCase16Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase17,
    TypePredicatesCase17Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase18,
    TypePredicatesCase18Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase19,
    TypePredicatesCase19Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase20<never>,
    TypePredicatesCase20Flat<never>
  >
>;
assert<
  Equals<
    TypePredicatesCase21,
    TypePredicatesCase21Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase22,
    TypePredicatesCase22Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase23,
    TypePredicatesCase23Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase24,
    TypePredicatesCase24Flat
  >
>;
assert<
  Equals<
    TypePredicatesCase25<never>,
    TypePredicatesCase25Flat<never>
  >
>;
