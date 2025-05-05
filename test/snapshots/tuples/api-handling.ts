import { assert, type Equals } from "tsafe";

import type {
  ApiHandlingTest1,
  ApiHandlingTest2,
  ApiHandlingTest3,
  ApiHandlingTest4,
  ApiHandlingTest5,
  ApiHandlingTest6,
  ApiHandlingTest7,
  ApiHandlingTest8,
  ApiHandlingTest9,
  ApiHandlingTest10,
  ApiHandlingTest11,
  ApiHandlingTest12,
  ApiHandlingTest13,
  ApiHandlingTest14,
  ApiHandlingTest15,
  ApiHandlingTest16,
  ApiHandlingTest17,
  ApiHandlingTest18,
  ApiHandlingTest19,
  ApiHandlingTest20,
  ApiHandlingTest21,
  ApiHandlingTest22,
  ApiHandlingTest23,
  ApiHandlingTest24,
  ApiHandlingTest25,
} from "@/fixtures/tuples/api-handling.ts";

type ApiHandlingTest1Flat = [
  (("GET") | ("POST") | ("PUT") | ("DELETE")),
  URL,
  ...headers: [
    string,
    string
  ][]
];

type ApiHandlingTest2Flat = [
  request: {
    query: string
  },
  response: [
    status: number,
    body: {
      sku: string;
      price: number
    }[],
    headers?: Record<string, string>
  ]
];

type ApiHandlingTest3Flat = [
  params: [
    id: string,
    version: number
  ],
  body?: unknown
];

type ApiHandlingTest4Flat = [
  cacheKey: string,
  ttl: number,
  ...dependencies: string[]
];

type ApiHandlingTest5Flat = [
  {
    code: number;
    message: string
  },
  ...stackTrace: string[]
];

type ApiHandlingTest6Flat = [
  readonly [
    string,
    number
  ],
  ...boolean[]
];

type ApiHandlingTest7Flat = [
  baseUrl: string,
  ...endpoints: [
    ...[
      string,
      (("GET") | ("POST") | ("PUT") | ("DELETE"))
    ][]
  ]
];

type ApiHandlingTest8Flat<T> = [
  T,
  ...(((Error) | (null)))[]
];

type ApiHandlingTest9Flat = [
  timestamp: Date,
  ...data: [
    ...unknown[]
  ]
];

type ApiHandlingTest10Flat = [
  requestId: string,
  ...[
    Promise<Response>,
    AbortController
  ]
];

type ApiHandlingTest11Flat = [
  route: string,
  ...handlers: [
    middleware: ((next: (() => void)) => (() => void))[],
    handler: (() => void)
  ]
];

type ApiHandlingTest12Flat<T> = [
  bodyParser: ((raw: string) => T),
  ...validators: ((input: unknown) => T)[]
];

type ApiHandlingTest13Flat = [
  endpoint: string,
  ...cacheStrategies: [
    maxAge: number,
    staleWhileRevalidate?: number
  ][]
];

type ApiHandlingTest14Flat = [
  request: Request,
  ...interceptors: [
    ((req: Request) => Request)
  ][]
];

type ApiHandlingTest15Flat = [
  response: Response,
  ...transformers: [
    ((res: Response) => Response)
  ][]
];

type ApiHandlingTest16Flat = [
  errorHandler: ((err: Error) => void),
  ...errorTypes: [
    typeof Error
  ][]
];

type ApiHandlingTest17Flat<T> = [
  baseQuery: ((args: T) => Promise<never>),
  ...endpointDefinitions: [
    ...never[]
  ]
];

type ApiHandlingTest18Flat = [
  statusCode: number,
  ...successResponses: [
    {
      sku: string;
      price: number
    }[],
    {
      id: string;
      name: string
    }
  ][]
];

type ApiHandlingTest19Flat = [
  pagination: {
    page: number
  },
  ...results: {
    sku: string;
    price: number
  }[][]
];

type ApiHandlingTest20Flat = [
  rateLimit: number,
  ...windowSizes: [
    ((1) | (60) | (3600)),
    number
  ][]
];

type ApiHandlingTest21Flat = [
  authToken?: string,
  ...scopes: ((("read") | ("write")))[]
];

type ApiHandlingTest22Flat = [
  contentType: string,
  ...serializers: [
    ((data: never) => string)
  ][]
];

type ApiHandlingTest23Flat = [
  retryCount: number,
  ...backoffStrategies: [
    number[]
  ]
];

type ApiHandlingTest24Flat = [
  timeout: number,
  ...fallbacks: [
    (() => Promise<never>)
  ][]
];

type ApiHandlingTest25Flat = [
  circuitBreaker: {
    threshold: number
  },
  ...stateHandlers: [
    onOpen: (() => void),
    onClose: (() => void)
  ]
];


assert<
  Equals<
    ApiHandlingTest1,
    ApiHandlingTest1Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest2,
    ApiHandlingTest2Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest3,
    ApiHandlingTest3Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest4,
    ApiHandlingTest4Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest5,
    ApiHandlingTest5Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest6,
    ApiHandlingTest6Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest7,
    ApiHandlingTest7Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest8<never>,
    ApiHandlingTest8Flat<never>
  >
>;
assert<
  Equals<
    ApiHandlingTest9,
    ApiHandlingTest9Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest10,
    ApiHandlingTest10Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest11,
    ApiHandlingTest11Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest12<never>,
    ApiHandlingTest12Flat<never>
  >
>;
assert<
  Equals<
    ApiHandlingTest13,
    ApiHandlingTest13Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest14,
    ApiHandlingTest14Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest15,
    ApiHandlingTest15Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest16,
    ApiHandlingTest16Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest17<never>,
    ApiHandlingTest17Flat<never>
  >
>;
assert<
  Equals<
    ApiHandlingTest18,
    ApiHandlingTest18Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest19,
    ApiHandlingTest19Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest20,
    ApiHandlingTest20Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest21,
    ApiHandlingTest21Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest22,
    ApiHandlingTest22Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest23,
    ApiHandlingTest23Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest24,
    ApiHandlingTest24Flat
  >
>;
assert<
  Equals<
    ApiHandlingTest25,
    ApiHandlingTest25Flat
  >
>;
