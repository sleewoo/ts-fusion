import { assert, type Equals } from "tsafe";

import type {
  RecursiveTypesCase1,
  RecursiveTypesCase2,
  RecursiveTypesCase3,
  RecursiveTypesCase4,
  RecursiveTypesCase5,
  RecursiveTypesCase6,
  RecursiveTypesCase7,
  RecursiveTypesCase8,
  RecursiveTypesCase9,
  RecursiveTypesCase10,
  RecursiveTypesCase11,
  RecursiveTypesCase12,
  RecursiveTypesCase13,
  RecursiveTypesCase14,
  RecursiveTypesCase15,
  RecursiveTypesCase16,
  RecursiveTypesCase17,
  RecursiveTypesCase18,
  RecursiveTypesCase19,
  RecursiveTypesCase20,
  RecursiveTypesCase21,
  RecursiveTypesCase22,
  RecursiveTypesCase23,
  RecursiveTypesCase24,
  RecursiveTypesCase25,
} from "@/fixtures/mixed/RecursiveTypes.ts";

// Inspired by nested comment threads
type RecursiveTypesCase1Flat = {
  comment: string;
  replies: RecursiveTypesCase1[]
};

// Similar to filesystem directory structures
type RecursiveTypesCase2Flat = (({
  type: "file";
  name: string
}) | ({
  type: "directory";
  contents: RecursiveTypesCase2[]
}));

// Pattern from parser AST nodes
type RecursiveTypesCase3Flat = {
  type: string;
  children: RecursiveTypesCase3[];
  position: (([
    componentType: (("transform") | ("render")),
    data: ({
      a: number
    }) | ({
      b: string
    }),
    ...dependencies: string[]
  ][]) & ({
    projection: (("WGS84") | ("Mercator"))
  }))
};

// Inspired by UI component hierarchies
type RecursiveTypesCase4Flat<T> = ((T) | ({
  component: string;
  children: RecursiveTypesCase4<T>[]
}));

// Similar to promise chains
type RecursiveTypesCase5Flat = Promise<((RecursiveTypesCase5) | (Array<{
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
}>))>;

// Pattern from financial transaction trees
type RecursiveTypesCase6Flat = {
  amount: number;
  subTransactions: RecursiveTypesCase6[];
  currency: (string) & ({
    __brand: "TransactionID"
  })
};

// Inspired by physics engine transforms
type RecursiveTypesCase7Flat = {
  position: (([
    componentType: (("transform") | ("render")),
    data: ({
      a: number
    }) | ({
      b: string
    }),
    ...dependencies: string[]
  ][]) & ({
    projection: (("WGS84") | ("Mercator"))
  }));
  children: RecursiveTypesCase7[]
};

// Similar to recursive validation rules
type RecursiveTypesCase8Flat<T> = ((T) extends (object) ? ({ [K in keyof (T)]: RecursiveTypesCase8<(T)[K /** unresolved */]> }) : (T));

// Pattern from type-safe state machines
type RecursiveTypesCase9Flat = (({
  state: "idle"
}) | ({
  state: "active";
  prev: RecursiveTypesCase9
}) | ({
  state: "error";
  recovery: (() => RecursiveTypesCase9)
}));

// Inspired by genomic data structures
type RecursiveTypesCase10Flat = {
  sequence: string;
  variations: RecursiveTypesCase10[];
  position: number
};

// Similar to recursive API pagination
type RecursiveTypesCase11Flat<T> = ((T[]) | ({
  next: RecursiveTypesCase11<T>;
  results: T[]
}));

// Pattern from CSS rule nesting
type RecursiveTypesCase12Flat = {
  selector: string;
  rules: (((RecursiveTypesCase12) | (((vectors: (([
    componentType: (("transform") | ("render")),
    data: ({
      a: number
    }) | ({
      b: string
    }),
    ...dependencies: string[]
  ][]) & ({
    projection: (("WGS84") | ("Mercator"))
  }))[]) => {
    magnitude: number;
    direction: number
  }))))[]
};

// Inspired by mathematical expressions
type RecursiveTypesCase13Flat = ((number) | ({
  op: (("+") | ("×"));
  left: RecursiveTypesCase13;
  right: RecursiveTypesCase13
}));

// Similar to recursive permissions
type RecursiveTypesCase14Flat = {
  access: string;
  inheritedFrom?: RecursiveTypesCase14;
  children: RecursiveTypesCase14[]
};

// Pattern from type-safe reducers
type RecursiveTypesCase15Flat<T> = ((state: T, action: RecursiveTypesCase15<T>) => T);

// Inspired by 3D scene graphs
type RecursiveTypesCase16Flat = {
  transform: (([
    componentType: (("transform") | ("render")),
    data: ({
      a: number
    }) | ({
      b: string
    }),
    ...dependencies: string[]
  ][]) & ({
    projection: (("WGS84") | ("Mercator"))
  }));
  meshes: Array<{
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
  }>;
  children: RecursiveTypesCase16[]
};

// Similar to recursive product categories
type RecursiveTypesCase17Flat = {
  name: string;
  subcategories: RecursiveTypesCase17[];
  products: Array<{
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
  }>
};

// Pattern from authentication chains
type RecursiveTypesCase18Flat = {
  user: (string) & ({
    __brand: "TransactionID"
  });
  signedBy?: RecursiveTypesCase18;
  permissions: string[]
};

// Inspired by blockchain merkle trees
type RecursiveTypesCase19Flat = ((string) | ([
  RecursiveTypesCase19,
  RecursiveTypesCase19
]));

// Similar to recursive type predicates
type RecursiveTypesCase20Flat<T> = ((T) extends (object) ? ({ [K in keyof (T)]: RecursiveTypesCase20<(T)[K /** unresolved */]> }) : (((value: unknown) => value is T)));

// Pattern from file format parsing
type RecursiveTypesCase21Flat = {
  header: Uint8Array;
  chunks: RecursiveTypesCase21[];
  checksum: (string) & ({
    __brand: "TransactionID"
  })
};

// Inspired by quantum circuit patterns
type RecursiveTypesCase22Flat = {
  gate: string;
  targets: number[];
  children: RecursiveTypesCase22[]
};

// Similar to recursive UI animations
type RecursiveTypesCase23Flat = {
  duration: number;
  keyframes: RecursiveTypesCase23[];
  easing: ((vectors: (([
    componentType: (("transform") | ("render")),
    data: ({
      a: number
    }) | ({
      b: string
    }),
    ...dependencies: string[]
  ][]) & ({
    projection: (("WGS84") | ("Mercator"))
  }))[]) => {
    magnitude: number;
    direction: number
  })
};

// Pattern from type-safe builders
type RecursiveTypesCase24Flat<T> = {
  value: T;
  then: (<U>(fn: ((input: T) => RecursiveTypesCase24<U /** unresolved */>)) => RecursiveTypesCase24<U /** unresolved */>)
};

// Inspired by astronomy catalog hierarchies
type RecursiveTypesCase25Flat = {
  name: string;
  children: RecursiveTypesCase25[];
  coordinates: (([
    componentType: (("transform") | ("render")),
    data: ({
      a: number
    }) | ({
      b: string
    }),
    ...dependencies: string[]
  ][]) & ({
    projection: (("WGS84") | ("Mercator"))
  }));
  magnitude: number
};


assert<
  Equals<
    RecursiveTypesCase1,
    RecursiveTypesCase1Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase2,
    RecursiveTypesCase2Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase3,
    RecursiveTypesCase3Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase4<never>,
    RecursiveTypesCase4Flat<never>
  >
>;
assert<
  Equals<
    RecursiveTypesCase5,
    RecursiveTypesCase5Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase6,
    RecursiveTypesCase6Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase7,
    RecursiveTypesCase7Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase8<never>,
    RecursiveTypesCase8Flat<never>
  >
>;
assert<
  Equals<
    RecursiveTypesCase9,
    RecursiveTypesCase9Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase10,
    RecursiveTypesCase10Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase11<never>,
    RecursiveTypesCase11Flat<never>
  >
>;
assert<
  Equals<
    RecursiveTypesCase12,
    RecursiveTypesCase12Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase13,
    RecursiveTypesCase13Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase14,
    RecursiveTypesCase14Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase15<never>,
    RecursiveTypesCase15Flat<never>
  >
>;
assert<
  Equals<
    RecursiveTypesCase16,
    RecursiveTypesCase16Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase17,
    RecursiveTypesCase17Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase18,
    RecursiveTypesCase18Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase19,
    RecursiveTypesCase19Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase20<never>,
    RecursiveTypesCase20Flat<never>
  >
>;
assert<
  Equals<
    RecursiveTypesCase21,
    RecursiveTypesCase21Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase22,
    RecursiveTypesCase22Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase23,
    RecursiveTypesCase23Flat
  >
>;
assert<
  Equals<
    RecursiveTypesCase24<never>,
    RecursiveTypesCase24Flat<never>
  >
>;
assert<
  Equals<
    RecursiveTypesCase25,
    RecursiveTypesCase25Flat
  >
>;
