import { assert, type Equals } from "tsafe";

import type {
  InferArraysCase1,
  InferArraysCase2,
  InferArraysCase3,
  InferArraysCase4,
  InferArraysCase5,
  InferArraysCase6,
  InferArraysCase7,
  InferArraysCase8,
  InferArraysCase9,
  InferArraysCase10,
  InferArraysCase11,
  InferArraysCase12,
  InferArraysCase13,
  InferArraysCase14,
  InferArraysCase15,
  InferArraysCase16,
  InferArraysCase17,
  InferArraysCase18,
  InferArraysCase19,
  InferArraysCase20,
  InferArraysCase21,
  InferArraysCase22,
  InferArraysCase23,
  InferArraysCase24,
  InferArraysCase25,
} from "@/fixtures/arrays/infer-arrays.ts";

// Inspired by API response unwrapping
type InferArraysCase1Flat<T> = Array<((T) extends (Array<infer U>) ? (U /** unresolved */) : (never))>;

// Similar to promise batch processing
type InferArraysCase2Flat<T> = Array<((T) extends (Promise<infer U>) ? (U /** unresolved */) : (T))>;

// Pattern from function parameter extraction
type InferArraysCase3Flat<T> = Array<((T) extends (((...args: infer P) => void)) ? (P /** unresolved */) : (never))>;

// Inspired by nested array flattening
type InferArraysCase4Flat<T> = Array<((T) extends (Array<Array<infer U>>) ? (U /** unresolved */) : (T))>;

// Similar to union type filtering
type InferArraysCase5Flat<T> = Array<((T) extends (Array<infer U>) ? (((U /** unresolved */) extends (string) ? (U /** unresolved */) : (never))) : (never))>;

// Pattern from tuple element extraction
type InferArraysCase6Flat<T> = Array<((T) extends ([
  infer A,
  ...unknown[]
]) ? (A /** unresolved */) : (never))>;

// Inspired by React prop type inference
type InferArraysCase7Flat<T> = Array<((T) extends (Array<infer P>) ? (P /** unresolved */) : (never))>;

// Similar to recursive type unwrapping
type InferArraysCase8Flat<T> = Array<((T) extends (Array<infer U>) ? (InferArraysCase8<U /** unresolved */>) : (T))>;

// Pattern from error type extraction
type InferArraysCase9Flat<T> = Array<((T) extends (Error) ? ((T)["message"]) : (never))>;

// Inspired by mapped type value inference
type InferArraysCase10Flat<T> = Array<((T) extends (Record<string, infer V>) ? (V /** unresolved */) : (never))>;

// Similar to function return type batching
type InferArraysCase11Flat<T> = Array<((T) extends (((...args: unknown[]) => infer R)) ? (R /** unresolved */) : (never))>;

// Pattern from intersection type decomposition
type InferArraysCase12Flat<T> = Array<((T) extends (((infer U) & (object))) ? (U /** unresolved */) : (never))>;

// Inspired by CSS property value inference
type InferArraysCase13Flat<T> = Array<((T) extends (keyof (CSSStyleDeclaration /** unresolved */)) ? ((CSSStyleDeclaration /** unresolved */)[T]) : (never))>;

// Similar to DOM event type mapping
type InferArraysCase14Flat<T> = Array<((T) extends (`on${infer E}`) ? (E /** unresolved */) : (never))>;

// Pattern from complex object key inference
type InferArraysCase15Flat = Array<(({
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
}) extends (infer T) ? (keyof (T /** unresolved */)) : (never))>;

// Inspired by recursive promise unwrapping
type InferArraysCase16Flat<T> = Array<((T) extends (Promise<infer U>) ? (InferArraysCase16<U /** unresolved */>) : (T))>;

// Similar to tuple rest element inference
type InferArraysCase17Flat<T> = Array<((T) extends ([
  string,
  ...infer R
]) ? (R /** unresolved */) : (never))>;

// Pattern from function this type inference
type InferArraysCase18Flat<T> = Array<((T) extends (((this: infer This, ...args: unknown[]) => void)) ? (This /** unresolved */) : (never))>;

// Inspired by constructor parameter inference
type InferArraysCase19Flat<T> = Array<((T) extends (new (...args: infer P) => unknown) ? (P /** unresolved */) : (never))>;

// Similar to template literal part inference
type InferArraysCase20Flat<T> = Array<((T) extends (`#${infer Hex}`) ? (Hex /** unresolved */) : (never))>;

// Pattern from hybrid type decomposition
type InferArraysCase21Flat = Array<((({
  inputs: (((Array<((((string) & ({
    __brand: "id"
  }))) | (((number) & ({
    __brand: "count"
  }))))>) & ({
    expiration: Date
  })))[];
  outputs: (((Array<{
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
  }>) & ({
    timestamp: string
  })))[]
}) & ({
  payable: boolean
})) extends (infer U) ? (U /** unresolved */[]) : (never))>;

// Inspired by function array parameter inference
type InferArraysCase22Flat = Array<(((event: unknown) => void) extends (((...args: infer P) => void)) ? (P /** unresolved */) : (never))>;

// Similar to nested object value inference
type InferArraysCase23Flat<T> = Array<((T) extends ({
  nested: {
    value: infer V
  }
}) ? (V /** unresolved */) : (never))>;

// Pattern from recursive array depth detection
type InferArraysCase24Flat<T, D extends number = 0> = Array<((T) extends (Array<infer U>) ? (InferArraysCase24<U /** unresolved */, ((D) extends (number) ? (D) : (never))>) : (D))>;

// Inspired by complex type relationship inference
type InferArraysCase25Flat = Array<(({
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
}) extends (infer U) ? (((U /** unresolved */[]) extends (infer P) ? (P /** unresolved */[]) : (never))) : (never))>;


assert<
  Equals<
    InferArraysCase1<never>,
    InferArraysCase1Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase2<never>,
    InferArraysCase2Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase3<never>,
    InferArraysCase3Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase4<never>,
    InferArraysCase4Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase5<never>,
    InferArraysCase5Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase6<never>,
    InferArraysCase6Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase7<never>,
    InferArraysCase7Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase8<never>,
    InferArraysCase8Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase9<never>,
    InferArraysCase9Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase10<never>,
    InferArraysCase10Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase11<never>,
    InferArraysCase11Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase12<never>,
    InferArraysCase12Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase13<never>,
    InferArraysCase13Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase14<never>,
    InferArraysCase14Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase15,
    InferArraysCase15Flat
  >
>;
assert<
  Equals<
    InferArraysCase16<never>,
    InferArraysCase16Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase17<never>,
    InferArraysCase17Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase18<never>,
    InferArraysCase18Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase19<never>,
    InferArraysCase19Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase20<never>,
    InferArraysCase20Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase21,
    InferArraysCase21Flat
  >
>;
assert<
  Equals<
    InferArraysCase22,
    InferArraysCase22Flat
  >
>;
assert<
  Equals<
    InferArraysCase23<never>,
    InferArraysCase23Flat<never>
  >
>;
assert<
  Equals<
    InferArraysCase24<never, never>,
    InferArraysCase24Flat<never, never>
  >
>;
assert<
  Equals<
    InferArraysCase25,
    InferArraysCase25Flat
  >
>;
