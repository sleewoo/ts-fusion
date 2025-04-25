import { assert, type Equals } from "tsafe";

import type {
  IndexedAccessKeyofTypesCase1,
  IndexedAccessKeyofTypesCase2,
  IndexedAccessKeyofTypesCase3,
  IndexedAccessKeyofTypesCase4,
  IndexedAccessKeyofTypesCase5,
  IndexedAccessKeyofTypesCase6,
  IndexedAccessKeyofTypesCase7,
  IndexedAccessKeyofTypesCase8,
  IndexedAccessKeyofTypesCase9,
  IndexedAccessKeyofTypesCase10,
  IndexedAccessKeyofTypesCase11,
  IndexedAccessKeyofTypesCase12,
  IndexedAccessKeyofTypesCase13,
  IndexedAccessKeyofTypesCase14,
  IndexedAccessKeyofTypesCase15,
  IndexedAccessKeyofTypesCase16,
  IndexedAccessKeyofTypesCase17,
  IndexedAccessKeyofTypesCase18,
  IndexedAccessKeyofTypesCase19,
  IndexedAccessKeyofTypesCase20,
  IndexedAccessKeyofTypesCase21,
  IndexedAccessKeyofTypesCase22,
  IndexedAccessKeyofTypesCase23,
  IndexedAccessKeyofTypesCase24,
  IndexedAccessKeyofTypesCase25,
} from "@/fixtures/mixed/IndexedAccessKeyofTypes.ts";

// Inspired by deep API response navigation
type IndexedAccessKeyofTypesCase1Flat = (((Array<{
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
}>)[number])["pricing"])["base"];

// Similar to database schema key extraction
type IndexedAccessKeyofTypesCase2Flat = keyof (Array<{
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
}>)[number];

// Pattern from validation framework paths
type IndexedAccessKeyofTypesCase3Flat = (((Array<{
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
}>)[number])["variants"])[number];

// Inspired by type-safe utility functions
type IndexedAccessKeyofTypesCase4Flat<T> = { [K in keyof T]: (T)[K /** unresolved */][] };

// Similar to CSS-in-JS property access
type IndexedAccessKeyofTypesCase5Flat = keyof CSSStyleDeclaration /** unresolved */;

// Pattern from authentication scope checks
type IndexedAccessKeyofTypesCase6Flat = ((([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}) & {
  readonly __brand: "GeoCoordinate"
}))["__brand"];

// Inspired by financial calculations
type IndexedAccessKeyofTypesCase7Flat = ((Array<(string & {
  __brand: "TransactionID"
})>)[number])["__brand"];

// Similar to recursive type navigation
type IndexedAccessKeyofTypesCase8Flat<T> = T extends Array<infer U> ? IndexedAccessKeyofTypesCase8<U /** unresolved */> : keyof T;

// Pattern from physics engine components
type IndexedAccessKeyofTypesCase9Flat = (((Array<((string & {
  __brand: "id"
}) | (number & {
  __brand: "count"
}))> & {
  expiration: Date
}))[])[number] extends infer T ? T /** unresolved */ extends Array<infer U> ? U /** unresolved */ : T /** unresolved */ : never;

// Inspired by type-safe API wrappers
type IndexedAccessKeyofTypesCase10Flat = (ReturnType<((vectors: ([
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
})>)[keyof ReturnType<((vectors: ([
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
})>];

// Similar to nested configuration access
type IndexedAccessKeyofTypesCase11Flat = ((({
  config: {
    ui: {
      theme: ("dark" | "light");
      components: Array<{
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
    }
  }
})["config"])["ui"])["theme"];

// Pattern from genetic data parsing
type IndexedAccessKeyofTypesCase12Flat<T> = T extends {
  genome: infer G
} ? G /** unresolved */ extends Array<infer S> ? S /** unresolved */ : never : never;

// Inspired by DOM element property maps
type IndexedAccessKeyofTypesCase13Flat = (HTMLElement)[keyof HTMLElement];

// Similar to recursive key collection
type IndexedAccessKeyofTypesCase14Flat<T> = T extends object ? ({ [K in keyof T]: (K /** unresolved */ | IndexedAccessKeyofTypesCase14<(T)[K /** unresolved */]>) })[keyof T] : never;

// Pattern from type-safe translations
type IndexedAccessKeyofTypesCase15Flat = (({
  translations: {
    home: {
      title: string
    };
    profile: {
      settings: string
    }
  }
})["translations"])[keyof ({
  translations: {
    home: {
      title: string
    };
    profile: {
      settings: string
    }
  }
})["translations"]];

// Inspired by quantum state properties
type IndexedAccessKeyofTypesCase16Flat = (({
  state: "|0>"
} | {
  state: "|1>"
} | {
  state: "+"
} | {
  state: "-"
}))["state"];

// Similar to error code lookups
type IndexedAccessKeyofTypesCase17Flat<T> = T extends {
  errors: infer E
} ? E /** unresolved */ extends Array<infer C> ? C /** unresolved */ : never : never;

// Pattern from nested permissions
type IndexedAccessKeyofTypesCase18Flat = keyof (({
  user: string
} & ({
  role: "admin";
  permissions: string[]
} | {
  role: "user";
  lastLogin: Date
})))["role"];

// Inspired to astronomy coordinate access
type IndexedAccessKeyofTypesCase19Flat<T> = T extends {
  coordinates: infer C
} ? C /** unresolved */ extends ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}) ? (C /** unresolved */)[number] : never : never;

// Similar to type-safe path parameters
type IndexedAccessKeyofTypesCase20Flat<T> = T extends `/${string}/${infer P}` ? P /** unresolved */ : never;

// Pattern from financial instrument metadata
type IndexedAccessKeyofTypesCase21Flat = (({
  type: "stock";
  symbol: string;
  exchange: ("NYSE" | "NASDAQ")
} | {
  type: "crypto";
  protocol: ("ERC20" | "BEP2")
}))["type"];

// Inspired by recursive UI components
type IndexedAccessKeyofTypesCase22Flat = (({
  children: (`(min-width: ${number}px)` | `(max-width: ${number}px)`)
} & ({
  variant: "primary"
} | {
  variant: "secondary";
  outlined: boolean
})))["variant"];

// Similar to network protocol inspection
type IndexedAccessKeyofTypesCase23Flat = (({
  protocol: "TCP";
  sequence: number
} | {
  protocol: "UDP";
  checksum: string
}))["protocol"];

// Pattern from authentication token claims
type IndexedAccessKeyofTypesCase24Flat<T> = T extends {
  claims: infer C
} ? keyof C /** unresolved */ : never;

// Inspired by machine learning features
type IndexedAccessKeyofTypesCase25Flat<T> = T extends {
  features: infer F
} ? F /** unresolved */ extends Array<infer V> ? V /** unresolved */ : never : never;


assert<
  Equals<
    IndexedAccessKeyofTypesCase1,
    IndexedAccessKeyofTypesCase1Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase2,
    IndexedAccessKeyofTypesCase2Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase3,
    IndexedAccessKeyofTypesCase3Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase4<never>,
    IndexedAccessKeyofTypesCase4Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase5,
    IndexedAccessKeyofTypesCase5Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase6,
    IndexedAccessKeyofTypesCase6Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase7,
    IndexedAccessKeyofTypesCase7Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase8<never>,
    IndexedAccessKeyofTypesCase8Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase9,
    IndexedAccessKeyofTypesCase9Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase10,
    IndexedAccessKeyofTypesCase10Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase11,
    IndexedAccessKeyofTypesCase11Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase12<never>,
    IndexedAccessKeyofTypesCase12Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase13,
    IndexedAccessKeyofTypesCase13Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase14<never>,
    IndexedAccessKeyofTypesCase14Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase15,
    IndexedAccessKeyofTypesCase15Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase16,
    IndexedAccessKeyofTypesCase16Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase17<never>,
    IndexedAccessKeyofTypesCase17Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase18,
    IndexedAccessKeyofTypesCase18Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase19<never>,
    IndexedAccessKeyofTypesCase19Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase20<never>,
    IndexedAccessKeyofTypesCase20Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase21,
    IndexedAccessKeyofTypesCase21Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase22,
    IndexedAccessKeyofTypesCase22Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase23,
    IndexedAccessKeyofTypesCase23Flat
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase24<never>,
    IndexedAccessKeyofTypesCase24Flat<never>
  >
>;
assert<
  Equals<
    IndexedAccessKeyofTypesCase25<never>,
    IndexedAccessKeyofTypesCase25Flat<never>
  >
>;
