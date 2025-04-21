export type TypesUser = {
  id: string;

  name: string;
};

export type TypesProduct = {
  sku: string;

  price: number;
};

export type TypesErrorResult = {
  code: number;

  message: string;
};

export type TypesHttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type TypesHttpResponse<T> = [
  status: number,
  body: T,
  headers?: Record<string, string>,
];

export type TypesReducerAction<T> = { type: string; payload?: T };

export type TypesMiddleware = (next: () => void) => () => void;

export type TypesValidator<T> = (input: unknown) => T;

export type TypesTransformer<T, U> = (input: T) => U;

export type TypesComparator<T> = (a: T, b: T) => number;
