export type User = {
  id: string;
  name: string;
  email?: string;
  createdAt: Date
};

export type Product<T extends string> = {
  sku: T;
  price: number;
  variants: {
    color: string;
    size: "S" | "M" | "L"
  }[]
};

export type Variant = {
  color: string;
  size: "S" | "M" | "L"
};

export type ProcedureParams<TInput, TOutput> = {
  input: TInput;
  output: TOutput;
  meta?: unknown
};

export type RelationMetadata = object;

export type EntityMetadata = {
  name: string;
  columns: {
    name: string;
    type: string;
    nullable: boolean;
    primary: boolean
  }[];
  relations: never[]
};

export type ColumnMetadata = {
  name: string;
  type: string;
  nullable: boolean;
  primary: boolean
};

export type ValidationError = {
  [k: string]: unknown;
  path: (string | number)[];
  message: string;
  code: "invalid_type" | "missing_value" | "custom" | "too_small" | "too_big";
  expected?: string;
  received?: string;
  fatal?: boolean
};

export type ValidationContext = {
  path: (string | number)[];
  parent: unknown;
  schema: unknown
};

export type ErrorResult = {
  code: string;
  message: string;
  details?: Array<{
    field?: string;
    issue: string
  }>
};

export type PaginationMeta = {
  total: number;
  page: number;
  pageSize: number;
  nextCursor?: string;
  prevCursor?: string
};

export type HypermediaLink = {
  href: string;
  rel: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  type?: string
};

export type FieldError = {
  path: (string | number)[];
  message: string;
  code: "missing" | "invalid" | "conflict"
};

export type SyntheticEvent<T> = {
  target: T;
  preventDefault: (() => void);
  stopPropagation: (() => void)
};

export type CSSProperties = {
  [k: string]: string | number
};

export type Coordinates = {
  x: number;
  y: number
};

export type Dimension = {
  width: number;
  height: number
};

export type DatabaseConnection = {
  type: "postgres" | "mysql" | "sqlite";
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl?: boolean
};

export type RuleSet = {
  test: RegExp;
  use: string[];
  exclude?: RegExp[]
};

export type PluginDefinition = {
  name: string;
  options?: Record<string, unknown>;
  enabled?: boolean
};
