import { assert, type Equals } from "tsafe";

import type {
  FunctionTypesCase1,
  FunctionTypesCase2,
  FunctionTypesCase3,
  FunctionTypesCase4,
  FunctionTypesCase5,
  FunctionTypesCase6,
  FunctionTypesCase7,
  FunctionTypesCase8,
  FunctionTypesCase9,
  FunctionTypesCase10,
  FunctionTypesCase11,
  FunctionTypesCase12,
  FunctionTypesCase13,
  FunctionTypesCase14,
  FunctionTypesCase15,
  FunctionTypesCase16,
  FunctionTypesCase17,
  FunctionTypesCase18,
  FunctionTypesCase19,
  FunctionTypesCase20,
  FunctionTypesCase21,
  FunctionTypesCase22,
  FunctionTypesCase23,
  FunctionTypesCase24,
  FunctionTypesCase25,
} from "@/fixtures/mixed/FunctionTypes.ts";

// Inspired by React event handler patterns
type FunctionTypesCase1Flat = ((event: unknown) => void);

// Similar to Redux middleware signature
type FunctionTypesCase2Flat = ((next: ((event: unknown) => void)) => ((action: Array<{
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
}>) => void));

// Pattern from Express.js route handlers
type FunctionTypesCase3Flat = ((req: {
  params: Array<(string & {
    __brand: "TransactionID"
  })>
}, res: {
  json: ((data: unknown) => void)
}) => Promise<void>);

// Inspired by validation libraries
type FunctionTypesCase4Flat = ((value: unknown) => value is ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}));

// Similar to observable subscriptions
type FunctionTypesCase5Flat = ((value: Array<{
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
}>) => (Array<(string & {
  __brand: "TransactionID"
})>)[number]);

// Pattern from financial calculators
type FunctionTypesCase6Flat = ((principal: number, rate: (((Array<{
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
}>)[number])["pricing"])["base"]) => number);

// Inspired by physics engines
type FunctionTypesCase7Flat = ((vectors: ([
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
});

// Similar to validation middleware chains
type FunctionTypesCase8Flat = ((input: unknown) => [
  valid: boolean,
  errors: string[]
]);

// Pattern from CI/CD pipeline stages
type FunctionTypesCase9Flat = ((context: {
  commit: string;
  artifacts: Array<{
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
}) => Promise<{
  success: boolean
}>);

// Inspired by game engine update loops
type FunctionTypesCase10Flat = ((deltaTime: number) => {
  positions: ([
    componentType: ("transform" | "render"),
    data: ((({
      a: number
    } | {
      b: string
    }))[])[number],
    ...dependencies: string[]
  ][] & {
    projection: ("WGS84" | "Mercator")
  })[];
  states: Array<(string & {
    __brand: "TransactionID"
  })>
});

// Similar to cryptographic operations
type FunctionTypesCase11Flat = ((data: Uint8Array, key: (Array<(string & {
  __brand: "TransactionID"
})>)[number]) => Promise<ArrayBuffer>);

// Pattern from data transformation pipelines
type FunctionTypesCase12Flat<T> = ((input: T) => T extends Array<{
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
}> ? Array<(string & {
  __brand: "TransactionID"
})> : T);

// Inspired by machine learning activation functions
type FunctionTypesCase13Flat = ((input: number) => (number & {
  __brand: "ActivationOutput"
}));

// Similar to database seed functions
type FunctionTypesCase14Flat = ((count: number) => Promise<Array<{
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
}>>);

// Pattern from animation interpolators
type FunctionTypesCase15Flat = ((progress: (number & {
  __range: [
    0,
    1
  ]
})) => ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}));

// Inspired by quantum computing simulators
type FunctionTypesCase16Flat = ((qubits: ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
})) => ReadonlyArray<number>);

// Similar to authorization middleware
type FunctionTypesCase17Flat = ((user: (Array<{
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
}>)[number], resource: Array<(string & {
  __brand: "TransactionID"
})>) => (boolean | never));

// Pattern from file system watchers
type FunctionTypesCase18Flat = ((event: ("add" | "change" | "delete"), path: (Array<(string & {
  __brand: "TransactionID"
})>)[number]) => void);

// Inspired by compilers/transpilers
type FunctionTypesCase19Flat = ((ast: Array<{
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
}>) => {
  code: string;
  warnings: string[]
});

// Similar to reactive programming operators
type FunctionTypesCase20Flat = (<T>(source: T /** unresolved */[]) => ((predicate: ((value: T /** unresolved */) => boolean)) => T /** unresolved */[]));

// Pattern from validation sanitizers
type FunctionTypesCase21Flat = (<T extends string>(input: T /** unresolved */) => (T /** unresolved */ & {
  __sanitized: true
}));

// Inspired by CAD software tools
type FunctionTypesCase22Flat = ((shapes: ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
})) => {
  area: number;
  volume: number
});

// Similar to audio processing nodes
type FunctionTypesCase23Flat = ((buffer: Float32Array) => Promise<Float32Array>);

// Pattern from IoT device handlers
type FunctionTypesCase24Flat = ((sensor: ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}), timestamp: number) => void);

// Inspired by genetic algorithms
type FunctionTypesCase25Flat = ((population: Array<{
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
}>, fitnessFn: ((input: number) => (number & {
  __brand: "ActivationOutput"
}))) => Array<{
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
}>);


assert<
  Equals<
    FunctionTypesCase1,
    FunctionTypesCase1Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase2,
    FunctionTypesCase2Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase3,
    FunctionTypesCase3Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase4,
    FunctionTypesCase4Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase5,
    FunctionTypesCase5Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase6,
    FunctionTypesCase6Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase7,
    FunctionTypesCase7Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase8,
    FunctionTypesCase8Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase9,
    FunctionTypesCase9Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase10,
    FunctionTypesCase10Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase11,
    FunctionTypesCase11Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase12<never>,
    FunctionTypesCase12Flat<never>
  >
>;
assert<
  Equals<
    FunctionTypesCase13,
    FunctionTypesCase13Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase14,
    FunctionTypesCase14Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase15,
    FunctionTypesCase15Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase16,
    FunctionTypesCase16Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase17,
    FunctionTypesCase17Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase18,
    FunctionTypesCase18Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase19,
    FunctionTypesCase19Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase20,
    FunctionTypesCase20Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase21,
    FunctionTypesCase21Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase22,
    FunctionTypesCase22Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase23,
    FunctionTypesCase23Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase24,
    FunctionTypesCase24Flat
  >
>;
assert<
  Equals<
    FunctionTypesCase25,
    FunctionTypesCase25Flat
  >
>;
