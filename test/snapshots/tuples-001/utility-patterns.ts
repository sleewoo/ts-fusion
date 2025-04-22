export type UtilityPatternsTest1<T> = [
  T,
  Error | null
];

export type UtilityPatternsTest2 = [
  init: (() => void),
  dispose: (() => void)
];

export type UtilityPatternsTest3<T> = [
  state: T,
  setState: ((newState: T) => void)
];

export type UtilityPatternsTest4<T> = [
  current: T,
  previous: T
];

export type UtilityPatternsTest5 = [
  id: string,
  ...dependencies: never[]
];

export type UtilityPatternsTest6 = [
  timestamp: Date,
  ...data: unknown[]
];

export type UtilityPatternsTest7 = [
  string,
  ...(number | boolean)[]
];

export type UtilityPatternsTest8 = [
  readonly string[],
  mutable: number[]
];

export type UtilityPatternsTest9<T> = [
  Promise<T /** unresolved */>,
  AbortController
];

export type UtilityPatternsTest10 = [
  key: string,
  handler: ((...args: never[]) => void),
  options?: {
    once?: boolean
  }
];

export type UtilityPatternsTest11<T> = [
  factory: (() => T),
  ...dependencies: never[]
];

export type UtilityPatternsTest12<T> = [
  key: keyof T,
  defaultValue: T[keyof T]
];

export type UtilityPatternsTest13<T> = [
  T,
  ...Partial<T /** unresolved */>[]
];

export type UtilityPatternsTest14<T> = [
  T,
  ...(T extends unknown[] ? T[number][] : never)
];

export type UtilityPatternsTest15<T> = [
  T,
  ...(keyof T)[]
];

export type UtilityPatternsTest16<T> = [
  T,
  ...(T extends object ? [keyof T] : never)
];

export type UtilityPatternsTest17<T> = [
  T,
  ...(T extends Date ? [number] : [string])
];

export type UtilityPatternsTest18<T> = [
  T,
  ...(T extends Error ? [string] : [number])
];

export type UtilityPatternsTest19<T> = [
  T,
  ...(T extends Map<infer K, infer V> ? [K, V] : never)
];

export type UtilityPatternsTest20<T> = [
  T,
  ...(T extends Set<infer V> ? [V] : never)
];

export type UtilityPatternsTest21<T> = [
  T,
  ...(T extends Promise<infer V> ? [V] : never)
];

export type UtilityPatternsTest22<T> = [
  T,
  ...(T extends (...args: never) => never ? Parameters<T> : never)
];

export type UtilityPatternsTest23<T> = [
  T,
  ...(T extends new (
      ...args: never
    ) => never
      ? ConstructorParameters<T>
      : never)
];

export type UtilityPatternsTest24<T> = [
  T,
  ...(T extends Array<infer U> ? [U] : never)
];

export type UtilityPatternsTest25<T> = [
  T,
  ...(T extends Record<string, infer V> ? [V] : never)
];
