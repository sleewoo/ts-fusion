// @license MIT
// Contains AI-generated test patterns

import type { BasicPrimitiveArraysCase22 } from "@/fixtures/arrays/basic-primitive-arrays";
import type { ComplexObjectArraysCase1 } from "@/fixtures/arrays/complex-object-arrays";
import type { MultidimensionalArraysCase8 } from "@/fixtures/arrays/multidimensional-arrays";
import type { UnionArraysCase5 } from "@/fixtures/arrays/union-arrays";
import type {
  DataModelingTest1,
  DataModelingTest4,
  DataModelingTest9,
  DataModelingTest16,
  DataModelingTest20,
  DataModelingTest21,
} from "@/fixtures/objects/data-modeling";
import type { DatabaseConnection, User } from "@/fixtures/objects/object-types";

import type { FunctionTypesCase3 } from "./function-types";
import type { VariadicTuplesCase16 } from "./variadic-tuples";

// Inspired by API partial updates
export type UtilityTypesCase1 = Partial<DataModelingTest20["subject"][number]>;

// Similar to strict configuration requirements
export type UtilityTypesCase2 = Required<FunctionTypesCase3["arguments"]>;

// Pattern from immutable UI state
export type UtilityTypesCase3 = Readonly<{
  user: DataModelingTest1;
  id: DataModelingTest21["id"];
}>;

// Inspired by type-safe dictionaries
export type UtilityTypesCase4 = Record<
  BasicPrimitiveArraysCase22[number],
  string
>;

// Similar to form field selection
export type UtilityTypesCase5 = Pick<
  DataModelingTest16["rows"][number],
  "id" | "variants"
>;

// Pattern from secure data handling
export type UtilityTypesCase6 = Omit<User, "sensitiveData">;

// Inspired by error filtering
export type UtilityTypesCase7 = Exclude<VariadicTuplesCase16 | Error, Error>;

// Similar to valid user extraction
export type UtilityTypesCase8 = Extract<
  MultidimensionalArraysCase8[number],
  { valid: true }
>;

// Pattern from non-nullable API responses
export type UtilityTypesCase9 = NonNullable<UnionArraysCase5[number] | null>;

// Inspired by async handler returns
export type UtilityTypesCase10 = ReturnType<FunctionTypesCase3>;

// Similar to constructor parameter validation
export type UtilityTypesCase11 = Parameters<typeof Date>;

// Pattern from instance shaping
export type UtilityTypesCase12 = InstanceType<typeof Date>;

// Inspired by promise unwrapping
export type UtilityTypesCase13 = Awaited<Promise<Promise<UtilityTypesCase14>>>;

// Similar to uppercase key mapping
export type UtilityTypesCase14 = {
  [K in keyof DataModelingTest9 as Uppercase<K>]: DataModelingTest9[K];
};

// Pattern from required query parameters
export type UtilityTypesCase15 = {
  [K in keyof FunctionTypesCase3["arguments"]]-?: FunctionTypesCase3["arguments"][K];
};

// Inspired by deep readonly state
export type UtilityTypesCase16 = Readonly<{
  config: DatabaseConnection;
}>;

// Similar to partial database updates
export type UtilityTypesCase17 = Partial<ComplexObjectArraysCase1[number]>;

// Pattern from complete user profiles
export type UtilityTypesCase18 = Required<ComplexObjectArraysCase1[number]>;

// Inspired by function property mapping
export type UtilityTypesCase19 = Record<keyof FunctionTypesCase3, () => void>;

// Similar to numeric key filtering
export type UtilityTypesCase20 = Exclude<
  keyof ComplexObjectArraysCase1[number],
  symbol
>;

// Pattern from branded currency conversions
export type UtilityTypesCase21 = DataModelingTest4 &
  Readonly<{ __currency: "USD" }>;

// Inspired by hybrid type utilities
export type UtilityTypesCase22 = Pick<ComplexObjectArraysCase1[number], "id"> &
  Omit<ComplexObjectArraysCase1[number], "pricing">;

// Similar to date transformations
export type UtilityTypesCase23 = Record<
  keyof ComplexObjectArraysCase1[number],
  Date
>;

// Pattern from union type mapping
export type UtilityTypesCase24 = {
  [K in keyof ComplexObjectArraysCase1[number]]: ComplexObjectArraysCase1[number][K] extends string
    ? K
    : never;
};

// Inspired by recursive utility combinations
export type UtilityTypesCase25 = Partial<
  Required<ComplexObjectArraysCase1[number]>
>;
