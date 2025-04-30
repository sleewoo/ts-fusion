import { assert, type Equals } from "tsafe";

import type {
  MappedTypesCase1,
  MappedTypesCase2,
  MappedTypesCase3,
  MappedTypesCase4,
  MappedTypesCase5,
  MappedTypesCase6,
  MappedTypesCase7,
  MappedTypesCase8,
  MappedTypesCase9,
  MappedTypesCase10,
  MappedTypesCase11,
  MappedTypesCase12,
  MappedTypesCase13,
  MappedTypesCase14,
  MappedTypesCase15,
  MappedTypesCase16,
  MappedTypesCase17,
  MappedTypesCase18,
  MappedTypesCase19,
  MappedTypesCase20,
  MappedTypesCase21,
  MappedTypesCase22,
  MappedTypesCase23,
  MappedTypesCase24,
  MappedTypesCase25,
} from "@/fixtures/mixed/MappedTypes.ts";

// Inspired by API response normalization
type MappedTypesCase1Flat<T> = { readonly [K in keyof T]: ((T)[K /** unresolved */] extends object ? MappedTypesCase1<(T)[K /** unresolved */]> : (T)[K /** unresolved */]) };

// Similar to UI theme configuration
type MappedTypesCase2Flat<T> = { [K in keyof T as `theme_${string}`]: ((T)[K /** unresolved */] extends string ? `var(--${string})` : never) };

// Pattern from ORM entity transformations
type MappedTypesCase3Flat<T> = { [K in keyof T as `$${string}`]: ((T)[K /** unresolved */] extends Date ? string : (T)[K /** unresolved */]) };

// Inspired by security permission masks
type MappedTypesCase4Flat<T> = { [K in keyof T]: ((T)[K /** unresolved */] extends boolean ? never : (T)[K /** unresolved */]) };

// Similar to CSS property normalization
type MappedTypesCase5Flat = { [K in keyof CSSStyleDeclaration /** unresolved */ as `normalized_${string}`]: (CSSStyleDeclaration /** unresolved */)[K /** unresolved */] };

// Pattern from type-safe translations
type MappedTypesCase6Flat<T> = { [K in keyof T as `msg_${string}`]: ((T)[K /** unresolved */] extends string ? `${string}_id` : never) };

// Inspired by database schema versioning
type MappedTypesCase7Flat<T> = { [K in keyof T as `${string}_v1`]: ((T)[K /** unresolved */] extends object ? MappedTypesCase7<(T)[K /** unresolved */]> : (T)[K /** unresolved */]) };

// Similar to observable state tracking
type MappedTypesCase8Flat<T> = { [K in keyof T as `observable_${string}`]: ((T)[K /** unresolved */] | ((vectors: ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
})[]) => {
  magnitude: number;
  direction: number
})) };

// Pattern from authentication scope mapping
type MappedTypesCase9Flat<T> = { [K in keyof T as `scope_${string}`]: ((T)[K /** unresolved */] extends string[] ? (`${string}:read` | `${string}:write`) : never) };

// Inspired by financial rounding rules
type MappedTypesCase10Flat<T> = { [K in keyof T]: ((T)[K /** unresolved */] extends number ? (number & {
  __precision: 2
}) : (T)[K /** unresolved */]) };

// Similar to recursive UI components
type MappedTypesCase11Flat<T> = { [K in keyof T]: ((T)[K /** unresolved */] extends ({
  success: true;
  data: Array<{
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
} | {
  success: false;
  error: string
}) ? Record<string, (T)[K /** unresolved */]> : (T)[K /** unresolved */]) };

// Pattern from physics engine components
type MappedTypesCase12Flat<T> = { [K in keyof T as `phys_${string}`]: ((T)[K /** unresolved */] extends ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}) ? ((T)[K /** unresolved */] & {
  mass: number
}) : never) };

// Inspired by type-safe protocol buffers
type MappedTypesCase13Flat<T> = { [K in keyof T]: ((T)[K /** unresolved */] extends number ? bigint : (T)[K /** unresolved */]) };

// Similar to API endpoint generation
type MappedTypesCase14Flat<T> = { [K in keyof T as `/api/${string}`]: ((T)[K /** unresolved */] extends object ? MappedTypesCase14<(T)[K /** unresolved */]> : never) };

// Pattern from currency conversions
type MappedTypesCase15Flat<T> = { [K in keyof T as `${string}_USD`]: ((T)[K /** unresolved */] extends (Array<(string & {
  __brand: "TransactionID"
})>)[number] ? number : never) };

// Inspired by recursive validation
type MappedTypesCase16Flat<T> = { [K in keyof T]-?: ((T)[K /** unresolved */] extends object ? MappedTypesCase16<(T)[K /** unresolved */]> : (T)[K /** unresolved */]) };

// Similar to DOM event mapping
type MappedTypesCase17Flat<T> = { [K in keyof T as `on${Capitalize<string>}`]: ((event: Event) => void) };

// Pattern from feature flag systems
type MappedTypesCase18Flat<T> = { [K in keyof T as `flag_${string}`]: ((T)[K /** unresolved */] extends boolean ? boolean : never) };

// Inspired by astronomy data transforms
type MappedTypesCase19Flat<T> = { [K in keyof T]: ((T)[K /** unresolved */] extends number ? ((T)[K /** unresolved */] & {
  __unit: "lightyear"
}) : (T)[K /** unresolved */]) };

// Similar to quantum state operations
type MappedTypesCase20Flat<T> = { [K in keyof T as `qubit_${string}`]: ((T)[K /** unresolved */] extends number ? `|${(T /** unresolved */)[K /** unresolved */]}⟩` : never) };

// Pattern from genetic sequence tagging
type MappedTypesCase21Flat<T> = { [K in keyof T as `tag_${string}`]: ((T)[K /** unresolved */] extends string ? `seq_${(T /** unresolved */)[K /** unresolved */]}` : never) };

// Inspired by type-safe localization
type MappedTypesCase22Flat<T> = { [K in keyof T as `${Uppercase<string>}_KEY`]: ((T)[K /** unresolved */] extends string ? `l10n.${(T /** unresolved */)[K /** unresolved */]}` : never) };

// Similar to recursive metadata
type MappedTypesCase23Flat<T> = { [K in keyof T]: ((T)[K /** unresolved */] extends object ? (MappedTypesCase23<(T)[K /** unresolved */]> & {
  _meta: string
}) : (T)[K /** unresolved */]) };

// Pattern from blockchain address formats
type MappedTypesCase24Flat<T> = { [K in keyof T as `${string}_address`]: ((T)[K /** unresolved */] extends string ? `0x${string}` : never) };

// Inspired by mathematical operator overloading
type MappedTypesCase25Flat<T> = { [K in keyof T as `operator_${string}`]: ((T)[K /** unresolved */] extends number ? ((a: (T)[K /** unresolved */], b: (T)[K /** unresolved */]) => (T)[K /** unresolved */]) : never) };


assert<
  Equals<
    MappedTypesCase1<never>,
    MappedTypesCase1Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase2<never>,
    MappedTypesCase2Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase3<never>,
    MappedTypesCase3Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase4<never>,
    MappedTypesCase4Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase5,
    MappedTypesCase5Flat
  >
>;
assert<
  Equals<
    MappedTypesCase6<never>,
    MappedTypesCase6Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase7<never>,
    MappedTypesCase7Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase8<never>,
    MappedTypesCase8Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase9<never>,
    MappedTypesCase9Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase10<never>,
    MappedTypesCase10Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase11<never>,
    MappedTypesCase11Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase12<never>,
    MappedTypesCase12Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase13<never>,
    MappedTypesCase13Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase14<never>,
    MappedTypesCase14Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase15<never>,
    MappedTypesCase15Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase16<never>,
    MappedTypesCase16Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase17<never>,
    MappedTypesCase17Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase18<never>,
    MappedTypesCase18Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase19<never>,
    MappedTypesCase19Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase20<never>,
    MappedTypesCase20Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase21<never>,
    MappedTypesCase21Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase22<never>,
    MappedTypesCase22Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase23<never>,
    MappedTypesCase23Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase24<never>,
    MappedTypesCase24Flat<never>
  >
>;
assert<
  Equals<
    MappedTypesCase25<never>,
    MappedTypesCase25Flat<never>
  >
>;
