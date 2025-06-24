// @license MIT
// Contains AI-generated test patterns

import type { TypesProduct, TypesUser } from "./types";

export type OptionalElementsTest1 = [string, number?];

export type OptionalElementsTest2 = [first?: string, second?: number];

export type OptionalElementsTest3 = [start: Date, end?: Date];

export type OptionalElementsTest4 = [prefix: string, ...middle: number[]];

export type OptionalElementsTest5 = [...start: string[], end: boolean];

export type OptionalElementsTest6<T> = [metadata?: T, ...data: boolean[]];

export type OptionalElementsTest7 = [
  config?: readonly [boolean, string],
  override?: [number?],
];

export type OptionalElementsTest8 = readonly [id: string, timestamp?: number];

export type OptionalElementsTest9 = [
  readonly [TypesUser?, TypesProduct?],
  editable?: [string, number?],
];

export type OptionalElementsTest10<T> = [
  primary?: T,
  secondary?: T,
  ...details: T[],
];

export type OptionalElementsTest11 = [
  validator?: (input: unknown) => boolean,
  onSuccess?: () => void,
];

export type OptionalElementsTest12<T> = [id: string, payload?: T];

export type OptionalElementsTest13 = [
  source?: string | [number, number],
  transform?: () => never,
];

export type OptionalElementsTest14 = [
  coordinates?: [x?: number, y?: number],
  metadata?: [author?: string],
];

export type OptionalElementsTest15<T> = [
  combined?: T & { timestamp: Date },
  partial?: Partial<T>,
];

export type OptionalElementsTest16<T extends Array<unknown>> = [
  ...T,
  ...TypesUser[],
];

export type OptionalElementsTest17 = [
  header: string,
  ...TypesProduct[],
  footer: string,
];

export type OptionalElementsTest18<T> = [root?: T, depth?: number];

export type OptionalElementsTest19 = [
  format?: "json" | "csv",
  ...dataEntries: [string, unknown][],
];

export type OptionalElementsTest20<T> = [initial?: Promise<T>, fallback?: T];

export type OptionalElementsTest21<T> = [
  primary?: T[keyof T],
  secondary?: keyof T,
];

export type OptionalElementsTest22<T> = [
  value?: T extends string ? string : number,
  ...options: never[],
];

export type OptionalElementsTest23<T> = [
  ...(T extends never[] ? [first?: T[0]] : never),
];

export type OptionalElementsTest24 = [
  ...config: [port?: number],
  ...features: ("logging" | "caching")[],
];

export type OptionalElementsTest25<T> = [self?: T, sibling?: [T?, T?]];
