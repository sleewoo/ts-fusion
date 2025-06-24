// @license MIT
// Contains AI-generated test patterns

import type {
  TypesComparator,
  TypesTransformer,
  TypesValidator,
} from "./types";

export type DataTransformationTest1<T, U> = [
  input: unknown,
  ...validators: TypesValidator<T>[],
  output: U,
];

export type DataTransformationTest2<T, U> = [
  source: T,
  ...pipes: TypesTransformer<T, U>[],
  destination: U,
];

export type DataTransformationTest3 = [
  readonly [...string[]],
  mutable: [...number[]],
];

export type DataTransformationTest4 = [
  threshold: number,
  ...[...samples: number[]],
];

export type DataTransformationTest5<T> = [
  T extends string ? "string" : "other",
  ...T[],
];

export type DataTransformationTest6 = [
  format: "csv" | "json",
  ...data: [...(string | number)[]],
];

export type DataTransformationTest7 = [
  template: string,
  ...values: [...unknown[]],
];

export type DataTransformationTest8 = [
  start: Date,
  end: Date,
  ...milestones: [...Date[]],
];

export type DataTransformationTest9 = [
  header: [...string[]],
  ...rows: [...[...number[]][]],
];

export type DataTransformationTest10 = [
  primaryKey: string,
  ...relations: [string, string][],
];

export type DataTransformationTest11<T, U> = [
  input: T,
  ...mappers: [(item: T) => U][],
  comparator: TypesComparator<U>,
];

export type DataTransformationTest12<T, U> = [
  rawData: unknown,
  ...transformations: [TypesTransformer<T, U>, ...never[]],
];

export type DataTransformationTest13<T> = [
  dataset: T[],
  ...splitPoints: number[],
];

export type DataTransformationTest14<T, U> = [
  encoder: (input: T) => U,
  decoder: (input: U) => T,
  ...samples: T[],
];

export type DataTransformationTest15 = [
  compression: "gzip" | "brotli",
  ...chunks: Uint8Array[],
];

export type DataTransformationTest16<T, U> = [
  normalizer: (input: T) => U,
  denormalizer: (input: U) => T,
  ...data: T[],
];

export type DataTransformationTest17<T> = [
  schema: unknown,
  ...migrations: [(old: T) => T][],
];

export type DataTransformationTest18<T, U> = [
  sourceFormat: string,
  targetFormat: string,
  ...converters: [TypesTransformer<T, U>][],
];

export type DataTransformationTest19<T> = [
  input: T,
  ...validationSteps: [TypesValidator<T>, ...never[]],
];

export type DataTransformationTest20<T, U, V> = [
  merger: (a: T, b: U) => V,
  ...items: [T, U][],
];

export type DataTransformationTest21<T> = [
  parser: (raw: string) => T,
  serializer: (data: T) => string,
  ...rawData: string[],
];

export type DataTransformationTest22<T> = [
  diffAlgorithm: (a: T, b: T) => never,
  ...versions: T[],
];

export type DataTransformationTest23<T> = [
  hashFunction: (data: T) => string,
  ...dataBlocks: T[],
];

export type DataTransformationTest24<T> = [sortKey: keyof T, ...items: T[]];

export type DataTransformationTest25<T> = [
  groupBy: (item: T) => string,
  ...items: T[],
];
