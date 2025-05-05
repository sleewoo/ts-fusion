import { assert, type Equals } from "tsafe";

import type {
  DataModelingTest1,
  DataModelingTest2,
  DataModelingTest3,
  DataModelingTest4,
  DataModelingTest5,
  DataModelingTest6,
  DataModelingTest7,
  DataModelingTest8,
  DataModelingTest9,
  DataModelingTest10,
  DataModelingTest11,
  DataModelingTest12,
  DataModelingTest13,
  DataModelingTest14,
  DataModelingTest15,
  DataModelingTest16,
  DataModelingTest17,
  DataModelingTest18,
  DataModelingTest19,
  DataModelingTest20,
  DataModelingTest21,
  DataModelingTest22,
  DataModelingTest23,
  DataModelingTest24,
  DataModelingTest25,
} from "@/fixtures/objects/data-modeling.ts";

// 1. Basic entity with timestamps
type DataModelingTest1Flat = {
  id: string;
  createdAt: Date;
  updatedAt?: Date
};

// 2. Type-safe generic repository pattern
type DataModelingTest2Flat<T extends {
  name: string;
  columns: {
    name: string;
    type: string;
    nullable: boolean;
    primary: boolean
  }[];
  relations: never[]
}> = {
  metadata: T;
  find: ((criteria: Partial<(({ [K in (((T)["columns"])[number])["name"]]: never }) & ({ [K in (((T)["relations"])[number])["target"]]?: never }))>) => Promise<(({ [K in (((T)["columns"])[number])["name"]]: never }) & ({ [K in (((T)["relations"])[number])["target"]]?: never }))[]>);
  save: ((entity: (({ [K in (((T)["columns"])[number])["name"]]: never }) & ({ [K in (((T)["relations"])[number])["target"]]?: never }))) => Promise<void>)
};

// 3. Polymorphic product type
type DataModelingTest3Flat = (({
  sku: "";
  price: number;
  variants: {
    color: string;
    size: (("S") | ("M") | ("L"))
  }[]
}) & ({
  digitalAsset?: string;
  physicalDimensions?: {
    weight: number;
    height: number
  }
}));

// 4. TypeORM-style active record pattern
type DataModelingTest4Flat = (({
  id: string;
  save: (() => Promise<void>);
  remove: (() => Promise<void>);
  reload: (() => Promise<void>)
}) & ({
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date
}));

// 5. Zod-like schema definition
type DataModelingTest5Flat<T> = {
  _shape: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => (({
    success: true;
    data: T
  }) | ({
    success: false;
    error: {
      code: string;
      message: string;
      path: (((string) | (number)))[]
    }
  })))
};

// 6. Prisma-style filtered result
type DataModelingTest6Flat<T> = {
  where: Partial<T>;
  include?: { [K in keyof (T)]?: boolean };
  orderBy?: { [K in keyof (T)]?: (("asc") | ("desc")) }
};

// 7. MongoDB-style document structure
type DataModelingTest7Flat<T> = ((T) & ({
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date
}));

// 8. GraphQL resolver type
type DataModelingTest8Flat<TArgs, TReturn> = {
  args: TArgs;
  context: {
    user?: {
      id: string;
      name: string;
      email?: string;
      readonly createdAt: Date
    };
    dataSources: {
      products: {
        sku: "";
        price: number;
        variants: {
          color: string;
          size: (("S") | ("M") | ("L"))
        }[]
      }[];
      users: {
        id: string;
        name: string;
        email?: string;
        readonly createdAt: Date
      }[]
    }
  };
  resolve: (() => TReturn)
};

// 9. Elasticsearch mapping type
type DataModelingTest9Flat = {
  mappings: {
    properties: {
      [k: string]: {
        type: (("text") | ("keyword") | ("long") | ("date"));
        index?: boolean;
        analyzer?: string
      }
    }
  };
  settings: {
    numberOfShards: number;
    numberOfReplicas: number
  }
};

// 10. Redis hash structure
type DataModelingTest10Flat = {
  key: string;
  fields: Record<string, ((string) | (number))>;
  ttl?: number
};

// 11. JSON:API resource object
type DataModelingTest11Flat<T> = {
  type: string;
  id: string;
  attributes: T;
  relationships?: {
    [k: string]: {
      data: (({
        type: string;
        id: string
      }) | (Array<{
        type: string;
        id: string
      }>))
    }
  }
};

// 12. Kafka message schema
type DataModelingTest12Flat<T> = {
  key: string;
  value: T;
  headers: Record<string, string>;
  timestamp: number
};

// 13. OpenAPI schema component
type DataModelingTest13Flat = {
  type: "object";
  required: string[];
  properties: {
    [k: string]: {
      type: (("string") | ("number") | ("boolean") | ("object"));
      format?: (("date-time") | ("email") | ("uri"));
      enum?: string[]
    }
  }
};

// 14. Firebase Firestore document
type DataModelingTest14Flat<T> = ((T) & ({
  __firestore: {
    path: string;
    createTime: Date;
    updateTime: Date
  }
}));

// 15. Protocol Buffers message
type DataModelingTest15Flat = {
  fields: {
    [k: string]: {
      type: (("string") | ("int32") | ("double") | ("bool") | ("message"));
      repeated?: boolean;
      optional?: boolean
    }
  }
};

// 16. CSV parsed row type
type DataModelingTest16Flat = {
  header: string[];
  rows: Array<Record<string, string>>;
  errors: Array<{
    row: number;
    message: string
  }>
};

// 17. TypeORM migration class
type DataModelingTest17Flat = {
  up: ((queryRunner: {
    query: ((sql: string, parameters?: unknown[]) => Promise<void>)
  }) => Promise<void>);
  down: ((queryRunner: {
    query: ((sql: string, parameters?: unknown[]) => Promise<void>)
  }) => Promise<void>);
  timestamp: number
};

// 18. Sequelize model definition
type DataModelingTest18Flat<T> = {
  define: ((modelName: string, attributes: {
    [k: string]: {
      type: (("STRING") | ("INTEGER") | ("DATE") | ("BOOLEAN"));
      allowNull?: boolean;
      primaryKey?: boolean
    }
  }) => {
    new (): T;
    findAll: ((options?: never) => Promise<T[]>)
  });
  associations: {
    [k: string]: {
      associationType: (("BelongsTo") | ("HasMany") | ("BelongsToMany"));
      target: {
        new (): never;
        findAll: ((options?: never) => Promise<never[]>)
      }
    }
  }
};

// 19. JWT payload structure
type DataModelingTest19Flat = (({
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date
}) & ({
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string
}));

// 20. ABAC policy object
type DataModelingTest20Flat = {
  subject: string[];
  action: string[];
  object: string[];
  conditions: {
    [k: string]: never
  }
};

// 21. Data transfer object (DTO)
type DataModelingTest21Flat = ((Omit<{
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date
}, (("createdAt") | ("updatedAt"))>) & ({
  passwordHash: string;
  lastLogin?: Date
}));

// 22. Redis sorted set member
type DataModelingTest22Flat = {
  score: number;
  member: string
};

// 23. Elasticsearch query DSL
type DataModelingTest23Flat = {
  query: {
    bool: {
      must?: Array<{
        match?: {
          [k: string]: never
        }
      }>;
      filter?: Array<{
        range?: {
          [k: string]: never
        }
      }>
    }
  };
  aggs?: {
    [k: string]: {
      terms?: {
        field: string
      };
      avg?: {
        field: string
      }
    }
  }
};

// 24. XML namespace-aware object
type DataModelingTest24Flat = {
  "xmlns:xsd": "http://www.w3.org/2001/XMLSchema";
  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "#content": Array<{
    "@_name": string;
    "#text": string
  }>
};

// 25. Complex validation error type
type DataModelingTest25Flat = {
  path: (((string) | (number)))[];
  message: string;
  code: (("invalid_type") | ("custom") | ("too_small"));
  expected?: string;
  received?: string
};


assert<
  Equals<
    DataModelingTest1,
    DataModelingTest1Flat
  >
>;
assert<
  Equals<
    DataModelingTest2<never>,
    DataModelingTest2Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest3,
    DataModelingTest3Flat
  >
>;
assert<
  Equals<
    DataModelingTest4,
    DataModelingTest4Flat
  >
>;
assert<
  Equals<
    DataModelingTest5<never>,
    DataModelingTest5Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest6<never>,
    DataModelingTest6Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest7<never>,
    DataModelingTest7Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest8<never, never>,
    DataModelingTest8Flat<never, never>
  >
>;
assert<
  Equals<
    DataModelingTest9,
    DataModelingTest9Flat
  >
>;
assert<
  Equals<
    DataModelingTest10,
    DataModelingTest10Flat
  >
>;
assert<
  Equals<
    DataModelingTest11<never>,
    DataModelingTest11Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest12<never>,
    DataModelingTest12Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest13,
    DataModelingTest13Flat
  >
>;
assert<
  Equals<
    DataModelingTest14<never>,
    DataModelingTest14Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest15,
    DataModelingTest15Flat
  >
>;
assert<
  Equals<
    DataModelingTest16,
    DataModelingTest16Flat
  >
>;
assert<
  Equals<
    DataModelingTest17,
    DataModelingTest17Flat
  >
>;
assert<
  Equals<
    DataModelingTest18<never>,
    DataModelingTest18Flat<never>
  >
>;
assert<
  Equals<
    DataModelingTest19,
    DataModelingTest19Flat
  >
>;
assert<
  Equals<
    DataModelingTest20,
    DataModelingTest20Flat
  >
>;
assert<
  Equals<
    DataModelingTest21,
    DataModelingTest21Flat
  >
>;
assert<
  Equals<
    DataModelingTest22,
    DataModelingTest22Flat
  >
>;
assert<
  Equals<
    DataModelingTest23,
    DataModelingTest23Flat
  >
>;
assert<
  Equals<
    DataModelingTest24,
    DataModelingTest24Flat
  >
>;
assert<
  Equals<
    DataModelingTest25,
    DataModelingTest25Flat
  >
>;
