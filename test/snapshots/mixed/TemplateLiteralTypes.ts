import { assert, type Equals } from "tsafe";

import type {
  TemplateLiteralTypesCase1,
  TemplateLiteralTypesCase2,
  TemplateLiteralTypesCase3,
  TemplateLiteralTypesCase4,
  TemplateLiteralTypesCase5,
  TemplateLiteralTypesCase6,
  TemplateLiteralTypesCase7,
  TemplateLiteralTypesCase8,
  TemplateLiteralTypesCase9,
  TemplateLiteralTypesCase10,
  TemplateLiteralTypesCase11,
  TemplateLiteralTypesCase12,
  TemplateLiteralTypesCase13,
  TemplateLiteralTypesCase14,
  TemplateLiteralTypesCase15,
  TemplateLiteralTypesCase16,
  TemplateLiteralTypesCase17,
  TemplateLiteralTypesCase18,
  TemplateLiteralTypesCase19,
  TemplateLiteralTypesCase20,
  TemplateLiteralTypesCase21,
  TemplateLiteralTypesCase22,
  TemplateLiteralTypesCase23,
  TemplateLiteralTypesCase24,
  TemplateLiteralTypesCase25,
} from "@/fixtures/mixed/TemplateLiteralTypes.ts";

// Inspired by REST API endpoint patterns
type TemplateLiteralTypesCase1Flat = `/api/v${number}/${(Array<("success" | "error")>)[number]}`;

// Similar to CSS-in-JS class generation
type TemplateLiteralTypesCase2Flat = `text-${("left" | "center")}-${("sm" | "md")}`;

// Pattern from localization key structures
type TemplateLiteralTypesCase3Flat = `i18n.${("home" | "profile")}.${string}`;

// Inspired by unique resource identifiers
type TemplateLiteralTypesCase4Flat = `${(`img_${("jpg" | "png")}`[])[number]}_${number}`;

// Similar to timestamp formats
type TemplateLiteralTypesCase5Flat = `${number}-${number}-${number}T${number}:${number}:${number}Z`;

// Pattern from file system paths
type TemplateLiteralTypesCase6Flat = `/${string}/${string}.${("ts" | "js")}`;

// Inspired by error code conventions
type TemplateLiteralTypesCase7Flat = `ERR_${number}_${Uppercase<string>}`;

// Similar to semantic version ranges
type TemplateLiteralTypesCase8Flat = `^${number}.${number}.${number}`;

// Pattern from log message formats
type TemplateLiteralTypesCase9Flat = `[${("DEBUG" | "INFO" | "ERROR")}] ${string}`;

// Inspired by routing patterns
type TemplateLiteralTypesCase10Flat = `/users/${number}/posts/${(Array<123 extends string ? number : boolean>)[number]}`;

// Similar to currency formatting
type TemplateLiteralTypesCase11Flat = `${("USD" | "EUR")} ${number}.${number}`;

// Pattern from date localization
type TemplateLiteralTypesCase12Flat = `${number}/${number}/${number}`;

// Inspired by email validation patterns
type TemplateLiteralTypesCase13Flat = `${string}@${string}.${("com" | "org")}`;

// Similar to HTML data attributes
type TemplateLiteralTypesCase14Flat = `data-${("test" | "qa")}-${string}`;

// Pattern from environment variables
type TemplateLiteralTypesCase15Flat = `CONFIG_${Uppercase<keyof (Array<{
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
}>)[number]>}`;

// Inspired by permission strings
type TemplateLiteralTypesCase16Flat = `perm:${string}:${("read" | "write")}`;

// Similar to query parameters
type TemplateLiteralTypesCase17Flat = `?${string}=${(string | number)}`;

// Pattern from media queries
type TemplateLiteralTypesCase18Flat = `@media (${("min" | "max")}-width: ${number}px)`;

// Inspired by storage keys
type TemplateLiteralTypesCase19Flat = `ls_${Lowercase<`${("USD" | "EUR")} ${number}.${number}`>}`;

// Similar to authentication headers
type TemplateLiteralTypesCase20Flat = `Bearer ${string}`;

// Pattern from GraphQL operations
type TemplateLiteralTypesCase21Flat = `query ${string} { ${string} }`;

// Inspired by regex patterns
type TemplateLiteralTypesCase22Flat = `/${string}/gi${"m"}${"s"}`;

// Similar to payment processors
type TemplateLiteralTypesCase23Flat = `card_${number}-${number}-${number}-${number}`;

// Pattern from color formats
type TemplateLiteralTypesCase24Flat = (`#${string}` | `rgb(${number},${number},${number})`);

// Inspired by XML namespaces
type TemplateLiteralTypesCase25Flat = `<${keyof ((vectors: ([
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
})}>${string}</${keyof ((vectors: ([
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
})}>`;


assert<
  Equals<
    TemplateLiteralTypesCase1,
    TemplateLiteralTypesCase1Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase2,
    TemplateLiteralTypesCase2Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase3,
    TemplateLiteralTypesCase3Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase4,
    TemplateLiteralTypesCase4Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase5,
    TemplateLiteralTypesCase5Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase6,
    TemplateLiteralTypesCase6Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase7,
    TemplateLiteralTypesCase7Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase8,
    TemplateLiteralTypesCase8Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase9,
    TemplateLiteralTypesCase9Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase10,
    TemplateLiteralTypesCase10Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase11,
    TemplateLiteralTypesCase11Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase12,
    TemplateLiteralTypesCase12Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase13,
    TemplateLiteralTypesCase13Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase14,
    TemplateLiteralTypesCase14Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase15,
    TemplateLiteralTypesCase15Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase16,
    TemplateLiteralTypesCase16Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase17,
    TemplateLiteralTypesCase17Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase18,
    TemplateLiteralTypesCase18Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase19,
    TemplateLiteralTypesCase19Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase20,
    TemplateLiteralTypesCase20Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase21,
    TemplateLiteralTypesCase21Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase22,
    TemplateLiteralTypesCase22Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase23,
    TemplateLiteralTypesCase23Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase24,
    TemplateLiteralTypesCase24Flat
  >
>;
assert<
  Equals<
    TemplateLiteralTypesCase25,
    TemplateLiteralTypesCase25Flat
  >
>;
