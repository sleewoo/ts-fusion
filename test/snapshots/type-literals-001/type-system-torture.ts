export type TypeTortureTest1<T> = T extends object ? { [K in keyof T]: Record<number, T[K /** unresolved */]> } : T extends (infer U)[] ? U /** unresolved */[] : T;

export type TypeTortureTest2<T, Path extends string> = Path extends `${infer Head}.${infer Tail}` ? Head /** unresolved */ extends keyof T ? [
  T[Head /** unresolved */],
  Tail /** unresolved */
] : never : Path extends keyof T ? T[Path] : never;

export type TypeTortureTest3<T> = { [K in keyof T as `get${Capitalize<string & K /** unresolved */>}[${string}]`]: (() => T[K /** unresolved */]) } & { [K in keyof T as `set${Capitalize<string & K /** unresolved */>}`]: ((value: T[K /** unresolved */]) => void) };

export type TypeTortureTest4<T> = { [K in keyof T]: T[K /** unresolved */] extends object ? [
  T[K /** unresolved */]
] : T[K /** unresolved */] extends (infer U)[] ? U /** unresolved */[] : new (...args: unknown[]) => T /** unresolved */[K /** unresolved */] };

export type TypeTortureTest5<T extends []> = T extends [
  never,
  ...infer Rest
] ? Rest /** unresolved */ : never;

export type TypeTortureTest6<T, Keys extends keyof T /** unresolved */> = { [K in keyof T]: K /** unresolved */ extends Keys ? T[K /** unresolved */] : Record<string, T[K /** unresolved */]> };

export type TypeTortureTest7<Fns extends (((arg: unknown) => never))[]> = Fns extends [
  infer F,
  ...infer Rest
] ? F /** unresolved */ extends ((arg: infer A) => infer B) ? Rest /** unresolved */ extends [
  ((arg: B /** unresolved */) => never),
  ...[]
] ? ((arg: A /** unresolved */) => Rest /** unresolved */) : never : never : never;

export type TypeTortureTest8<N extends number> = N extends 0 ? [] : Record<string, N extends 1 ? 0 : never> extends infer U ? [
  U /** unresolved */,
  ...U /** unresolved */[]
] : never;

export type TypeTortureTest9<T> = T extends {
  type: infer Type;
  payload: infer P
} ? { [K in Type /** unresolved */ as string | number]: ((payload: P /** unresolved */) => void) } : never;

export type TypeTortureTest10<T> = T extends {
  value: unknown;
  children: []
} ? {
  value: T["value"];
  children: T["children"]
} : T extends (infer U)[] ? U /** unresolved */[] : T;

export type TypeTortureTest11<N extends number> = [
  ...Array<N>
]["length"] extends number ? [
  ...Array<N>
]["length"] : never;

export type TypeTortureTest12<T, Path extends string> = T extends object ? { [K in keyof T]: `${Path /** unresolved */}${K /** unresolved */ & string}` | Record<`${Path /** unresolved */}${K /** unresolved */ & string}.`, T[K /** unresolved */]> }[keyof T] : never;

export type TypeTortureTest13<T> = T extends (infer U)[] ? U /** unresolved */ extends object ? keyof U /** unresolved */ : never : never;

export type TypeTortureTest14<T> = T extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */[]) => R /** unresolved */) : T extends object ? { [K in keyof T]: Record<number, T[K /** unresolved */]> } : T;

export type TypeTortureTest15<T> = { [K in keyof T]: T[K /** unresolved */] extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */) => R /** unresolved */) : T[K /** unresolved */] extends object ? Record<string, T[K /** unresolved */]> : T[K /** unresolved */] };

export type TypeTortureTest16<T, U> = T extends U ? T : U extends T ? U : T | U;

export type TypeTortureTest17<S extends string> = S extends `${infer Head}${infer Tail}` ? `${Uppercase<Head /** unresolved */>}${Tail /** unresolved */}` : S;

export type TypeTortureTest18<T, Path extends string> = Path extends `${infer Head}.${infer Tail}` ? Head /** unresolved */ extends keyof T ? Extract<T[Head /** unresolved */], Tail /** unresolved */> : undefined : Path extends keyof T ? T[Path] : undefined;

export type TypeTortureTest19<T extends Record<string, unknown>, U extends keyof T /** unresolved */> = { [K in U]: T[K /** unresolved */] extends ((...args: []) => never) ? ReturnType<T[K /** unresolved */]> : never };

export type TypeTortureTest20<T, U> = { [K in keyof T | keyof U]: K /** unresolved */ extends keyof T ? K /** unresolved */ extends keyof U ? Record<string, [
  T[K /** unresolved */],
  U[K /** unresolved */]
]> : T[K /** unresolved */] : U[K /** unresolved */ & keyof U] };

export type TypeTortureTest21<S, A> = A extends {
  type: infer T;
  payload: infer P
} ? T /** unresolved */ extends "SET" ? P /** unresolved */ : T /** unresolved */ extends "ADD" ? S extends number ? `${S /** unresolved */} + ${P /** unresolved */}` : never : T /** unresolved */ extends "APPEND" ? `${S /** unresolved */}${P /** unresolved */}` : never : never;

export type TypeTortureTest22<T> = T extends {
  __typename: infer I
} ? { [K in I /** unresolved */ as string]: T } : never;

export type TypeTortureTest23<T> = { [K in keyof T]: K /** unresolved */ extends string ? T[K /** unresolved */] extends number ? Exclude<[]["length"] extends 100 ? [][number] : [
  100,
  [
    ...[],
    []["length"]
  ]
], []["length"] extends 0 ? [][number] : [
  0,
  [
    ...[],
    []["length"]
  ]
]> extends number ? Exclude<[]["length"] extends 100 ? [][number] : [
  100,
  [
    ...[],
    []["length"]
  ]
], []["length"] extends 0 ? [][number] : [
  0,
  [
    ...[],
    []["length"]
  ]
]> : never extends T[K /** unresolved */] ? T[K /** unresolved */] : never : never : never };

export type TypeTortureTest24<T> = T extends Array<infer U> ? U /** unresolved */ extends object ? { [K in keyof U /** unresolved */]: U /** unresolved */[K /** unresolved */][] } : U /** unresolved */ : T extends object ? { [K in keyof T]: [
  T[K /** unresolved */]
] } : T;

export type TypeTortureTest25<T> = T extends ((...args: infer A) => infer R) ? [
  { [K in keyof ((...args: A /** unresolved */) => R /** unresolved */)]: ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */) => R /** unresolved */) : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends object ? Record<string, ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */]> : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] }
] extends [
  infer F,
  ...infer Rest
] ? F /** unresolved */ extends ((arg: infer A) => infer B) ? Rest /** unresolved */ extends [
  ((arg: B /** unresolved */) => never),
  ...[]
] ? ((arg: A /** unresolved */) => Rest /** unresolved */) : never : never : never extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */[]) => R /** unresolved */) : [
  { [K in keyof ((...args: A /** unresolved */) => R /** unresolved */)]: ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */) => R /** unresolved */) : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends object ? Record<string, ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */]> : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] }
] extends [
  infer F,
  ...infer Rest
] ? F /** unresolved */ extends ((arg: infer A) => infer B) ? Rest /** unresolved */ extends [
  ((arg: B /** unresolved */) => never),
  ...[]
] ? ((arg: A /** unresolved */) => Rest /** unresolved */) : never : never : never extends object ? { [K in keyof [
  { [K in keyof ((...args: A /** unresolved */) => R /** unresolved */)]: ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */) => R /** unresolved */) : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends object ? Record<string, ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */]> : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] }
] extends [
  infer F,
  ...infer Rest
] ? F /** unresolved */ extends ((arg: infer A) => infer B) ? Rest /** unresolved */ extends [
  ((arg: B /** unresolved */) => never),
  ...[]
] ? ((arg: A /** unresolved */) => Rest /** unresolved */) : never : never : never]: Record<number, [
  { [K in keyof ((...args: A /** unresolved */) => R /** unresolved */)]: ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */) => R /** unresolved */) : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends object ? Record<string, ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */]> : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] }
] extends [
  infer F,
  ...infer Rest
] ? F /** unresolved */ extends ((arg: infer A) => infer B) ? Rest /** unresolved */ extends [
  ((arg: B /** unresolved */) => never),
  ...[]
] ? ((arg: A /** unresolved */) => Rest /** unresolved */) : never : never : never[K /** unresolved */]> } : [
  { [K in keyof ((...args: A /** unresolved */) => R /** unresolved */)]: ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends ((...args: infer A) => infer R) ? ((...args: A /** unresolved */) => R /** unresolved */) : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] extends object ? Record<string, ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */]> : ((...args: A /** unresolved */) => R /** unresolved */)[K /** unresolved */] }
] extends [
  infer F,
  ...infer Rest
] ? F /** unresolved */ extends ((arg: infer A) => infer B) ? Rest /** unresolved */ extends [
  ((arg: B /** unresolved */) => never),
  ...[]
] ? ((arg: A /** unresolved */) => Rest /** unresolved */) : never : never : never : T extends object ? { [K in keyof T as K /** unresolved */ extends `${infer Head}${infer Tail}` ? `${Uppercase<Head /** unresolved */>}${Tail /** unresolved */}` : K /** unresolved */]: T[K /** unresolved */] } : T;
