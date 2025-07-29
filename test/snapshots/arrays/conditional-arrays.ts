import { assert, type Equals } from "tsafe";

import type {
  ConditionalArraysCase1,
  ConditionalArraysCase2,
  ConditionalArraysCase3,
  ConditionalArraysCase4,
  ConditionalArraysCase5,
  ConditionalArraysCase6,
  ConditionalArraysCase7,
  ConditionalArraysCase8,
  ConditionalArraysCase9,
  ConditionalArraysCase10,
  ConditionalArraysCase11,
  ConditionalArraysCase12,
  ConditionalArraysCase13,
  ConditionalArraysCase14,
  ConditionalArraysCase15,
  ConditionalArraysCase16,
  ConditionalArraysCase17,
  ConditionalArraysCase18,
  ConditionalArraysCase19,
  ConditionalArraysCase20,
  ConditionalArraysCase21,
  ConditionalArraysCase22,
  ConditionalArraysCase23,
  ConditionalArraysCase24,
  ConditionalArraysCase25,
} from "@/fixtures/arrays/conditional-arrays.ts";

// Inspired by API response handling
type ConditionalArraysCase1Flat<T> = Array<((T) extends (string) ? ({
  id: T
}) : ({
  code: number
}))>;

// Similar to user role-based permissions
type ConditionalArraysCase2Flat<T> = Array<((T) extends ("admin") ? ({
  allPermissions: true
}) : ({
  permissions: string[]
}))>;

// Pattern from form validation states
type ConditionalArraysCase3Flat<T> = Array<((T) extends ({
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
}) ? ({
  valid: true;
  data: T
}) : ({
  valid: false;
  errors: string[]
}))>;

// Inspired by numeric range checking
type ConditionalArraysCase4Flat<T> = Array<((T) extends (number) ? (((T) extends (100) ? (T) : (never))) : (never))>;

// Similar to type-safe filtering
type ConditionalArraysCase5Flat<T> = Array<((T) extends (({
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
})) ? (T) : (Omit<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }, "permissions">))>;

// Pattern from string format validation
type ConditionalArraysCase6Flat<T> = Array<((T) extends (`user_${string}`) ? (T) : (never))>;

// Inspired by recursive type checking
type ConditionalArraysCase7Flat<T> = Array<((T) extends (number[]) ? (ConditionalArraysCase7<(T)[number]>) : (T))>;

// Similar to promise unwrapping
type ConditionalArraysCase8Flat<T> = Array<((T) extends (Promise<infer U>) ? (U /** unresolved */) : (T))>;

// Pattern from CSS property validation
type ConditionalArraysCase9Flat<T> = Array<((T) extends ("color") ? (string) : (((T) extends ("width") ? (number) : (never))))>;

// Inspired by type narrowing
type ConditionalArraysCase10Flat<T> = Array<((T) extends ({
  type: infer U
}) ? (U /** unresolved */) : (never))>;

// Similar to tuple type extraction
type ConditionalArraysCase11Flat<T> = Array<((T) extends ([
  infer First,
  ...[]
]) ? (First /** unresolved */) : (never))>;

// Pattern from function parameter types
type ConditionalArraysCase12Flat<T> = Array<((T) extends (((...args: infer P) => never)) ? (P /** unresolved */) : (never))>;

// Inspired by DOM element typing
type ConditionalArraysCase13Flat<T> = Array<((T) extends (HTMLElement) ? ((T)["tagName"]) : (string))>;

// Similar to recursive JSON parsing
type ConditionalArraysCase14Flat<T> = Array<((T) extends (object) ? ({ [K in keyof (T)]: ConditionalArraysCase14<(T)[K /** unresolved */]> }) : (T))>;

// Pattern from authentication flows
type ConditionalArraysCase15Flat<T> = Array<((T) extends ({
  token: string
}) ? ("AuthenticatedUser") : ("GuestUser"))>;

// Inspired by mathematical operations
type ConditionalArraysCase16Flat<T> = Array<((T) extends (number) ? (((T) extends (0) ? (never) : (((T) extends (1) ? ("unit") : (number))))) : (string))>;

// Similar to state machine transitions
type ConditionalArraysCase17Flat<T> = Array<((T) extends ("pending") ? ({
  status: T
}) : (((T) extends ("completed") ? ({
  result: unknown
}) : (never))))>;

// Pattern from CSS media queries
type ConditionalArraysCase18Flat<T> = Array<((T) extends (`@${infer M}`) ? (M /** unresolved */) : (never))>;

// Inspired by type mapping
type ConditionalArraysCase19Flat<T> = Array<((T) extends (keyof ({
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
})) ? (({
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
})[T]) : (never))>;

// Similar to error chain handling
type ConditionalArraysCase20Flat<T> = Array<((T) extends (Error) ? ({
  message: (T)["message"]
}) : (T))>;

// Pattern from URL parsing
type ConditionalArraysCase21Flat<T> = Array<((T) extends (`${infer Proto}://${string}`) ? (Proto /** unresolved */) : (never))>;

// Inspired by recursive type limits
type ConditionalArraysCase22Flat<T> = Array<((T) extends (object) ? (((T) extends ({
  children: infer C
}) ? (ConditionalArraysCase22<C /** unresolved */>) : (never))) : (T))>;

// Similar to date format detection
type ConditionalArraysCase23Flat<T> = Array<((T) extends (`${number}-${number}-${number}`) ? (Date) : (string))>;

// Pattern from numeric type guards
type ConditionalArraysCase24Flat<T> = Array<((T) extends (number) ? (((number) extends (T) ? ("wide") : (((T) extends (1) ? ("exact") : ("narrow"))))) : ("non-number"))>;

// Inspired by complex type relationships
type ConditionalArraysCase25Flat<T> = Array<((T) extends ( {
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
  }) ? (Omit<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }, "permissions">) : (({
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
})))>;


assert<
  Equals<
    ConditionalArraysCase1<never>,
    ConditionalArraysCase1Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase2<never>,
    ConditionalArraysCase2Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase3<never>,
    ConditionalArraysCase3Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase4<never>,
    ConditionalArraysCase4Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase5<never>,
    ConditionalArraysCase5Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase6<never>,
    ConditionalArraysCase6Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase7<never>,
    ConditionalArraysCase7Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase8<never>,
    ConditionalArraysCase8Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase9<never>,
    ConditionalArraysCase9Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase10<never>,
    ConditionalArraysCase10Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase11<never>,
    ConditionalArraysCase11Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase12<never>,
    ConditionalArraysCase12Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase13<never>,
    ConditionalArraysCase13Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase14<never>,
    ConditionalArraysCase14Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase15<never>,
    ConditionalArraysCase15Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase16<never>,
    ConditionalArraysCase16Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase17<never>,
    ConditionalArraysCase17Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase18<never>,
    ConditionalArraysCase18Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase19<never>,
    ConditionalArraysCase19Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase20<never>,
    ConditionalArraysCase20Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase21<never>,
    ConditionalArraysCase21Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase22<never>,
    ConditionalArraysCase22Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase23<never>,
    ConditionalArraysCase23Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase24<never>,
    ConditionalArraysCase24Flat<never>
  >
>;
assert<
  Equals<
    ConditionalArraysCase25<never>,
    ConditionalArraysCase25Flat<never>
  >
>;
