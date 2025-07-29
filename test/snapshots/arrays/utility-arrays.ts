import { assert, type Equals } from "tsafe";

import type {
  UtilityArraysCase1,
  UtilityArraysCase2,
  UtilityArraysCase3,
  UtilityArraysCase4,
  UtilityArraysCase5,
  UtilityArraysCase6,
  UtilityArraysCase7,
  UtilityArraysCase8,
  UtilityArraysCase9,
  UtilityArraysCase10,
  UtilityArraysCase11,
  UtilityArraysCase12,
  UtilityArraysCase13,
  UtilityArraysCase14,
  UtilityArraysCase15,
  UtilityArraysCase16,
  UtilityArraysCase17,
  UtilityArraysCase18,
  UtilityArraysCase19,
  UtilityArraysCase20,
  UtilityArraysCase21,
  UtilityArraysCase22,
  UtilityArraysCase23,
  UtilityArraysCase24,
  UtilityArraysCase25,
} from "@/fixtures/arrays/utility-arrays.ts";

// Inspired by partial form submissions
type UtilityArraysCase1Flat = Array<Partial<{
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
}>>;

// Similar to required API params
type UtilityArraysCase2Flat = Array<Required<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }>>;

// Pattern from read-only configuration
type UtilityArraysCase3Flat = ReadonlyArray<Readonly<(Array<{
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
})>>;

// Inspired by user profile pickers
type UtilityArraysCase4Flat = Array<Pick<{
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
}, (("id") | ("pricing"))>>;

// Similar to secure data omissions
type UtilityArraysCase5Flat = Array<Omit<{
    readonly id: string;
    permissions: readonly [
      string,
      ...((({
        a: number
      }) | ({
        b: string
      })))[]
    ]
  }, "permissions">>;

// Pattern from error record keeping
type UtilityArraysCase6Flat = Array<((Record<(("code") | ("message")), string>) & ({
  timestamp: number
}))>;

// Inspired by filtered null values
type UtilityArraysCase7Flat = Array<NonNullable<  readonly [
        string,
        ...((({
          a: number
        }) | ({
          b: string
        })))[]
      ]>>;

// Similar to API response extraction
type UtilityArraysCase8Flat = Array<Extract<(Array<{
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
}), {
  timestamp: number
}>>;

// Pattern from excluded deprecated fields
type UtilityArraysCase9Flat = Array<Exclude<keyof ({
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
}), "variants">>;

// Inspired by function return logging
type UtilityArraysCase10Flat = Array<ReturnType<((Array<{
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
}))["toString"]>>;

// Similar to constructor parameter capture
type UtilityArraysCase11Flat = Array<ConstructorParameters<typeof Date>>;

// Pattern from promise resolution tracking
type UtilityArraysCase12Flat = Array<Awaited<Promise<Array<{
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
}>>>>;

// Inspired by uppercase enum values
type UtilityArraysCase13Flat = Array<Uppercase< "ProductID">>;

// Similar to lowercase route keys
type UtilityArraysCase14Flat = Array<Lowercase< string>>;

// Pattern from capitalized type names
type UtilityArraysCase15Flat = Array<Capitalize< string>>;

// Inspired by uncapitalized headers
type UtilityArraysCase16Flat = Array<Uncapitalize<Uppercase< "ProductID">>>;

// Similar to parameter type inspection
type UtilityArraysCase17Flat = Array<Parameters<((Array<{
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
}))["toString"]>>;

// Pattern from instance type collections
type UtilityArraysCase18Flat = Array<InstanceType<typeof Date>>;

// Inspired by nested partial updates
type UtilityArraysCase19Flat = Array<Partial<Record<keyof ({
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
}), ReadonlyArray<string>>>>;

// Similar to conditional type filtering
type UtilityArraysCase20Flat<T> = Array<((T) extends (string) ? (`${T /** unresolved */}_id`) : (never))>;

// Pattern from mapped type modifiers
type UtilityArraysCase21Flat = Array<{ -readonly [K in keyof ({
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
})]: ({
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

// Inspired by template literal types
type UtilityArraysCase22Flat = Array<`user_${("success") | ("error")}`>;

// Similar to recursive partials
type UtilityArraysCase23Flat = Array<Partial<Partial<Record<keyof ({
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
}), ReadonlyArray<string>>>>>;

// Pattern from branded primitives
type UtilityArraysCase24Flat = Array<(( string) & ({
  __scope: "global"
}))>;

// Inspired by type predicate arrays
type UtilityArraysCase25Flat = Array<((value: unknown) => value is {
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
})>;


assert<
  Equals<
    UtilityArraysCase1,
    UtilityArraysCase1Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase2,
    UtilityArraysCase2Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase3,
    UtilityArraysCase3Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase4,
    UtilityArraysCase4Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase5,
    UtilityArraysCase5Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase6,
    UtilityArraysCase6Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase7,
    UtilityArraysCase7Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase8,
    UtilityArraysCase8Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase9,
    UtilityArraysCase9Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase10,
    UtilityArraysCase10Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase11,
    UtilityArraysCase11Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase12,
    UtilityArraysCase12Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase13,
    UtilityArraysCase13Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase14,
    UtilityArraysCase14Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase15,
    UtilityArraysCase15Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase16,
    UtilityArraysCase16Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase17,
    UtilityArraysCase17Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase18,
    UtilityArraysCase18Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase19,
    UtilityArraysCase19Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase20<never>,
    UtilityArraysCase20Flat<never>
  >
>;
assert<
  Equals<
    UtilityArraysCase21,
    UtilityArraysCase21Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase22,
    UtilityArraysCase22Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase23,
    UtilityArraysCase23Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase24,
    UtilityArraysCase24Flat
  >
>;
assert<
  Equals<
    UtilityArraysCase25,
    UtilityArraysCase25Flat
  >
>;
