import type {
  ErrorResult,
  PaginationMeta,
  HypermediaLink,
  FieldError,
} from "./object-types";

// 1. Basic REST success response
export type ApiResponseTest1<T> = {
  data: T;
  status: number;
  headers: Record<string, string>;
};

// 2. Error response format
export type ApiResponseTest2 = {
  error: ErrorResult;
  status: number;
  debug?: {
    timestamp: Date;
    stack?: string;
  };
};

// 3. Paginated response
export type ApiResponseTest3<T> = {
  items: T[];
  meta: PaginationMeta;
  links: HypermediaLink[];
};

// 4. GraphQL-style response
export type ApiResponseTest4<T> = {
  data?: T;
  errors?: Array<{
    message: string;
    path: (string | number)[];
    extensions?: Record<string, unknown>;
  }>;
};

// 5. JSON:API specification
export type ApiResponseTest5<T> = {
  jsonapi: { version: string };
  data: Array<{
    type: string;
    id: string;
    attributes: T;
    relationships?: Record<
      string,
      {
        data:
          | { type: string; id: string }
          | Array<{ type: string; id: string }>;
      }
    >;
  }>;
  included?: unknown[];
};

// 6. OData v4 response
export type ApiResponseTest6<T> = {
  "@odata.context": string;
  "@odata.count"?: number;
  value: T[];
  "@odata.nextLink"?: string;
};

// 7. tRPC-style response
export type ApiResponseTest7<T> = {
  result: {
    data: T;
  };
  context?: {
    req?: unknown;
    res?: unknown;
  };
};

// 8. Bulk operation result
export type ApiResponseTest8<T> = {
  succeeded: Array<{
    item: T;
    id: string;
  }>;
  failed: Array<{
    item: T;
    error: ErrorResult;
  }>;
};

// 9. Streaming response
export type ApiResponseTest9<T> = {
  stream: AsyncIterable<T>;
  headers: {
    "Content-Type": "application/x-ndjson";
    "Transfer-Encoding": "chunked";
  };
};

// 10. Form validation error
export type ApiResponseTest10 = {
  code: "validation_failed";
  errors: FieldError[];
  status: 422;
};

// 11. HAL (Hypertext Application Language)
export type ApiResponseTest11<T> = {
  _embedded: {
    items: T[];
  };
  _links: Record<string, HypermediaLink>;
  page: PaginationMeta;
};

// 12. Problem Details (RFC 7807)
export type ApiResponseTest12 = {
  [key: `_${number}`]: ApiResponseTest10;
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string;
};

// 13. Batch response
export type ApiResponseTest13 = Array<
  | { status: 200; body: unknown }
  | {
      status: 207;
      body: { results: Array<ApiResponseTest1<unknown> | ApiResponseTest2> };
    }
>;

// 14. Server-Sent Events (SSE)
export type ApiResponseTest14<T> = {
  data: T;
  event?: string;
  id?: string;
  retry?: number;
}[];

// 15. Websocket acknowledgement
export type ApiResponseTest15<T> = {
  correlationId: string;
  timestamp: Date;
  payload: T | ErrorResult;
};

// 16. CQRS-style response
export type ApiResponseTest16<T> = {
  commandId: string;
  ack: boolean;
  result?: T;
  errors?: ErrorResult[];
};

// 17. Health check response
export type ApiResponseTest17 = {
  status: "ok" | "degraded" | "down";
  checks: Record<
    string,
    {
      status: "pass" | "fail" | "warn";
      output?: string;
      duration: number;
    }
  >;
};

// 18. Pre-signed URL response
export type ApiResponseTest18 = {
  url: string;
  method: "PUT" | "GET";
  headers: Record<string, string>;
  expiresAt: Date;
  fields?: Record<string, string>;
};

// 19. Rate limit headers
export type ApiResponseTest19 = {
  "X-RateLimit-Limit": number;
  "X-RateLimit-Remaining": number;
  "X-RateLimit-Reset": number;
  "Retry-After"?: number;
};

// 20. Deprecation notice
export type ApiResponseTest20 = {
  warning: {
    code: 299;
    text: string;
    sunset?: Date;
    link?: string;
  };
};

// 21. Versioned response
export type ApiResponseTest21<T> = {
  version: string;
  data: T;
  deprecated?: boolean;
  migrationGuide?: string;
};

// 22. Conditional response
export type ApiResponseTest22<T> =
  | { status: 200; body: T; fresh: boolean }
  | { status: 304; headers: { ETag: string } };

// 23. Preflight response
export type ApiResponseTest23 = {
  allowedOrigins: string[];
  allowedMethods: string[];
  allowedHeaders: string[];
  maxAge?: number;
  allowCredentials?: boolean;
};

// 24. Range response
export type ApiResponseTest24 = {
  status: 206;
  contentRange: string;
  acceptRanges: "bytes" | "none";
  contentLength: number;
  body: ArrayBuffer;
};

// 25. Index response
export type ApiResponseTest25 = {
  endpoints: Array<{
    path: string;
    methods: string[];
    description?: string;
    parameters?: Array<{
      name: string;
      in: "query" | "path" | "header";
      required?: boolean;
    }>;
  }>;
};
