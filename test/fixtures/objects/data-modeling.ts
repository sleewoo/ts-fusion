// @license MIT
// Contains AI-generated test patterns

import type { EntityMetadata, Product, User } from "./object-types";

// 1. Basic entity with timestamps
export type DataModelingTest1 = {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
};

// 2. Type-safe generic repository pattern
export type DataModelingTest2<T extends EntityMetadata> = {
  metadata: T;
  find: (criteria: Partial<EntityRecord<T>>) => Promise<EntityRecord<T>[]>;
  save: (entity: EntityRecord<T>) => Promise<void>;
};

// 3. Polymorphic product type
export type DataModelingTest3 = Product<""> & {
  digitalAsset?: string;
  physicalDimensions?: {
    weight: number;
    height: number;
  };
};

// 4. TypeORM-style active record pattern
export type DataModelingTest4 = {
  id: string;
  save: () => Promise<void>;
  remove: () => Promise<void>;
  reload: () => Promise<void>;
} & User;

// 5. Zod-like schema definition
export type DataModelingTest5<T> = {
  _shape: T;
  parse: (input: unknown) => T;
  safeParse: (
    input: unknown,
  ) => { success: true; data: T } | { success: false; error: ValidationError };
};

// 6. Prisma-style filtered result
export type DataModelingTest6<T> = {
  where: Partial<T>;
  include?: { [K in keyof T]?: boolean };
  orderBy?: { [K in keyof T]?: "asc" | "desc" };
};

// 7. MongoDB-style document structure
export type DataModelingTest7<T> = T & {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
};

// 8. GraphQL resolver type
export type DataModelingTest8<TArgs, TReturn> = {
  args: TArgs;
  context: {
    user?: User;
    dataSources: {
      products: Product<"">[];
      users: User[];
    };
  };
  resolve: () => TReturn;
};

// 9. Elasticsearch mapping type
export type DataModelingTest9 = {
  mappings: {
    properties: {
      [key: string]: {
        type: "text" | "keyword" | "long" | "date";
        index?: boolean;
        analyzer?: string;
      };
    };
  };
  settings: {
    numberOfShards: number;
    numberOfReplicas: number;
  };
};

// 10. Redis hash structure
export type DataModelingTest10 = {
  key: string;
  fields: Record<string, string | number>;
  ttl?: number;
};

// 11. JSON:API resource object
export type DataModelingTest11<T> = {
  type: string;
  id: string;
  attributes: T;
  relationships?: {
    [key: string]: {
      data: { type: string; id: string } | Array<{ type: string; id: string }>;
    };
  };
};

// 12. Kafka message schema
export type DataModelingTest12<T> = {
  key: string;
  value: T;
  headers: Record<string, string>;
  timestamp: number;
};

// 13. OpenAPI schema component
export type DataModelingTest13 = {
  type: "object";
  required: string[];
  properties: {
    [key: string]: {
      type: "string" | "number" | "boolean" | "object";
      format?: "date-time" | "email" | "uri";
      enum?: string[];
    };
  };
};

// 14. Firebase Firestore document
export type DataModelingTest14<T> = T & {
  __firestore: {
    path: string;
    createTime: Date;
    updateTime: Date;
  };
};

// 15. Protocol Buffers message
export type DataModelingTest15 = {
  fields: {
    [key: string]: {
      type: "string" | "int32" | "double" | "bool" | "message";
      repeated?: boolean;
      optional?: boolean;
    };
  };
};

// 16. CSV parsed row type
export type DataModelingTest16 = {
  header: string[];
  rows: Array<Record<string, string>>;
  errors: Array<{
    row: number;
    message: string;
  }>;
};

// 17. TypeORM migration class
export type DataModelingTest17 = {
  up: (queryRunner: QueryRunner) => Promise<void>;
  down: (queryRunner: QueryRunner) => Promise<void>;
  timestamp: number;
};

// 18. Sequelize model definition
export type DataModelingTest18<T> = {
  define: (modelName: string, attributes: ModelAttributes) => ModelStatic<T>;
  associations: {
    [key: string]: Association;
  };
};

// 19. JWT payload structure
export type DataModelingTest19 = User & {
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
};

// 20. ABAC policy object
export type DataModelingTest20 = {
  subject: string[];
  action: string[];
  object: string[];
  conditions: {
    [key: string]: never;
  };
};

// 21. Data transfer object (DTO)
export type DataModelingTest21 = Omit<User, "createdAt" | "updatedAt"> & {
  passwordHash: string;
  lastLogin?: Date;
};

// 22. Redis sorted set member
export type DataModelingTest22 = {
  score: number;
  member: string;
};

// 23. Elasticsearch query DSL
export type DataModelingTest23 = {
  query: {
    bool: {
      must?: Array<{ match?: { [key: string]: never } }>;
      filter?: Array<{ range?: { [key: string]: never } }>;
    };
  };
  aggs?: {
    [key: string]: {
      terms?: { field: string };
      avg?: { field: string };
    };
  };
};

// 24. XML namespace-aware object
export type DataModelingTest24 = {
  "xmlns:xsd": "http://www.w3.org/2001/XMLSchema";
  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "#content": Array<{
    "@_name": string;
    "#text": string;
  }>;
};

// 25. Complex validation error type
export type DataModelingTest25 = {
  path: (string | number)[];
  message: string;
  code: "invalid_type" | "custom" | "too_small";
  expected?: string;
  received?: string;
};

// Supporting internal types
type EntityRecord<T extends EntityMetadata> = {
  [K in T["columns"][number]["name"]]: never;
} & {
  [K in T["relations"][number]["target"]]?: never;
};

type ValidationError = {
  code: string;
  message: string;
  path: (string | number)[];
};

type QueryRunner = {
  query: (sql: string, parameters?: unknown[]) => Promise<void>;
};

type ModelAttributes = {
  [key: string]: {
    type: "STRING" | "INTEGER" | "DATE" | "BOOLEAN";
    allowNull?: boolean;
    primaryKey?: boolean;
  };
};

type Association = {
  associationType: "BelongsTo" | "HasMany" | "BelongsToMany";
  target: ModelStatic<never>;
};

type ModelStatic<T> = {
  new (): T;
  findAll: (options?: never) => Promise<T[]>;
};
