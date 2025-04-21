// Core shapes from TypeScript Handbook examples
export type User = {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
};

export type Product<T extends string = string> = {
  sku: T;
  price: number;
  variants: Variant[];
};

export type Variant = {
  color: string;
  size: "S" | "M" | "L";
};

// Error handling from Zod-like structures
export type ValidationError = {
  path: (string | number)[];
  message: string;
};

// API patterns from tRPC
export type ProcedureParams<TInput, TOutput> = {
  input: TInput;
  output: TOutput;
  meta?: unknown;
};

// Database patterns from TypeORM
export type RelationMetadata = object;

export type EntityMetadata = {
  name: string;
  columns: ColumnMetadata[];
  relations: never[];
};

export type ColumnMetadata = {
  name: string;
  type: string;
  nullable: boolean;
  primary: boolean;
};
