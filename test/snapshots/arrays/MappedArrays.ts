import { assert, type Equals } from "tsafe";

import type {
  MappedArraysCase1,
  MappedArraysCase2,
  MappedArraysCase3,
  MappedArraysCase4,
  MappedArraysCase5,
  MappedArraysCase6,
  MappedArraysCase7,
  MappedArraysCase8,
  MappedArraysCase9,
  MappedArraysCase10,
  MappedArraysCase11,
  MappedArraysCase12,
  MappedArraysCase13,
  MappedArraysCase14,
  MappedArraysCase15,
  MappedArraysCase16,
  MappedArraysCase17,
  MappedArraysCase18,
  MappedArraysCase19,
  MappedArraysCase20,
  MappedArraysCase21,
  MappedArraysCase22,
  MappedArraysCase23,
  MappedArraysCase24,
  MappedArraysCase25,
} from "@/fixtures/arrays/MappedArrays.ts";

// Inspired by API response normalization
type MappedArraysCase1Flat<T> = { [K in keyof (T)]: (T)[K /** unresolved */][] };

// Similar to database schema transformations
type MappedArraysCase2Flat<T> = ReadonlyArray<{ readonly [K in keyof (T) as `col_${string}`]: (T)[K /** unresolved */] }>;

// Pattern from UI state management
type MappedArraysCase3Flat = Array<{ [K in keyof ({
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
})]-?: ({
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
})[K /** unresolved */] }>;

// Inspired by permission masks
// biome-ignore format: testing `+ readonly`
type MappedArraysCase4Flat = Array<{ +readonly [K in keyof (Omit<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }, "permissions">) as `can${Capitalize<K /** unresolved */>}`]: boolean }>;

// Similar to type-safe translations
type MappedArraysCase5Flat<T> = Array<{ [K in keyof (T) as `msg_${string}`]: (((T)[K /** unresolved */]) extends (string) ? (`${(T /** unresolved */)[K /** unresolved */]}_id`) : (never)) }>;

// Pattern from configuration validation
type MappedArraysCase6Flat = Array<{ [K in keyof (("success") | ("error"))]: (((("success") | ("error"))[K /** unresolved */]) extends (string) ? (string) : (number)) }>;

// Inspired by ORM relationships
type MappedArraysCase7Flat<T> = Array<{ -readonly [K in keyof (T)]: (((T)[K /** unresolved */]) extends (Array<infer U>) ? (U /** unresolved */) : (never)) }>;

// Similar to CSS-in-JS props
type MappedArraysCase8Flat = Array<{ +readonly [K in keyof ({
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
}) as `style$${K /** unresolved */}`]-?: string }>;

// Pattern from feature flag systems
// biome-ignore format: testing `]- ?`
type MappedArraysCase9Flat<T extends {
  id: string
}> = Array<{ +readonly [K in keyof (T) as (((T)[K /** unresolved */]) extends (boolean) ? (`flag_${string}`) : (never))]-?: (T)[K /** unresolved */] }>;

// Inspired by API versioning
type MappedArraysCase10Flat = Array<{ [K in keyof ({
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
})]: `${K /** unresolved */}_v1` }>;

// Similar to recursive schema flattening
type MappedArraysCase11Flat<T> = Array<{ [K in keyof (T)]: (((T)[K /** unresolved */]) extends (object) ? (Record<string, (T)[K /** unresolved */]>) : ((T)[K /** unresolved */])) }>;

// Pattern from validation error mapping
type MappedArraysCase12Flat = Array<{ [K in keyof (Omit<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }, "permissions">)]: ((K /** unresolved */) extends (string) ? (`${K /** unresolved */}Error`) : (never)) }>;

// Inspired by physics engine components
type MappedArraysCase13Flat = Array<{ [K in (("x") | ("y") | ("z"))]: number[] }>;

// Similar to type-safe path mapping
type MappedArraysCase14Flat<T> = Array<{ [K in keyof (T) as (((T)[K /** unresolved */]) extends ((() => void)) ? (never) : (K /** unresolved */))]: (T)[K /** unresolved */] }>;

// Pattern from AST transformations
type MappedArraysCase15Flat = Array<{ [K in keyof ((string) | (number) | (({
  a: number
}) | ({
  b: string
})))]: K /** unresolved */[] }>;

// Inspired by financial reporting
type MappedArraysCase16Flat<T> = Array<{ [K in keyof (T) as `total_${string}`]: (((T)[K /** unresolved */]) extends (number) ? (number) : (never)) }>;

// Similar to nested permissions
type MappedArraysCase17Flat = Array<{ [K in keyof ({
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
})]: ReadonlyArray<{
  access: (("read") | ("write"));
  scope: K /** unresolved */
}> }>;

// Pattern from date format conversions
type MappedArraysCase18Flat = Array<{ [K in (("iso") | ("unix") | ("utc"))]: ((K /** unresolved */) extends ("iso") ? (string) : (number)) }>;

// Inspired by API parameter wrapping
type MappedArraysCase19Flat<T> = Array<{ [K in keyof (T)]: {
  param: K /** unresolved */;
  value: (T)[K /** unresolved */]
} }>;

// Similar to enum transformations
type MappedArraysCase20Flat<T> = Array<{ [K in keyof (T)]: (((T)[K /** unresolved */]) extends (string) ? (`${Uppercase<"">}_${(T /** unresolved */)[K /** unresolved */]}`) : (never)) }>;

// Pattern from state machine transitions
type MappedArraysCase21Flat = Array<{ [K in (("enter") | ("exit"))]: `on${Capitalize<K /** unresolved */>}` }>;

// Inspired by error code mapping
type MappedArraysCase22Flat = Array<{ [K in keyof (Omit<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }, "permissions">)]: ((K /** unresolved */) extends (string) ? (`${K /** unresolved */}_${number}`) : (never)) }>;

// Similar to DOM property filtering
type MappedArraysCase23Flat = Array<{ [K in keyof (HTMLElement)]: ((K /** unresolved */) extends (`on${string}`) ? (never) : (K /** unresolved */)) }>;

// Pattern from recursive type expansion
type MappedArraysCase24Flat<T> = Array<{ [K in keyof (T)]: (((T)[K /** unresolved */]) extends ((infer U)[]) ? (U /** unresolved */[]) : ((T)[K /** unresolved */])) }>;

// Inspired by CSS property normalization
type MappedArraysCase25Flat = Array<{ [K in keyof (CSSStyleDeclaration /** unresolved */)]: ((K /** unresolved */) extends (string) ? (`${K /** unresolved */}-normalized`) : (never)) }>;


assert<
  Equals<
    MappedArraysCase1<never>,
    MappedArraysCase1Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase2<never>,
    MappedArraysCase2Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase3,
    MappedArraysCase3Flat
  >
>;
assert<
  Equals<
    MappedArraysCase4,
    MappedArraysCase4Flat
  >
>;
assert<
  Equals<
    MappedArraysCase5<never>,
    MappedArraysCase5Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase6,
    MappedArraysCase6Flat
  >
>;
assert<
  Equals<
    MappedArraysCase7<never>,
    MappedArraysCase7Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase8,
    MappedArraysCase8Flat
  >
>;
assert<
  Equals<
    MappedArraysCase9<never>,
    MappedArraysCase9Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase10,
    MappedArraysCase10Flat
  >
>;
assert<
  Equals<
    MappedArraysCase11<never>,
    MappedArraysCase11Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase12,
    MappedArraysCase12Flat
  >
>;
assert<
  Equals<
    MappedArraysCase13,
    MappedArraysCase13Flat
  >
>;
assert<
  Equals<
    MappedArraysCase14<never>,
    MappedArraysCase14Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase15,
    MappedArraysCase15Flat
  >
>;
assert<
  Equals<
    MappedArraysCase16<never>,
    MappedArraysCase16Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase17,
    MappedArraysCase17Flat
  >
>;
assert<
  Equals<
    MappedArraysCase18,
    MappedArraysCase18Flat
  >
>;
assert<
  Equals<
    MappedArraysCase19<never>,
    MappedArraysCase19Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase20<never>,
    MappedArraysCase20Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase21,
    MappedArraysCase21Flat
  >
>;
assert<
  Equals<
    MappedArraysCase22,
    MappedArraysCase22Flat
  >
>;
assert<
  Equals<
    MappedArraysCase23,
    MappedArraysCase23Flat
  >
>;
assert<
  Equals<
    MappedArraysCase24<never>,
    MappedArraysCase24Flat<never>
  >
>;
assert<
  Equals<
    MappedArraysCase25,
    MappedArraysCase25Flat
  >
>;
