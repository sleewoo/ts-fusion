import { assert, type Equals } from "tsafe";

import type {
  BrandedArraysCase1,
  BrandedArraysCase2,
  BrandedArraysCase3,
  BrandedArraysCase4,
  BrandedArraysCase5,
  BrandedArraysCase6,
  BrandedArraysCase7,
  BrandedArraysCase8,
  BrandedArraysCase9,
  BrandedArraysCase10,
  BrandedArraysCase11,
  BrandedArraysCase12,
  BrandedArraysCase13,
  BrandedArraysCase14,
  BrandedArraysCase15,
  BrandedArraysCase16,
  BrandedArraysCase17,
  BrandedArraysCase18,
  BrandedArraysCase19,
  BrandedArraysCase20,
  BrandedArraysCase21,
  BrandedArraysCase22,
  BrandedArraysCase23,
  BrandedArraysCase24,
  BrandedArraysCase25,
} from "@/fixtures/arrays/BrandedArrays.ts";

// Inspired by financial transaction IDs
type BrandedArraysCase1Flat = Array<(string & {
  __brand: "TransactionID"
})>;

// Similar to IoT device identifiers
type BrandedArraysCase2Flat = ReadonlyArray<(number & {
  __brand: "DeviceID";
  __range: [
    0,
    9999
  ]
})>;

// Pattern from currency exchange systems
type BrandedArraysCase3Flat = Array<(number & {
  __brand: ("USD" | "EUR");
  __precision: 2
})>;

// Inspired by geospatial coordinates
type BrandedArraysCase4Flat = ([
  number,
  number,
  (number)?
][] & {
  __brand: "WGS84"
});

// Similar to medical record numbers
type BrandedArraysCase5Flat = Array<(((Array<{
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
}>)[number])["id"] & {
  __scope: "medical"
})>;

// Pattern from quantum state labels
type BrandedArraysCase6Flat = Array<(`|${string}⟩` & {
  __brand: "QuantumState"
})>;

// Inspired by stock ticker symbols
type BrandedArraysCase7Flat = Array<(string & {
  __brand: "NASDAQ";
  __length: 4
})>;

// Similar to automotive VIN patterns
type BrandedArraysCase8Flat = Array<(`${string}${number}${string}` & {
  __brand: "VIN"
})>;

// Pattern from chemical compound IDs
type BrandedArraysCase9Flat = Array<(string & {
  __brand: "CASNumber";
  __pattern: "/d{2,7}-d{2}-d/"
})>;

// Inspired by network packet checksums
type BrandedArraysCase10Flat = (Uint8Array & {
  __brand: "CRC32";
  __length: 4
});

// Similar to cryptographic hashes
type BrandedArraysCase11Flat = Array<(string & {
  __brand: "SHA256";
  __length: 64
})>;

// Pattern from aircraft tail numbers
type BrandedArraysCase12Flat = Array<(`${string}${number}${string}` & {
  __brand: "ICAO24"
})>;

// Inspired by genetic sequence markers
type BrandedArraysCase13Flat = Array<(`rs${number}` & {
  __brand: "dbSNP"
})>;

// Similar to legal document versions
type BrandedArraysCase14Flat = (((Array<((string & {
  __brand: "id"
}) | (number & {
  __brand: "count"
}))> & {
  expiration: Date
}))[] & {
  __brand: "LegalRevision"
});

// Pattern from pharmaceutical lot numbers
type BrandedArraysCase15Flat = Array<(`${number}-${string}-${number}` & {
  __brand: "LotNumber"
})>;

// Inspired by astronomy catalog IDs
type BrandedArraysCase16Flat = Array<(`NGC ${number}` & {
  __brand: "GalaxyCatalog"
})>;

// Similar to military equipment codes
type BrandedArraysCase17Flat = Array<(`${number}${"AZ"}${number}` & {
  __brand: "NATOStock"
})>;

// Pattern from patent numbers
type BrandedArraysCase18Flat = Array<(`US${number}` & {
  __brand: "USPTO"
})>;

// Inspired by blockchain transaction hashes
type BrandedArraysCase19Flat = Array<(`0x${string}` & {
  __brand: "EthereumTx";
  __length: 66
})>;

// Similar to ISBN book identifiers
type BrandedArraysCase20Flat = Array<(`${number}-${number}-${number}-${number}` & {
  __brand: "ISBN"
})>;

// Pattern from aircraft seat maps
type BrandedArraysCase21Flat = Array<(`${"AJ"}${number}` & {
  __brand: "SeatMap"
})>;

// Inspired by chemical element symbols
type BrandedArraysCase22Flat = Array<(`${("H" | "He" | "Li")}${number}` & {
  __brand: "Isotope"
})>;

// Similar to military time patterns
type BrandedArraysCase23Flat = Array<(`${number}${number}${number}${number}` & {
  __brand: "ZuluTime"
})>;

// Pattern from pharmaceutical dosing
type BrandedArraysCase24Flat = Array<(number & {
  __brand: "Milligram";
  __range: [
    0,
    1000
  ]
})>;

// Inspired by semiconductor wafer IDs
type BrandedArraysCase25Flat = Array<(`WFR-${number}-${string}` & {
  __brand: "WaferID"
})>;


assert<
  Equals<
    BrandedArraysCase1,
    BrandedArraysCase1Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase2,
    BrandedArraysCase2Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase3,
    BrandedArraysCase3Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase4,
    BrandedArraysCase4Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase5,
    BrandedArraysCase5Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase6,
    BrandedArraysCase6Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase7,
    BrandedArraysCase7Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase8,
    BrandedArraysCase8Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase9,
    BrandedArraysCase9Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase10,
    BrandedArraysCase10Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase11,
    BrandedArraysCase11Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase12,
    BrandedArraysCase12Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase13,
    BrandedArraysCase13Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase14,
    BrandedArraysCase14Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase15,
    BrandedArraysCase15Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase16,
    BrandedArraysCase16Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase17,
    BrandedArraysCase17Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase18,
    BrandedArraysCase18Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase19,
    BrandedArraysCase19Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase20,
    BrandedArraysCase20Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase21,
    BrandedArraysCase21Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase22,
    BrandedArraysCase22Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase23,
    BrandedArraysCase23Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase24,
    BrandedArraysCase24Flat
  >
>;
assert<
  Equals<
    BrandedArraysCase25,
    BrandedArraysCase25Flat
  >
>;
