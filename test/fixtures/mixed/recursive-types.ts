// @license MIT
// Contains AI-generated test patterns

import type { BrandedArraysCase1 } from "@/fixtures/arrays/branded-arrays";
import type { ComplexObjectArraysCase1 } from "@/fixtures/arrays/complex-object-arrays";
import type { HybridArraysCase3 } from "@/fixtures/arrays/hybrid-arrays";

import type { FunctionTypesCase7 } from "./function-types";

// Inspired by nested comment threads
export type RecursiveTypesCase1 = {
  comment: string;
  replies: RecursiveTypesCase1[];
};

// Similar to filesystem directory structures
export type RecursiveTypesCase2 =
  | { type: "file"; name: string }
  | { type: "directory"; contents: RecursiveTypesCase2[] };

// Pattern from parser AST nodes
export type RecursiveTypesCase3 = {
  type: string;
  children: RecursiveTypesCase3[];
  position: HybridArraysCase3;
};

// Inspired by UI component hierarchies
export type RecursiveTypesCase4<T> =
  | T
  | { component: string; children: RecursiveTypesCase4<T>[] };

// Similar to promise chains
export type RecursiveTypesCase5 = Promise<
  RecursiveTypesCase5 | ComplexObjectArraysCase1
>;

// Pattern from financial transaction trees
export type RecursiveTypesCase6 = {
  amount: number;
  subTransactions: RecursiveTypesCase6[];
  currency: BrandedArraysCase1[number];
};

// Inspired by physics engine transforms
export type RecursiveTypesCase7 = {
  position: HybridArraysCase3;
  children: RecursiveTypesCase7[];
};

// Similar to recursive validation rules
export type RecursiveTypesCase8<T> = T extends object
  ? { [K in keyof T]: RecursiveTypesCase8<T[K]> }
  : T;

// Pattern from type-safe state machines
export type RecursiveTypesCase9 =
  | { state: "idle" }
  | { state: "active"; prev: RecursiveTypesCase9 }
  | { state: "error"; recovery: () => RecursiveTypesCase9 };

// Inspired by genomic data structures
export type RecursiveTypesCase10 = {
  sequence: string;
  variations: RecursiveTypesCase10[];
  position: number;
};

// Similar to recursive API pagination
export type RecursiveTypesCase11<T> =
  | T[]
  | { next: RecursiveTypesCase11<T>; results: T[] };

// Pattern from CSS rule nesting
export type RecursiveTypesCase12 = {
  selector: string;
  rules: (RecursiveTypesCase12 | FunctionTypesCase7)[];
};

// Inspired by mathematical expressions
export type RecursiveTypesCase13 =
  | number
  | { op: "+" | "×"; left: RecursiveTypesCase13; right: RecursiveTypesCase13 };

// Similar to recursive permissions
export type RecursiveTypesCase14 = {
  access: string;
  inheritedFrom?: RecursiveTypesCase14;
  children: RecursiveTypesCase14[];
};

// Pattern from type-safe reducers
export type RecursiveTypesCase15<T> = (
  state: T,
  action: RecursiveTypesCase15<T>,
) => T;

// Inspired by 3D scene graphs
export type RecursiveTypesCase16 = {
  transform: HybridArraysCase3;
  meshes: ComplexObjectArraysCase1;
  children: RecursiveTypesCase16[];
};

// Similar to recursive product categories
export type RecursiveTypesCase17 = {
  name: string;
  subcategories: RecursiveTypesCase17[];
  products: ComplexObjectArraysCase1;
};

// Pattern from authentication chains
export type RecursiveTypesCase18 = {
  user: BrandedArraysCase1[number];
  signedBy?: RecursiveTypesCase18;
  permissions: string[];
};

// Inspired by blockchain merkle trees
export type RecursiveTypesCase19 =
  | string
  | [RecursiveTypesCase19, RecursiveTypesCase19];

// Similar to recursive type predicates
export type RecursiveTypesCase20<T> = T extends object
  ? { [K in keyof T]: RecursiveTypesCase20<T[K]> }
  : (value: unknown) => value is T;

// Pattern from file format parsing
export type RecursiveTypesCase21 = {
  header: Uint8Array;
  chunks: RecursiveTypesCase21[];
  checksum: BrandedArraysCase1[number];
};

// Inspired by quantum circuit patterns
export type RecursiveTypesCase22 = {
  gate: string;
  targets: number[];
  children: RecursiveTypesCase22[];
};

// Similar to recursive UI animations
export type RecursiveTypesCase23 = {
  duration: number;
  keyframes: RecursiveTypesCase23[];
  easing: FunctionTypesCase7;
};

// Pattern from type-safe builders
export type RecursiveTypesCase24<T> = {
  value: T;
  then: <U>(
    fn: (input: T) => RecursiveTypesCase24<U>,
  ) => RecursiveTypesCase24<U>;
};

// Inspired by astronomy catalog hierarchies
export type RecursiveTypesCase25 = {
  name: string;
  children: RecursiveTypesCase25[];
  coordinates: HybridArraysCase3;
  magnitude: number;
};
