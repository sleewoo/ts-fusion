import { assert, type Equals } from "tsafe";

import type {
  TypeTortureTest1,
  TypeTortureTest2,
  TypeTortureTest3,
  TypeTortureTest4,
  TypeTortureTest5,
  TypeTortureTest6,
  TypeTortureTest7,
  TypeTortureTest8,
  TypeTortureTest9,
  TypeTortureTest10,
  TypeTortureTest11,
  TypeTortureTest12,
  TypeTortureTest13,
  TypeTortureTest14,
  TypeTortureTest15,
  TypeTortureTest16,
  TypeTortureTest17,
  TypeTortureTest18,
  TypeTortureTest19,
  TypeTortureTest20,
  TypeTortureTest21,
  TypeTortureTest22,
  TypeTortureTest23,
  TypeTortureTest24,
  TypeTortureTest25,
} from "@/fixtures/objects/type-system-torture.ts";

// 1. Deep recursive type constraints
type TypeTortureTest1Flat<T> = ((T) extends (object) ? ({ [K in keyof (T)]: Record<number, (T)[K /** unresolved */]> }) : (((T) extends ((infer U)[]) ? (U /** unresolved */[]) : (T))));

// 2. Recursive conditional path extraction
type TypeTortureTest2Flat<T, Path extends string> = ((Path) extends (`${infer Head}.${infer Tail}`) ? (((Head /** unresolved */) extends (keyof (T)) ? ([
  (T)[Head /** unresolved */],
  Tail /** unresolved */
]) : (never))) : (((Path) extends (keyof (T)) ? ((T)[Path]) : (never))));

// 3. Mapped type key remapping with template literals
type TypeTortureTest3Flat<T> = (({ [K in keyof (T) as `get${Capitalize<((string) & (K /** unresolved */))>}[${string}]`]: (() => (T)[K /** unresolved */]) }) & ({ [K in keyof (T) as `set${Capitalize<((string) & (K /** unresolved */))>}`]: ((value: (T)[K /** unresolved */]) => void) }));

// 4. JSON schema validator
type TypeTortureTest4Flat<T> = { [K in keyof (T)]: (((T)[K /** unresolved */]) extends (object) ? ([
  (T)[K /** unresolved */]
]) : ((((T)[K /** unresolved */]) extends ((infer U)[]) ? (U /** unresolved */[]) : (new (...args: unknown[]) => (T /** unresolved */)[K /** unresolved */])))) };

// 5. Variadic tuple type shift
type TypeTortureTest5Flat<T extends []> = ((T) extends ([
  never,
  ...infer Rest
]) ? (Rest /** unresolved */) : (never));

// 6. Deep readonly with exceptions
type TypeTortureTest6Flat<T, Keys extends keyof (T /** unresolved */)> = { readonly [K in keyof (T)]: ((K /** unresolved */) extends (Keys) ? ((T)[K /** unresolved */]) : (Record<string, (T)[K /** unresolved */]>)) };

// 7. Function composition types
type TypeTortureTest7Flat<Fns extends (((arg: unknown) => never))[]> = ((Fns) extends ([
  infer F,
  ...infer Rest
]) ? (((F /** unresolved */) extends (((arg: infer A) => infer B)) ? (((Rest /** unresolved */) extends ([
  ((arg: B /** unresolved */) => never),
  ...[]
]) ? (((arg: A /** unresolved */) => Rest /** unresolved */)) : (never))) : (never))) : (never));

// 8. Type algebra
type TypeTortureTest8Flat<N extends number> = ((N) extends (0) ? ([]) : (((Record<string, ((N) extends (1) ? (0) : (never))>) extends (infer U) ? ([
  U /** unresolved */,
  ...U /** unresolved */[]
]) : (never))));

// 9. Pattern matching for types
type TypeTortureTest9Flat<T> = ((T) extends ({
  type: infer Type;
  payload: infer P
}) ? ({ [K in Type /** unresolved */ as ((string) | (number))]: ((payload: P /** unresolved */) => void) }) : (never));

// 10. Type transformations
type TypeTortureTest10Flat<T> = ((T) extends ({
  value: unknown;
  children: []
}) ? ({
  value: (T)["value"];
  children: (T)["children"]
}) : (((T) extends ((infer U)[]) ? (U /** unresolved */[]) : (T))));

// 11. Type-level arithmetic
type TypeTortureTest11Flat<N extends number> = ((([
  ...Array<N>
])["length"]) extends (number) ? (([
  ...Array<N>
])["length"]) : (never));

// 12. Key path generation
type TypeTortureTest12Flat<T, Path extends string = ""> = ((T) extends (object) ? (({ [K in keyof (T)]: ((`${Path /** unresolved */}${((K /** unresolved */) & (string))}`) | (Record<`${Path /** unresolved */}${((K /** unresolved */) & (string))}.`, (T)[K /** unresolved */]>)) })[keyof (T)]) : (never));

// 13. Complex constraint inference
type TypeTortureTest13Flat<T> = ((T) extends ((infer U)[]) ? (((U /** unresolved */) extends (object) ? (keyof (U /** unresolved */)) : (never))) : (never));

// 14. Type predicates
type TypeTortureTest14Flat<T> = ((T) extends (((...args: infer A) => infer R)) ? (((...args: A /** unresolved */[]) => R /** unresolved */)) : (((T) extends (object) ? ({ [K in keyof (T)]: Record<number, (T)[K /** unresolved */]> }) : (T))));

// 15. Mapped type value transformations
type TypeTortureTest15Flat<T> = { [K in keyof (T)]: (((T)[K /** unresolved */]) extends (((...args: infer A) => infer R)) ? (((...args: A /** unresolved */) => R /** unresolved */)) : ((((T)[K /** unresolved */]) extends (object) ? (Record<string, (T)[K /** unresolved */]>) : ((T)[K /** unresolved */])))) };

// 16. Type unification
type TypeTortureTest16Flat<T, U> = ((T) extends (U) ? (T) : (((U) extends (T) ? (U) : (((T) | (U))))));

// 17. Type-level string manipulation
type TypeTortureTest17Flat<S extends ((string) | (number) | (symbol))> = ((S) extends (`${infer Head}${infer Tail}`) ? (`${Uppercase<Head /** unresolved */>}${Tail /** unresolved */}`) : (S));

// 18. Optional chaining
type TypeTortureTest18Flat<T, Path extends string> = ((Path) extends (`${infer Head}.${infer Tail}`) ? (((Head /** unresolved */) extends (keyof (T)) ? (Extract<(T)[Head /** unresolved */], Tail /** unresolved */>) : (undefined))) : (((Path) extends (keyof (T)) ? ((T)[Path]) : (undefined))));

// 19. Complex generic constraints
type TypeTortureTest19Flat<T extends Record<string, unknown>, U extends keyof (T /** unresolved */)> = { [K in U]: (((T)[K /** unresolved */]) extends (((...args: []) => never)) ? (ReturnType<(T)[K /** unresolved */]>) : (never)) };

// 20. Type merging
type TypeTortureTest20Flat<T, U> = { [K in ((keyof (T)) | (keyof (U)))]: ((K /** unresolved */) extends (keyof (T)) ? (((K /** unresolved */) extends (keyof (U)) ? (Record<string, [
  (T)[K /** unresolved */],
  (U)[K /** unresolved */]
]>) : ((T)[K /** unresolved */]))) : ((U)[((K /** unresolved */) & (keyof (U)))])) };

// 21. Type-level state machine
type TypeTortureTest21Flat<S, A> = ((A) extends ({
  type: infer T;
  payload: infer P
}) ? (((T /** unresolved */) extends ("SET") ? (P /** unresolved */) : (((T /** unresolved */) extends ("ADD") ? (((S) extends (number) ? (`${S /** unresolved */} + ${string}`) : (never))) : (((T /** unresolved */) extends ("APPEND") ? (`${string}${number}`) : (never))))))) : (never));

// 22. Pattern matching
type TypeTortureTest22Flat<T> = ((T) extends ({
  __typename: infer I
}) ? ({ [K in I /** unresolved */ as string]: T }) : (never));

// 23. Type-level dictionary validation
type TypeTortureTest23Flat<T> = { [K in keyof (T)]: ((K /** unresolved */) extends (string) ? ((((T)[K /** unresolved */]) extends (number) ? (((((Exclude<((([])["length"]) extends (100) ? (([])[number]) : ([
  100,
  [
    ...[],
    ([])["length"]
  ]
])), ((([])["length"]) extends (0) ? (([])[number]) : ([
  0,
  [
    ...[],
    ([])["length"]
  ]
]))>) extends (number) ? (Exclude<((([])["length"]) extends (100) ? (([])[number]) : ([
  100,
  [
    ...[],
    ([])["length"]
  ]
])), ((([])["length"]) extends (0) ? (([])[number]) : ([
  0,
  [
    ...[],
    ([])["length"]
  ]
]))>) : (never))) extends ((T)[K /** unresolved */]) ? ((T)[K /** unresolved */]) : (never))) : (never))) : (never)) };

// 24. Type narrowing
type TypeTortureTest24Flat<T> = ((T) extends (Array<infer U>) ? (((U /** unresolved */) extends (object) ? ({ [K in keyof (U /** unresolved */)]: (U /** unresolved */)[K /** unresolved */][] }) : (U /** unresolved */))) : (((T) extends (object) ? ({ [K in keyof (T)]: [
  (T)[K /** unresolved */]
] }) : (T))));

// 25. Ultimate type challenge (combines multiple features)
type TypeTortureTest25Flat<T> = ((T) extends (((...args: infer A) => infer R)) ? (((((a: A /** unresolved */) => R /** unresolved */)) extends (((...args: infer A) => infer R)) ? (((...args: A /** unresolved */[]) => R /** unresolved */)) : (((((a: A /** unresolved */) => R /** unresolved */)) extends (object) ? ({ [K in keyof (((a: A /** unresolved */) => R /** unresolved */))]: Record<number, (((a: A /** unresolved */) => R /** unresolved */))[K /** unresolved */]> }) : (((a: A /** unresolved */) => R /** unresolved */)))))) : (((T) extends (object) ? ({ [K in keyof (T) as ((K /** unresolved */) extends (`${infer Head}${infer Tail}`) ? (`${Uppercase<Head /** unresolved */>}${Tail /** unresolved */}`) : (K /** unresolved */))]: (T)[K /** unresolved */] }) : (T))));


assert<
  Equals<
    TypeTortureTest1<never>,
    TypeTortureTest1Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest2<never, never>,
    TypeTortureTest2Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest3<never>,
    TypeTortureTest3Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest4<never>,
    TypeTortureTest4Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest5<never>,
    TypeTortureTest5Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest6<never, never>,
    TypeTortureTest6Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest7<never>,
    TypeTortureTest7Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest8<never>,
    TypeTortureTest8Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest9<never>,
    TypeTortureTest9Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest10<never>,
    TypeTortureTest10Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest11<never>,
    TypeTortureTest11Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest12<never, never>,
    TypeTortureTest12Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest13<never>,
    TypeTortureTest13Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest14<never>,
    TypeTortureTest14Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest15<never>,
    TypeTortureTest15Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest16<never, never>,
    TypeTortureTest16Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest17<never>,
    TypeTortureTest17Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest18<never, never>,
    TypeTortureTest18Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest19<never, never>,
    TypeTortureTest19Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest20<never, never>,
    TypeTortureTest20Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest21<never, never>,
    TypeTortureTest21Flat<never, never>
  >
>;
assert<
  Equals<
    TypeTortureTest22<never>,
    TypeTortureTest22Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest23<never>,
    TypeTortureTest23Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest24<never>,
    TypeTortureTest24Flat<never>
  >
>;
assert<
  Equals<
    TypeTortureTest25<never>,
    TypeTortureTest25Flat<never>
  >
>;
