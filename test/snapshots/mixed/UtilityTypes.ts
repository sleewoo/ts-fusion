import { assert, type Equals } from "tsafe";

import type {
  UtilityTypesCase1,
  UtilityTypesCase2,
  UtilityTypesCase3,
  UtilityTypesCase4,
  UtilityTypesCase5,
  UtilityTypesCase6,
  UtilityTypesCase7,
  UtilityTypesCase8,
  UtilityTypesCase9,
  UtilityTypesCase10,
  UtilityTypesCase11,
  UtilityTypesCase12,
  UtilityTypesCase13,
  UtilityTypesCase14,
  UtilityTypesCase15,
  UtilityTypesCase16,
  UtilityTypesCase17,
  UtilityTypesCase18,
  UtilityTypesCase19,
  UtilityTypesCase20,
  UtilityTypesCase21,
  UtilityTypesCase22,
  UtilityTypesCase23,
  UtilityTypesCase24,
  UtilityTypesCase25,
} from "@/fixtures/mixed/UtilityTypes.ts";

// Inspired by API partial updates
type UtilityTypesCase1Flat = Partial<(({
  subject: string[];
  action: string[];
  object: string[];
  conditions: {
    [k: string]: never
  }
})["subject"])[number]>;

// Similar to strict configuration requirements
type UtilityTypesCase2Flat = Required<(((req: {
  params: Array<(string & {
    __brand: "TransactionID"
  })>
}, res: {
  json: ((data: unknown) => void)
}) => Promise<void>))["arguments"]>;

// Pattern from immutable UI state
type UtilityTypesCase3Flat = Readonly<{
  user: {
    id: string;
    createdAt: Date;
    updatedAt?: Date
  };
  id: ((Omit<{
    id: string;
    name: string;
    email?: string;
    readonly createdAt: Date
  }, ("createdAt" | "updatedAt")> & {
    passwordHash: string;
    lastLogin?: Date
  }))["id"]
}>;

// Inspired by type-safe dictionaries
type UtilityTypesCase4Flat = Record<(99999999999[])[number], string>;

// Similar to form field selection
type UtilityTypesCase5Flat = Pick<(({
  header: string[];
  rows: Array<Record<string, string>>;
  errors: Array<{
    row: number;
    message: string
  }>
})["rows"])[number], ("id" | "variants")>;

// Pattern from secure data handling
type UtilityTypesCase6Flat = Omit<{
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date
}, "sensitiveData">;

// Inspired by error filtering
type UtilityTypesCase7Flat = Exclude<([
  `/users/${number}`,
  ...Array<`/posts/${string}`>
] | Error), Error>;

// Similar to valid user extraction
type UtilityTypesCase8Flat = Extract<(Array<((number | string))[][]>)[number], {
  valid: true
}>;

// Pattern from non-nullable API responses
type UtilityTypesCase9Flat = NonNullable<((Array<("success" | "error")>)[number] | null)>;

// Inspired by async handler returns
type UtilityTypesCase10Flat = ReturnType<((req: {
  params: Array<(string & {
    __brand: "TransactionID"
  })>
}, res: {
  json: ((data: unknown) => void)
}) => Promise<void>)>;

// Similar to constructor parameter validation
type UtilityTypesCase11Flat = Parameters<typeof Date>;

// Pattern from instance shaping
type UtilityTypesCase12Flat = InstanceType<typeof Date>;

// Inspired by promise unwrapping
type UtilityTypesCase13Flat = Awaited<Promise<Promise<{ [K in keyof {
  mappings: {
    properties: {
      [k: string]: {
        type: ("text" | "keyword" | "long" | "date");
        index?: boolean;
        analyzer?: string
      }
    }
  };
  settings: {
    numberOfShards: number;
    numberOfReplicas: number
  }
} as Uppercase<K /** unresolved */>]: ({
  mappings: {
    properties: {
      [k: string]: {
        type: ("text" | "keyword" | "long" | "date");
        index?: boolean;
        analyzer?: string
      }
    }
  };
  settings: {
    numberOfShards: number;
    numberOfReplicas: number
  }
})[K /** unresolved */] }>>>;

// Similar to uppercase key mapping
type UtilityTypesCase14Flat = { [K in keyof {
  mappings: {
    properties: {
      [k: string]: {
        type: ("text" | "keyword" | "long" | "date");
        index?: boolean;
        analyzer?: string
      }
    }
  };
  settings: {
    numberOfShards: number;
    numberOfReplicas: number
  }
} as Uppercase<K /** unresolved */>]: ({
  mappings: {
    properties: {
      [k: string]: {
        type: ("text" | "keyword" | "long" | "date");
        index?: boolean;
        analyzer?: string
      }
    }
  };
  settings: {
    numberOfShards: number;
    numberOfReplicas: number
  }
})[K /** unresolved */] };

// Pattern from required query parameters
type UtilityTypesCase15Flat = { [K in keyof (((req: {
  params: Array<(string & {
    __brand: "TransactionID"
  })>
}, res: {
  json: ((data: unknown) => void)
}) => Promise<void>))["arguments"]]-?: ((((req: {
  params: Array<(string & {
    __brand: "TransactionID"
  })>
}, res: {
  json: ((data: unknown) => void)
}) => Promise<void>))["arguments"])[K /** unresolved */] };

// Inspired by deep readonly state
type UtilityTypesCase16Flat = Readonly<{
  config: {
    type: ("postgres" | "mysql" | "sqlite");
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    ssl?: boolean
  }
}>;

// Similar to partial database updates
type UtilityTypesCase17Flat = Partial<(Array<{
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
}>)[number]>;

// Pattern from complete user profiles
type UtilityTypesCase18Flat = Required<(Array<{
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
}>)[number]>;

// Inspired by function property mapping
type UtilityTypesCase19Flat = Record<keyof ((req: {
  params: Array<(string & {
    __brand: "TransactionID"
  })>
}, res: {
  json: ((data: unknown) => void)
}) => Promise<void>), (() => void)>;

// Similar to numeric key filtering
type UtilityTypesCase20Flat = Exclude<keyof (Array<{
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
}>)[number], symbol>;

// Pattern from branded currency conversions
type UtilityTypesCase21Flat = (({
  id: string;
  save: (() => Promise<void>);
  remove: (() => Promise<void>);
  reload: (() => Promise<void>)
} & {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date
}) & Readonly<{
  __currency: "USD"
}>);

// Inspired by hybrid type utilities
type UtilityTypesCase22Flat = (Pick<(Array<{
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
}>)[number], "id"> & Omit<(Array<{
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
}>)[number], "pricing">);

// Similar to date transformations
type UtilityTypesCase23Flat = Record<keyof (Array<{
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
}>)[number], Date>;

// Pattern from union type mapping
type UtilityTypesCase24Flat = { [K in keyof (Array<{
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
}>)[number]]: (((Array<{
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
}>)[number])[K /** unresolved */] extends string ? K /** unresolved */ : never) };

// Inspired by recursive utility combinations
type UtilityTypesCase25Flat = Partial<Required<(Array<{
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


assert<
  Equals<
    UtilityTypesCase1,
    UtilityTypesCase1Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase2,
    UtilityTypesCase2Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase3,
    UtilityTypesCase3Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase4,
    UtilityTypesCase4Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase5,
    UtilityTypesCase5Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase6,
    UtilityTypesCase6Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase7,
    UtilityTypesCase7Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase8,
    UtilityTypesCase8Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase9,
    UtilityTypesCase9Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase10,
    UtilityTypesCase10Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase11,
    UtilityTypesCase11Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase12,
    UtilityTypesCase12Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase13,
    UtilityTypesCase13Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase14,
    UtilityTypesCase14Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase15,
    UtilityTypesCase15Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase16,
    UtilityTypesCase16Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase17,
    UtilityTypesCase17Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase18,
    UtilityTypesCase18Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase19,
    UtilityTypesCase19Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase20,
    UtilityTypesCase20Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase21,
    UtilityTypesCase21Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase22,
    UtilityTypesCase22Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase23,
    UtilityTypesCase23Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase24,
    UtilityTypesCase24Flat
  >
>;
assert<
  Equals<
    UtilityTypesCase25,
    UtilityTypesCase25Flat
  >
>;
