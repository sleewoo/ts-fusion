export type ConfigurationTest1 = {
  entry: string | string[] | Record<string, string>;
  output: {
    path: string;
    filename: string;
    publicPath?: string
  };
  module: {
    rules: {
      test: RegExp;
      use: string[];
      exclude?: RegExp[]
    }[]
  };
  plugins: {
    name: string;
    options?: Record<string, unknown>;
    enabled?: boolean
  }[];
  mode: "development" | "production"
};

export type ConfigurationTest2 = {
  presets: Array<string | [
    string,
    Record<string, unknown>
  ]>;
  plugins: Array<string | [
    string,
    symbol
  ]>;
  env?: Record<string, unknown>;
  targets?: string | Record<string, string>
};

export type ConfigurationTest3 = {
  type: "postgres" | "mysql" | "sqlite";
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl?: boolean
} & {
  entities: {
    name: string;
    columns: {
      name: string;
      type: string;
      nullable: boolean;
      primary: boolean
    }[];
    relations: never[]
  }[];
  migrations: string[];
  logging: boolean | ("query" | "error")[];
  synchronize: boolean
};

export type ConfigurationTest4 = {
  testMatch: string[];
  transform: Record<string, string>;
  coverage: {
    thresholds: {
      lines: number;
      functions: number;
      branches: number
    };
    exclude: string[]
  };
  setupFiles: string[]
};

export type ConfigurationTest5 = {
  extends: string[];
  plugins: string[];
  rules: Record<string, "off" | "warn" | "error">;
  overrides: Array<{
    files: string[];
    rules: Record<string, unknown>
  }>
};

export type ConfigurationTest6 = {
  version: "3.8";
  services: Record<string, {
    image: string;
    ports: string[];
    environment: Record<string, string>;
    volumes?: string[]
  }>;
  networks: Record<string, {
    driver: string
  }>
};

export type ConfigurationTest7 = {
  stages: string[];
  jobs: Record<string, {
    stage: string;
    script: string[];
    artifacts?: {
      paths: string[]
    };
    only?: {
      branches: string[]
    }
  }>
};

export type ConfigurationTest8<T extends string> = Record<T /** unresolved */, {
  description: string;
  enabled: boolean;
  rollout?: number;
  constraints?: Record<string, unknown>
}>;

export type ConfigurationTest9 = {
  windowMs: number;
  max: number;
  standardHeaders: boolean;
  legacyHeaders: boolean;
  skip: ((req: unknown) => boolean)
};

export type ConfigurationTest10 = Record<string, {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  scopes?: string[]
}>;

export type ConfigurationTest11 = {
  transports: Array<{
    type: "console" | "file" | "http";
    level: "error" | "warn" | "info" | "debug";
    format: "json" | "text"
  }>;
  redact: string[];
  sampling?: {
    rate: number
  }
};

export type ConfigurationTest12 = {
  metrics: {
    enabled: boolean;
    endpoint?: string;
    interval: number
  };
  alerts: Array<{
    condition: string;
    channels: string[];
    severity: "critical" | "warning"
  }>
};

export type ConfigurationTest13 = {
  ttl: number;
  staleWhileRevalidate?: number;
  type: "memory" | "redis" | "memcached";
  clusters?: Array<{
    host: string;
    port: number
  }>;
  compression?: boolean
};

export type ConfigurationTest14 = {
  defaultLocale: string;
  locales: string[];
  loaders: Array<{
    pattern: string;
    format: "json" | "yaml" | "po"
  }>;
  fallback: Record<string, string>
};

export type ConfigurationTest15 = {
  colorSchemes: Record<string, {
    primary: string;
    secondary: string;
    text: string
  }>;
  spacing: {
    unit: number;
    multipliers: number[]
  };
  typography: Record<string, {
    fontSize: number;
    fontWeight: number
  }>
};

export type ConfigurationTest16 = {
  endpoints: Array<{
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    cache?: {
      ttl: number;
      headers: string[]
    };
    rateLimit?: {
      windowMs: number;
      max: number;
      standardHeaders: boolean;
      legacyHeaders: boolean;
      skip: ((req: unknown) => boolean)
    }
  }>
};

export type ConfigurationTest17 = {
  cors: {
    origins: string[];
    methods: string[];
    headers: string[]
  };
  csp: {
    directives: Record<string, string[]>
  };
  permissionsPolicy: Record<string, string[]>
};

export type ConfigurationTest18 = {
  driver: "redis" | "sqs" | "rabbitmq";
  queues: Record<string, {
    timeout: number;
    retries: number;
    dlq?: string;
    concurrency: number
  }>
};

export type ConfigurationTest19 = {
  default: "s3" | "gcs" | "local";
  buckets: Record<string, {
    driver: string;
    region?: string;
    credentials: {
      key: string;
      secret: string
    }
  }>
};

export type ConfigurationTest20 = {
  routes: Array<{
    path: string;
    component: string;
    guards?: string[]
  }>;
  fallback: string
};

export type ConfigurationTest21 = {
  dsn: string;
  environment: "production" | "staging";
  release: string;
  tracing: {
    sampleRate: number;
    tracesSampler: ((context: unknown) => number)
  }
};

export type ConfigurationTest22 = {
  targets: Record<string, {
    include: string[];
    exclude: string[];
    format: "esm" | "cjs" | "umd";
    minify?: boolean;
    sourcemap: boolean
  }>
};

export type ConfigurationTest23 = {
  schemas: Record<string, {
    type: "object" | "array";
    fields: Record<string, {
      type: string;
      required: boolean;
      validate?: ((value: unknown) => boolean)
    }>
  }>
};

export type ConfigurationTest24 = Record<string, {
  roles: string[];
  conditions?: Record<string, unknown>;
  override?: boolean
}>;

export type ConfigurationTest25 = {
  plugins: Array<{
    id: string;
    entryPoint: string;
    configSchema?: {
      schemas: Record<string, {
        type: "object" | "array";
        fields: Record<string, {
          type: string;
          required: boolean;
          validate?: ((value: unknown) => boolean)
        }>
      }>
    }["schemas"];
    dependencies?: string[]
  }>;
  registry: Record<string, {
    version: string;
    enabled: boolean
  }>
};
