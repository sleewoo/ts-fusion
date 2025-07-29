// @license MIT
// Contains AI-generated test patterns

import type { ComplexObjectArraysCase1 } from "./complex-object-arrays";
import type { HybridArraysCase4 } from "./hybrid-arrays";
import type { TupleArraysCase3 } from "./tuple-arrays";

// Inspired by financial transaction IDs
export type BrandedArraysCase1 = Array<string & { __brand: "TransactionID" }>;

// Similar to IoT device identifiers
export type BrandedArraysCase2 = ReadonlyArray<
  number & { __brand: "DeviceID"; __range: [0, 9999] }
>;

// Pattern from currency exchange systems
export type BrandedArraysCase3 = Array<
  number & { __brand: "USD" | "EUR"; __precision: 2 }
>;

// Inspired by geospatial coordinates
export type BrandedArraysCase4 = TupleArraysCase3 & {
  __brand: "WGS84";
};

// Similar to medical record numbers
export type BrandedArraysCase5 = Array<
  ComplexObjectArraysCase1[number]["id"] & { __scope: "medical" }
>;

// Pattern from quantum state labels
export type BrandedArraysCase6 = Array<
  `|${string}⟩` & { __brand: "QuantumState" }
>;

// Inspired by stock ticker symbols
export type BrandedArraysCase7 = Array<
  string & { __brand: "NASDAQ"; __length: 4 }
>;

// Similar to automotive VIN patterns
export type BrandedArraysCase8 = Array<
  `${string}${number}${string}` & { __brand: "VIN" }
>;

// Pattern from chemical compound IDs
export type BrandedArraysCase9 = Array<
  string & { __brand: "CASNumber"; __pattern: "/d{2,7}-d{2}-d/" }
>;

// Inspired by network packet checksums
export type BrandedArraysCase10 = Uint8Array & {
  __brand: "CRC32";
  __length: 4;
};

// Similar to cryptographic hashes
export type BrandedArraysCase11 = Array<
  string & { __brand: "SHA256"; __length: 64 }
>;

// Pattern from aircraft tail numbers
export type BrandedArraysCase12 = Array<
  `${string}${number}${string}` & { __brand: "ICAO24" }
>;

// Inspired by genetic sequence markers
export type BrandedArraysCase13 = Array<`rs${number}` & { __brand: "dbSNP" }>;

// Similar to legal document versions
export type BrandedArraysCase14 = HybridArraysCase4 & {
  __brand: "LegalRevision";
};

// Pattern from pharmaceutical lot numbers
export type BrandedArraysCase15 = Array<
  `${number}-${string}-${number}` & { __brand: "LotNumber" }
>;

// Inspired by astronomy catalog IDs
export type BrandedArraysCase16 = Array<
  `NGC ${number}` & { __brand: "GalaxyCatalog" }
>;

// Similar to military equipment codes
export type BrandedArraysCase17 = Array<
  `${number}${"AZ"}${number}` & { __brand: "NATOStock" }
>;

// Pattern from patent numbers
export type BrandedArraysCase18 = Array<`US${number}` & { __brand: "USPTO" }>;

// Inspired by blockchain transaction hashes
export type BrandedArraysCase19 = Array<
  `0x${string}` & { __brand: "EthereumTx"; __length: 66 }
>;

// Similar to ISBN book identifiers
export type BrandedArraysCase20 = Array<
  `${number}-${number}-${number}-${number}` & { __brand: "ISBN" }
>;

// Pattern from aircraft seat maps
export type BrandedArraysCase21 = Array<
  `${"AJ"}${number}` & { __brand: "SeatMap" }
>;

// Inspired by chemical element symbols
export type BrandedArraysCase22 = Array<
  `${"H" | "He" | "Li"}${number}` & { __brand: "Isotope" }
>;

// Similar to military time patterns
export type BrandedArraysCase23 = Array<
  `${number}${number}${number}${number}` & { __brand: "ZuluTime" }
>;

// Pattern from pharmaceutical dosing
export type BrandedArraysCase24 = Array<
  number & { __brand: "Milligram"; __range: [0, 1000] }
>;

// Inspired by semiconductor wafer IDs
export type BrandedArraysCase25 = Array<
  `WFR-${number}-${string}` & { __brand: "WaferID" }
>;
