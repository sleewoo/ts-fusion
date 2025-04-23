export type DataModelingTest1 = {
  id: string;
  createdAt: Date;
  updatedAt?: Date
};

export type DataModelingTest2<T extends {
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
  find: ((criteria: Partial<{ [K in T["columns"][number]["name"]]: never } & { [K in T["relations"][number]["target"]]?: never }>) => Promise<{ [K in T["columns"][number]["name"]]: never } & { [K in T["relations"][number]["target"]]?: never }[]>);
  save: ((entity: { [K in T["columns"][number]["name"]]: never } & { [K in T["relations"][number]["target"]]?: never }) => Promise<void>)
};

export type DataModelingTest3 = {
  sku: "";
  price: number;
  variants: {
    color: string;
    size: "S" | "M" | "L"
  }[]
} & {
  digitalAsset?: string;
  physicalDimensions?: {
    weight: number;
    height: number
  }
};

export type DataModelingTest4 = {
  id: string;
  save: (() => Promise<void>);
  remove: (() => Promise<void>);
  reload: (() => Promise<void>)
} & {
  id: string;
  name: string;
  email?: string;
  createdAt: Date
};

export type DataModelingTest5<T> = {
  _shape: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => {
    success: true;
    data: T
  } | {
    success: false;
    error: {
      code: string;
      message: string;
      path: (string | number)[]
    }
  })
};

export type DataModelingTest6<T> = {
  where: Partial<T>;
  include?: { [K in keyof T]?: boolean };
  orderBy?: { [K in keyof T]?: "asc" | "desc" }
};

export type DataModelingTest7<T> = T & {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date
};

export type DataModelingTest8<TArgs, TReturn> = {
  args: TArgs;
  context: {
    user?: {
      id: string;
      name: string;
      email?: string;
      createdAt: Date
    };
    dataSources: {
      products: {
        sku: "";
        price: number;
        variants: {
          color: string;
          size: "S" | "M" | "L"
        }[]
      }[];
      users: {
        id: string;
        name: string;
        email?: string;
        createdAt: Date
      }[]
    }
  };
  resolve: (() => TReturn)
};

export type DataModelingTest9 = {
  mappings: {
    properties: {
      [k: string]: {
        type: "text" | "keyword" | "long" | "date";
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

export type DataModelingTest10 = {
  key: string;
  fields: Record<string, string | number>;
  ttl?: number
};

export type DataModelingTest11<T> = {
  type: string;
  id: string;
  attributes: T;
  relationships?: {
    [k: string]: {
      data: {
        type: string;
        id: string
      } | Array<{
        type: string;
        id: string
      }>
    }
  }
};

export type DataModelingTest12<T> = {
  key: string;
  value: T;
  headers: Record<string, string>;
  timestamp: number
};

export type DataModelingTest13 = {
  type: "object";
  required: string[];
  properties: {
    [k: string]: {
      type: "string" | "number" | "boolean" | "object";
      format?: "date-time" | "email" | "uri";
      enum?: string[]
    }
  }
};

export type DataModelingTest14<T> = T & {
  __firestore: {
    path: string;
    createTime: Date;
    updateTime: Date
  }
};

export type DataModelingTest15 = {
  fields: {
    [k: string]: {
      type: "string" | "int32" | "double" | "bool" | "message";
      repeated?: boolean;
      optional?: boolean
    }
  }
};

export type DataModelingTest16 = {
  header: string[];
  rows: Array<Record<string, string>>;
  errors: Array<{
    row: number;
    message: string
  }>
};

export type DataModelingTest17 = {
  up: ((queryRunner: {
    query: ((sql: string, parameters?: unknown[]) => Promise<void>)
  }) => Promise<void>);
  down: ((queryRunner: {
    query: ((sql: string, parameters?: unknown[]) => Promise<void>)
  }) => Promise<void>);
  timestamp: number
};

export type DataModelingTest18<T> = {
  define: ((modelName: string, attributes: {
    [k: string]: {
      type: "STRING" | "INTEGER" | "DATE" | "BOOLEAN";
      allowNull?: boolean;
      primaryKey?: boolean
    }
  }) => {
    new (): T;
    findAll: ((options?: never) => Promise<T[]>)
  });
  associations: {
    [k: string]: {
      associationType: "BelongsTo" | "HasMany" | "BelongsToMany";
      target: {
        new (): never;
        findAll: ((options?: never) => Promise<never[]>)
      }
    }
  }
};

export type DataModelingTest19 = {
  id: string;
  name: string;
  email?: string;
  createdAt: Date
} & {
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string
};

export type DataModelingTest20 = {
  subject: string[];
  action: string[];
  object: string[];
  conditions: {
    [k: string]: never
  }
};

export type DataModelingTest21 = Omit<{
  id: string;
  name: string;
  email?: string;
  createdAt: Date
}, "createdAt" | "updatedAt"> & {
  passwordHash: string;
  lastLogin?: Date
};

export type DataModelingTest22 = {
  score: number;
  member: string
};

export type DataModelingTest23 = {
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

export type DataModelingTest24 = {
  "xmlns:xsd": "http://www.w3.org/2001/XMLSchema";
  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "#content": Array<{
    "@_name": string;
    "#text": string
  }>
};

export type DataModelingTest25 = {
  path: (string | number)[];
  message: string;
  code: "invalid_type" | "custom" | "too_small";
  expected?: string;
  received?: string
};
