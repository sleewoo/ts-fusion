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
} from "@/fixtures/arrays/UtilityArrays.ts";

// Inspired by partial form submissions
type UtilityArraysCase1Flat = Array<Partial<(Array<{
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
}>)[number]>>;

// Similar to required API params
type UtilityArraysCase2Flat = Array<Required<((Readonly<{
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
}>)["users"])[number]>>;

// Pattern from read-only configuration
type UtilityArraysCase3Flat = ReadonlyArray<Readonly<(((Array<{
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
}> & {
  timestamp: string
}))[])[number]>>;

// Inspired by user profile pickers
type UtilityArraysCase4Flat = Array<Pick<(Array<{
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
}>)[number], ("id" | "pricing")>>;

// Similar to secure data omissions
type UtilityArraysCase5Flat = Array<Omit<((Readonly<{
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
}>)["users"])[number], "permissions">>;

// Pattern from error record keeping
type UtilityArraysCase6Flat = Array<(Record<("code" | "message"), string> & {
  timestamp: number
})>;

// Inspired by filtered null values
type UtilityArraysCase7Flat = Array<NonNullable<((Array<{
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
}>)[number])["variants"]>>;

// Similar to API response extraction
type UtilityArraysCase8Flat = Array<Extract<(((Array<{
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
}> & {
  timestamp: string
}))[])[number], {
  timestamp: number
}>>;

// Pattern from excluded deprecated fields
type UtilityArraysCase9Flat = Array<Exclude<keyof (Array<{
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
}>)[number], "variants">>;

// Inspired by function return logging
type UtilityArraysCase10Flat = Array<ReturnType<((((Array<{
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
}> & {
  timestamp: string
}))[])[number])["toString"]>>;

// Similar to constructor parameter capture
type UtilityArraysCase11Flat = Array<ConstructorParameters<typeof Date>>;

// Pattern from promise resolution tracking
type UtilityArraysCase12Flat = Array<Awaited<Promise<Array<{
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
}>>>>;

// Inspired by uppercase enum values
type UtilityArraysCase13Flat = Array<Uppercase<(((Array<{
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
}>)[number])["id"])["__brand"]>>;

// Similar to lowercase route keys
type UtilityArraysCase14Flat = Array<Lowercase<((((Array<{
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
}> & {
  timestamp: string
}))[])[number])["timestamp"]>>;

// Pattern from capitalized type names
type UtilityArraysCase15Flat = Array<Capitalize<(((Readonly<{
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
}>)["users"])[number])["id"]>>;

// Inspired by uncapitalized headers
type UtilityArraysCase16Flat = Array<Uncapitalize<(Array<Uppercase<(((Array<{
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
}>)[number])["id"])["__brand"]>>)[number]>>;

// Similar to parameter type inspection
type UtilityArraysCase17Flat = Array<Parameters<((((Array<{
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
}> & {
  timestamp: string
}))[])[number])["toString"]>>;

// Pattern from instance type collections
type UtilityArraysCase18Flat = Array<InstanceType<typeof Date>>;

// Inspired by nested partial updates
type UtilityArraysCase19Flat = Array<Partial<Record<keyof (Array<{
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
}>)[number], ReadonlyArray<string>>>>;

// Similar to conditional type filtering
type UtilityArraysCase20Flat<T> = Array<(T extends string ? `${T /** unresolved */}_id` : never)>;

// Pattern from mapped type modifiers
type UtilityArraysCase21Flat = Array<{ -readonly [K in keyof (Array<{
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
}>)[number]]: ((Array<{
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
}>)[number])[K /** unresolved */] }>;

// Inspired by template literal types
type UtilityArraysCase22Flat = Array<`user_${(Array<("success" | "error")>)[number]}`>;

// Similar to recursive partials
type UtilityArraysCase23Flat = Array<Partial<(Array<Partial<Record<keyof (Array<{
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
}>)[number], ReadonlyArray<string>>>>)[number]>>;

// Pattern from branded primitives
type UtilityArraysCase24Flat = Array<((((Readonly<{
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
}>)["users"])[number])["id"] & {
  __scope: "global"
})>;

// Inspired by type predicate arrays
type UtilityArraysCase25Flat = Array<((value: unknown) => value is (Array<{
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
}>)[number])>;


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
