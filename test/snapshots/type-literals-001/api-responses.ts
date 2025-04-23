export type ApiResponseTest1<T> = {
  data: T;
  status: number;
  headers: Record<string, string>
};

export type ApiResponseTest2 = {
  error: {
    code: string;
    message: string;
    details?: Array<{
      field?: string;
      issue: string
    }>
  };
  status: number;
  debug?: {
    timestamp: Date;
    stack?: string
  }
};

export type ApiResponseTest3<T> = {
  items: T[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    nextCursor?: string;
    prevCursor?: string
  };
  links: {
    href: string;
    rel: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    type?: string
  }[]
};

export type ApiResponseTest4<T> = {
  data?: T;
  errors?: Array<{
    message: string;
    path: (string | number)[];
    extensions?: Record<string, unknown>
  }>
};

export type ApiResponseTest5<T> = {
  jsonapi: {
    version: string
  };
  data: Array<{
    type: string;
    id: string;
    attributes: T;
    relationships?: Record<string, {
      data: {
        type: string;
        id: string
      } | Array<{
        type: string;
        id: string
      }>
    }>
  }>;
  included?: unknown[]
};

export type ApiResponseTest6<T> = {
  "@odata.context": string;
  "@odata.count"?: number;
  value: T[];
  "@odata.nextLink"?: string
};

export type ApiResponseTest7<T> = {
  result: {
    data: T
  };
  context?: {
    req?: unknown;
    res?: unknown
  }
};

export type ApiResponseTest8<T> = {
  succeeded: Array<{
    item: T;
    id: string
  }>;
  failed: Array<{
    item: T;
    error: {
      code: string;
      message: string;
      details?: Array<{
        field?: string;
        issue: string
      }>
    }
  }>
};

export type ApiResponseTest9<T> = {
  stream: AsyncIterable<T> /** unresolved */;
  headers: {
    "Content-Type": "application/x-ndjson";
    "Transfer-Encoding": "chunked"
  }
};

export type ApiResponseTest10 = {
  code: "validation_failed";
  errors: {
    path: (string | number)[];
    message: string;
    code: "missing" | "invalid" | "conflict"
  }[];
  status: 422
};

export type ApiResponseTest11<T> = {
  _embedded: {
    items: T[]
  };
  _links: Record<string, {
    href: string;
    rel: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    type?: string
  }>;
  page: {
    total: number;
    page: number;
    pageSize: number;
    nextCursor?: string;
    prevCursor?: string
  }
};

export type ApiResponseTest12 = {
  [k: `_${number}`]: {
    code: "validation_failed";
    errors: {
      path: (string | number)[];
      message: string;
      code: "missing" | "invalid" | "conflict"
    }[];
    status: 422
  };
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string
};

export type ApiResponseTest13 = Array<{
  status: 200;
  body: unknown
} | {
  status: 207;
  body: {
    results: Array<{
      data: unknown;
      status: number;
      headers: Record<string, string>
    } | {
      error: {
        code: string;
        message: string;
        details?: Array<{
          field?: string;
          issue: string
        }>
      };
      status: number;
      debug?: {
        timestamp: Date;
        stack?: string
      }
    }>
  }
}>;

export type ApiResponseTest14<T> = {
  data: T;
  event?: string;
  id?: string;
  retry?: number
}[];

export type ApiResponseTest15<T> = {
  correlationId: string;
  timestamp: Date;
  payload: T | {
    code: string;
    message: string;
    details?: Array<{
      field?: string;
      issue: string
    }>
  }
};

export type ApiResponseTest16<T> = {
  commandId: string;
  ack: boolean;
  result?: T;
  errors?: {
    code: string;
    message: string;
    details?: Array<{
      field?: string;
      issue: string
    }>
  }[]
};

export type ApiResponseTest17 = {
  status: "ok" | "degraded" | "down";
  checks: Record<string, {
    status: "pass" | "fail" | "warn";
    output?: string;
    duration: number
  }>
};

export type ApiResponseTest18 = {
  url: string;
  method: "PUT" | "GET";
  headers: Record<string, string>;
  expiresAt: Date;
  fields?: Record<string, string>
};

export type ApiResponseTest19 = {
  "X-RateLimit-Limit": number;
  "X-RateLimit-Remaining": number;
  "X-RateLimit-Reset": number;
  "Retry-After"?: number
};

export type ApiResponseTest20 = {
  warning: {
    code: 299;
    text: string;
    sunset?: Date;
    link?: string
  }
};

export type ApiResponseTest21<T> = {
  version: string;
  data: T;
  deprecated?: boolean;
  migrationGuide?: string
};

export type ApiResponseTest22<T> = {
  status: 200;
  body: T;
  fresh: boolean
} | {
  status: 304;
  headers: {
    ETag: string
  }
};

export type ApiResponseTest23 = {
  allowedOrigins: string[];
  allowedMethods: string[];
  allowedHeaders: string[];
  maxAge?: number;
  allowCredentials?: boolean
};

export type ApiResponseTest24 = {
  status: 206;
  contentRange: string;
  acceptRanges: "bytes" | "none";
  contentLength: number;
  body: ArrayBuffer
};

export type ApiResponseTest25 = {
  endpoints: Array<{
    path: string;
    methods: string[];
    description?: string;
    parameters?: Array<{
      name: string;
      in: "query" | "path" | "header";
      required?: boolean
    }>
  }>
};
