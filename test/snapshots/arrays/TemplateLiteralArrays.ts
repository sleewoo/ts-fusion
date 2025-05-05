import { assert, type Equals } from "tsafe";

import type {
  TemplateLiteralArraysCase1,
  TemplateLiteralArraysCase2,
  TemplateLiteralArraysCase3,
  TemplateLiteralArraysCase4,
  TemplateLiteralArraysCase5,
  TemplateLiteralArraysCase6,
  TemplateLiteralArraysCase7,
  TemplateLiteralArraysCase8,
  TemplateLiteralArraysCase9,
  TemplateLiteralArraysCase10,
  TemplateLiteralArraysCase11,
  TemplateLiteralArraysCase12,
  TemplateLiteralArraysCase13,
  TemplateLiteralArraysCase14,
  TemplateLiteralArraysCase15,
  TemplateLiteralArraysCase16,
  TemplateLiteralArraysCase17,
  TemplateLiteralArraysCase18,
  TemplateLiteralArraysCase19,
  TemplateLiteralArraysCase20,
  TemplateLiteralArraysCase21,
  TemplateLiteralArraysCase22,
  TemplateLiteralArraysCase23,
  TemplateLiteralArraysCase24,
  TemplateLiteralArraysCase25,
} from "@/fixtures/arrays/TemplateLiteralArrays.ts";

// Inspired by REST API endpoint patterns
type TemplateLiteralArraysCase1Flat = Array<`/api/v${number}/${string}`>;

// Similar to localization key structures
type TemplateLiteralArraysCase2Flat = Array<`i18n.${(("home") | ("profile"))}.${string}`>;

// Pattern from CSS utility class names
type TemplateLiteralArraysCase3Flat = Array<`text-${(("left") | ("center") | ("right"))}-${(("sm") | ("md") | ("lg"))}`>;

// Inspired by unique resource identifiers
type TemplateLiteralArraysCase4Flat = Array<`${`img_${(("jpg") | ("png"))}`}_${number}`>;

// Similar to timestamp formats
type TemplateLiteralArraysCase5Flat = Array<`${number}-${number}-${number}T${number}:${number}:${number}Z`>;

// Pattern from file system paths
type TemplateLiteralArraysCase6Flat = Array<`/${string}/${string}.${(("ts") | ("js") | ("json"))}`>;

// Inspired by error code conventions
type TemplateLiteralArraysCase7Flat = Array<`ERR_${number}_${Uppercase<string>}`>;

// Similar to semantic version ranges
type TemplateLiteralArraysCase8Flat = Array<((`^${number}.${number}.${number}`) | (`~${number}.${number}.${number}`))>;

// Pattern from log message formats
type TemplateLiteralArraysCase9Flat = Array<`[${(("DEBUG") | ("INFO") | ("ERROR"))}] ${string}`>;

// Inspired by routing patterns
type TemplateLiteralArraysCase10Flat = Array<`/users/${number}/posts/${string}`>;

// Similar to currency formatting
type TemplateLiteralArraysCase11Flat = Array<`${(("USD") | ("EUR"))} ${number}.${number}`>;

// Pattern from date localization
type TemplateLiteralArraysCase12Flat = Array<((`${number}/${number}/${number}`) | (`${number}-${number}-${number}`))>;

// Inspired by email validation patterns
type TemplateLiteralArraysCase13Flat = Array<`${string}@${string}.${(("com") | ("org") | ("net"))}`>;

// Similar to HTML data attributes
type TemplateLiteralArraysCase14Flat = Array<`data-${(("test") | ("qa"))}-${string}`>;

// Pattern from environment variables
type TemplateLiteralArraysCase15Flat = Array<`CONFIG_${Uppercase<keyof ({
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
})>}`>;

// Inspired by permission strings
type TemplateLiteralArraysCase16Flat = Array<`perm:${string}:${(("read") | ("write") | ("execute"))}`>;

// Similar to query parameters
type TemplateLiteralArraysCase17Flat = Array<`?${string}=${((string) | (number))}`>;

// Pattern from media queries
type TemplateLiteralArraysCase18Flat = Array<`@media (${(("min") | ("max"))}-width: ${number}px)`>;

// Inspired by storage keys
type TemplateLiteralArraysCase19Flat = Array<`ls_${Lowercase<("success") | ("error")>}`>;

// Similar to authentication headers
type TemplateLiteralArraysCase20Flat = Array<`Bearer ${string}`>;

// Pattern from GraphQL operations
type TemplateLiteralArraysCase21Flat = Array<`query ${string} { ${string} }`>;

// Inspired by regex patterns
type TemplateLiteralArraysCase22Flat = Array<`/${string}/gi${"m"}${"s"}${"i"}`>;

// Similar to payment processors
type TemplateLiteralArraysCase23Flat = Array<`card_${number}-${number}-${number}-${number}`>;

// Pattern from color formats
type TemplateLiteralArraysCase24Flat = Array<((`#${string}`) | (`rgb(${number}, ${number}, ${number})`))>;

// Inspired by XML namespaces
type TemplateLiteralArraysCase25Flat = Array<`<${keyof ({
  breakpoints: (([
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
  variants: (((Array<{
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
})}>${string}</${keyof ({
  breakpoints: (([
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
  variants: (((Array<{
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
})}>`>;


assert<
  Equals<
    TemplateLiteralArraysCase1,
    TemplateLiteralArraysCase1Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase2,
    TemplateLiteralArraysCase2Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase3,
    TemplateLiteralArraysCase3Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase4,
    TemplateLiteralArraysCase4Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase5,
    TemplateLiteralArraysCase5Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase6,
    TemplateLiteralArraysCase6Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase7,
    TemplateLiteralArraysCase7Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase8,
    TemplateLiteralArraysCase8Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase9,
    TemplateLiteralArraysCase9Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase10,
    TemplateLiteralArraysCase10Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase11,
    TemplateLiteralArraysCase11Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase12,
    TemplateLiteralArraysCase12Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase13,
    TemplateLiteralArraysCase13Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase14,
    TemplateLiteralArraysCase14Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase15,
    TemplateLiteralArraysCase15Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase16,
    TemplateLiteralArraysCase16Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase17,
    TemplateLiteralArraysCase17Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase18,
    TemplateLiteralArraysCase18Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase19,
    TemplateLiteralArraysCase19Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase20,
    TemplateLiteralArraysCase20Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase21,
    TemplateLiteralArraysCase21Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase22,
    TemplateLiteralArraysCase22Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase23,
    TemplateLiteralArraysCase23Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase24,
    TemplateLiteralArraysCase24Flat
  >
>;
assert<
  Equals<
    TemplateLiteralArraysCase25,
    TemplateLiteralArraysCase25Flat
  >
>;
