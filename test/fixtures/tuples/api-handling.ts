// @license MIT
// Contains AI-generated test patterns

import type {
  TypesErrorResult,
  TypesHttpMethod,
  TypesHttpResponse,
  TypesMiddleware,
  TypesProduct,
  TypesUser,
  TypesValidator,
} from "./types";

export type ApiHandlingTest1 = [
  TypesHttpMethod,
  URL,
  ...headers: [string, string][],
];

export type ApiHandlingTest2 = [
  request: { query: string },
  response: TypesHttpResponse<TypesProduct[]>,
];

export type ApiHandlingTest3 = [
  params: [id: string, version: number],
  body?: unknown,
];

export type ApiHandlingTest4 = [
  cacheKey: string,
  ttl: number,
  ...dependencies: string[],
];

export type ApiHandlingTest5 = [TypesErrorResult, ...stackTrace: string[]];

export type ApiHandlingTest6 = [readonly [string, number], ...boolean[]];

export type ApiHandlingTest7 = [
  baseUrl: string,
  ...endpoints: [...[string, TypesHttpMethod][]],
];

export type ApiHandlingTest8<T> = [T, ...(Error | null)[]];

export type ApiHandlingTest9 = [timestamp: Date, ...data: [...unknown[]]];

export type ApiHandlingTest10 = [
  requestId: string,
  ...[Promise<Response>, AbortController],
];

export type ApiHandlingTest11 = [
  route: string,
  ...handlers: [middleware: TypesMiddleware[], handler: () => void],
];

export type ApiHandlingTest12<T> = [
  bodyParser: (raw: string) => T,
  ...validators: TypesValidator<T>[],
];

export type ApiHandlingTest13 = [
  endpoint: string,
  ...cacheStrategies: [maxAge: number, staleWhileRevalidate?: number][],
];

export type ApiHandlingTest14 = [
  request: Request,
  ...interceptors: [(req: Request) => Request][],
];

export type ApiHandlingTest15 = [
  response: Response,
  ...transformers: [(res: Response) => Response][],
];

export type ApiHandlingTest16 = [
  errorHandler: (err: Error) => void,
  ...errorTypes: [typeof Error][],
];

export type ApiHandlingTest17<T> = [
  baseQuery: (args: T) => Promise<never>,
  ...endpointDefinitions: [...never[]],
];

export type ApiHandlingTest18 = [
  statusCode: number,
  ...successResponses: [TypesProduct[], TypesUser][],
];

export type ApiHandlingTest19 = [
  pagination: { page: number },
  ...results: TypesProduct[][],
];

export type ApiHandlingTest20 = [
  rateLimit: number,
  ...windowSizes: [1 | 60 | 3600, number][],
];

export type ApiHandlingTest21 = [
  authToken?: string,
  ...scopes: ("read" | "write")[],
];

export type ApiHandlingTest22 = [
  contentType: string,
  ...serializers: [(data: never) => string][],
];

export type ApiHandlingTest23 = [
  retryCount: number,
  ...backoffStrategies: [number[]],
];

export type ApiHandlingTest24 = [
  timeout: number,
  ...fallbacks: [() => Promise<never>][],
];

export type ApiHandlingTest25 = [
  circuitBreaker: { threshold: number },
  ...stateHandlers: [onOpen: () => void, onClose: () => void],
];
