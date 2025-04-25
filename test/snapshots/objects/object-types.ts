import { assert, type Equals } from "tsafe";

import type {
  User,
  Product,
  Variant,
  ProcedureParams,
  RelationMetadata,
  EntityMetadata,
  ColumnMetadata,
  ValidationError,
  ValidationContext,
  ErrorResult,
  PaginationMeta,
  HypermediaLink,
  FieldError,
  SyntheticEvent,
  CSSProperties,
  Coordinates,
  Dimension,
  DatabaseConnection,
  RuleSet,
  PluginDefinition,
  TreeNode,
  NumericRange,
} from "@/fixtures/objects/object-types.ts";

// @license MIT
// Contains AI-generated test patterns
// Core shapes from TypeScript Handbook examples
type UserFlat = {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date
};

type ProductFlat<T extends string> = {
  sku: T;
  price: number;
  variants: {
    color: string;
    size: ("S" | "M" | "L")
  }[]
};

type VariantFlat = {
  color: string;
  size: ("S" | "M" | "L")
};

// API patterns from tRPC
type ProcedureParamsFlat<TInput, TOutput> = {
  input: TInput;
  output: TOutput;
  meta?: unknown
};

// Database patterns from TypeORM
type RelationMetadataFlat = object;

type EntityMetadataFlat = {
  name: string;
  columns: {
    name: string;
    type: string;
    nullable: boolean;
    primary: boolean
  }[];
  relations: never[]
};

type ColumnMetadataFlat = {
  name: string;
  type: string;
  nullable: boolean;
  primary: boolean
};

// Added comprehensive validation error type
type ValidationErrorFlat = {
  [k: string]: unknown;
  path: ((string | number))[];
  message: string;
  code: ("invalid_type" | "missing_value" | "custom" | "too_small" | "too_big");
  expected?: string;
  received?: string;
  fatal?: boolean
};

// Added validation context type
type ValidationContextFlat = {
  path: ((string | number))[];
  parent: unknown;
  schema: unknown
};

type ErrorResultFlat = {
  code: string;
  message: string;
  details?: Array<{
    field?: string;
    issue: string
  }>
};

type PaginationMetaFlat = {
  total: number;
  page: number;
  pageSize: number;
  nextCursor?: string;
  prevCursor?: string
};

type HypermediaLinkFlat = {
  href: string;
  rel: string;
  method: ("GET" | "POST" | "PUT" | "DELETE");
  type?: string
};

type FieldErrorFlat = {
  path: ((string | number))[];
  message: string;
  code: ("missing" | "invalid" | "conflict")
};

// Added UI-specific foundational types
type SyntheticEventFlat<T> = {
  target: T;
  preventDefault: (() => void);
  stopPropagation: (() => void)
};

type CSSPropertiesFlat = {
  [k: string]: (string | number)
};

type CoordinatesFlat = {
  x: number;
  y: number
};

type DimensionFlat = {
  width: number;
  height: number
};

type DatabaseConnectionFlat = {
  type: ("postgres" | "mysql" | "sqlite");
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl?: boolean
};

type RuleSetFlat = {
  test: RegExp;
  use: string[];
  exclude?: RegExp[]
};

type PluginDefinitionFlat = {
  name: string;
  options?: Record<string, unknown>;
  enabled?: boolean
};

type TreeNodeFlat = {
  value: unknown;
  children: []
};

type NumericRangeFlat<Start extends number, End extends number> = Exclude<([])["length"] extends End ? ([])[number] : [
  End,
  [
    ...[],
    ([])["length"]
  ]
], ([])["length"] extends Start ? ([])[number] : [
  Start,
  [
    ...[],
    ([])["length"]
  ]
]> extends number ? Exclude<([])["length"] extends End ? ([])[number] : [
  End,
  [
    ...[],
    ([])["length"]
  ]
], ([])["length"] extends Start ? ([])[number] : [
  Start,
  [
    ...[],
    ([])["length"]
  ]
]> : never;


assert<
  Equals<
    User,
    UserFlat
  >
>;
assert<
  Equals<
    Product<never>,
    ProductFlat<never>
  >
>;
assert<
  Equals<
    Variant,
    VariantFlat
  >
>;
assert<
  Equals<
    ProcedureParams<never, never>,
    ProcedureParamsFlat<never, never>
  >
>;
assert<
  Equals<
    RelationMetadata,
    RelationMetadataFlat
  >
>;
assert<
  Equals<
    EntityMetadata,
    EntityMetadataFlat
  >
>;
assert<
  Equals<
    ColumnMetadata,
    ColumnMetadataFlat
  >
>;
assert<
  Equals<
    ValidationError,
    ValidationErrorFlat
  >
>;
assert<
  Equals<
    ValidationContext,
    ValidationContextFlat
  >
>;
assert<
  Equals<
    ErrorResult,
    ErrorResultFlat
  >
>;
assert<
  Equals<
    PaginationMeta,
    PaginationMetaFlat
  >
>;
assert<
  Equals<
    HypermediaLink,
    HypermediaLinkFlat
  >
>;
assert<
  Equals<
    FieldError,
    FieldErrorFlat
  >
>;
assert<
  Equals<
    SyntheticEvent<never>,
    SyntheticEventFlat<never>
  >
>;
assert<
  Equals<
    CSSProperties,
    CSSPropertiesFlat
  >
>;
assert<
  Equals<
    Coordinates,
    CoordinatesFlat
  >
>;
assert<
  Equals<
    Dimension,
    DimensionFlat
  >
>;
assert<
  Equals<
    DatabaseConnection,
    DatabaseConnectionFlat
  >
>;
assert<
  Equals<
    RuleSet,
    RuleSetFlat
  >
>;
assert<
  Equals<
    PluginDefinition,
    PluginDefinitionFlat
  >
>;
assert<
  Equals<
    TreeNode,
    TreeNodeFlat
  >
>;
assert<
  Equals<
    NumericRange<never, never>,
    NumericRangeFlat<never, never>
  >
>;
