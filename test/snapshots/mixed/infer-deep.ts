import { assert, type Equals } from "tsafe";

import type {
  InferDeepCase1,
  InferDeepCase2,
  InferDeepCase3,
  InferDeepCase4,
  InferDeepCase5,
  InferDeepCase6,
  InferDeepCase7,
  InferDeepCase8,
  InferDeepCase9,
  InferDeepCase10,
  InferDeepCase11,
  InferDeepCase12,
  InferDeepCase13,
  InferDeepCase14,
  InferDeepCase15,
  InferDeepCase16,
  InferDeepCase17,
  InferDeepCase18,
  InferDeepCase19,
  InferDeepCase20,
  InferDeepCase21,
  InferDeepCase22,
  InferDeepCase23,
  InferDeepCase24,
  InferDeepCase25,
} from "@/fixtures/mixed/infer-deep.ts";

// Inspired by deep promise unwrapping
type InferDeepCase1Flat<T> = ((T) extends (Promise<infer U>) ? (InferDeepCase1<U /** unresolved */>) : (T));

// Similar to AST traversal
type InferDeepCase2Flat<T> = ((T) extends ({
  children: infer C
}) ? (InferDeepCase2<C /** unresolved */>) : (T));

// Pattern from recursive arrays
type InferDeepCase3Flat<T> = ((T) extends ((infer U)[]) ? (InferDeepCase3<U /** unresolved */>) : (T));

// Inspired by function parameters
type InferDeepCase4Flat<T> = ((T) extends (((...args: infer P) => void)) ? (P /** unresolved */) : (never));

// Similar to DOM node unwrapping
type InferDeepCase5Flat<T> = ((T) extends (NodeListOf<infer U> /** unresolved */) ? (U /** unresolved */) : (T));

// Pattern from error chains
type InferDeepCase6Flat<T> = ((T) extends ({
  cause: infer C
}) ? (InferDeepCase6<C /** unresolved */>) : (T));

// Inspired by mathematical expressions
type InferDeepCase7Flat<T> = ((T) extends ([
  infer Op,
  ...infer Args
]) ? (((Op /** unresolved */) extends ("+") ? (((Args /** unresolved */) extends (number[]) ? (number) : (never))) : (((Op /** unresolved */) extends ("×") ? (((Args /** unresolved */) extends (number[]) ? (number) : (never))) : (never))))) : (never));

// Similar to API pagination
type InferDeepCase8Flat<T> = ((T) extends ({
  next: infer N
}) ? (InferDeepCase8<N /** unresolved */>) : (T));

// Pattern from type-safe paths
type InferDeepCase9Flat<T> = ((T) extends (`/${infer Head}/${infer Tail}`) ? ([
  Head /** unresolved */,
  ...InferDeepCase9<`/${Tail /** unresolved */}`>
]) : (((T) extends (`/${infer Last}`) ? ([
  Last /** unresolved */
]) : (never))));

// Inspired by CSS selectors
type InferDeepCase10Flat<T> = ((T) extends (`:${infer P}`) ? (((P /** unresolved */) extends (`${infer K}(${infer V})`) ? ([
  K /** unresolved */,
  V /** unresolved */
]) : (P /** unresolved */))) : (never));

// Similar to recursive ORM
type InferDeepCase11Flat<T> = ((T) extends (object) ? ({ [K in keyof (T)]: InferDeepCase11<(T)[K /** unresolved */]> }) : (T));

// Pattern from quantum circuits
type InferDeepCase12Flat<T> = ((T) extends ({
  gates: infer G
}) ? (((G /** unresolved */) extends (Array<infer U>) ? ([
  ...InferDeepCase12<U /** unresolved */>
]) : (never))) : (never));

// Inspired by genetic sequences
type InferDeepCase13Flat<T> = ((T) extends (`${infer Base}${infer Rest}`) ? ([
  Base /** unresolved */,
  ...InferDeepCase13<Rest /** unresolved */>
]) : ([]));

// Similar to UI component trees
type InferDeepCase14Flat<T> = ((T) extends ({
  children: infer C
}) ? (((C /** unresolved */) extends (Array<infer U>) ? (InferDeepCase14<U /** unresolved */>) : (never))) : (T));

// Pattern from financial calculations
type InferDeepCase15Flat<T> = ((T) extends ({
  compound: true
}) ? (InferDeepCase15<((T) & ({
  periods: number
}))>) : (T));

// Inspired by type predicates
type InferDeepCase16Flat<T> = ((T) extends (((value: unknown) => value is infer U)) ? (U /** unresolved */) : (never));

// Similar to API responses
type InferDeepCase17Flat<T> = ((T) extends ({
  data: infer D
}) ? (((D /** unresolved */) extends (object) ? (InferDeepCase17<D /** unresolved */>) : (D /** unresolved */))) : (never));

// Pattern from recursive schemas
type InferDeepCase18Flat<T> = ((T) extends ({
  schema: infer S
}) ? (InferDeepCase18<S /** unresolved */>) : (T));

// Inspired by physics simulations
type InferDeepCase19Flat<T> = ((T) extends ({
  position: infer P
}) ? (((P /** unresolved */) extends ((([
  componentType: (("transform") | ("render")),
  data: ({
    a: number
  }) | ({
    b: string
  }),
  ...dependencies: string[]
][]) & ({
  projection: (("WGS84") | ("Mercator"))
}))) ? ((P /** unresolved */)[number]) : (never))) : (never));

// Similar to authentication chains
type InferDeepCase20Flat<T> = ((T) extends ({
  signedBy: infer S
}) ? (InferDeepCase20<S /** unresolved */>) : (T));

// Pattern from file formats
type InferDeepCase21Flat<T> = ((T) extends ({
  chunks: infer C
}) ? (((C /** unresolved */) extends (Array<infer U>) ? ([
  ...InferDeepCase21<U /** unresolved */>
]) : (never))) : (never));

// Inspired by astronomy data
type InferDeepCase22Flat<T> = ((T) extends ({
  coordinates: infer C
}) ? (((C /** unresolved */) extends ((([
  componentType: (("transform") | ("render")),
  data: ({
    a: number
  }) | ({
    b: string
  }),
  ...dependencies: string[]
][]) & ({
  projection: (("WGS84") | ("Mercator"))
}))) ? ([
  ...C /** unresolved */
]) : (never))) : (never));

// Similar to machine learning
type InferDeepCase23Flat<T> = ((T) extends ({
  layers: infer L
}) ? (((L /** unresolved */) extends (Array<infer U>) ? (InferDeepCase23<U /** unresolved */>) : (never))) : (never));

// Pattern from type utilities
type InferDeepCase24Flat<T> = ((T) extends (keyof ({
  id: ((string) & ({
    __brand: "ProductID"
  }));
  variants:  readonly [
        string,
        ...((({
          a: number
        }) | ({
          b: string
        })))[]
      ];
  pricing: {
    base: number;
    currency: (((string) & ({
      __brand: "id"
    }))) | (((number) & ({
      __brand: "count"
    })));
    discounts?: [
      key: `i18n_${string}`,
      translations: [
        string,
        ((newValue: string) => void)
      ][]
    ]
  }
})) ? (({
  id: ((string) & ({
    __brand: "ProductID"
  }));
  variants:  readonly [
        string,
        ...((({
          a: number
        }) | ({
          b: string
        })))[]
      ];
  pricing: {
    base: number;
    currency: (((string) & ({
      __brand: "id"
    }))) | (((number) & ({
      __brand: "count"
    })));
    discounts?: [
      key: `i18n_${string}`,
      translations: [
        string,
        ((newValue: string) => void)
      ][]
    ]
  }
})[T]) : (never));

// Inspired by recursive functions
type InferDeepCase25Flat<T> = ((T) extends (((...args: unknown[]) => infer R)) ? (InferDeepCase25<R /** unresolved */>) : (T));


assert<
  Equals<
    InferDeepCase1<never>,
    InferDeepCase1Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase2<never>,
    InferDeepCase2Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase3<never>,
    InferDeepCase3Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase4<never>,
    InferDeepCase4Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase5<never>,
    InferDeepCase5Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase6<never>,
    InferDeepCase6Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase7<never>,
    InferDeepCase7Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase8<never>,
    InferDeepCase8Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase9<never>,
    InferDeepCase9Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase10<never>,
    InferDeepCase10Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase11<never>,
    InferDeepCase11Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase12<never>,
    InferDeepCase12Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase13<never>,
    InferDeepCase13Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase14<never>,
    InferDeepCase14Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase15<never>,
    InferDeepCase15Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase16<never>,
    InferDeepCase16Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase17<never>,
    InferDeepCase17Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase18<never>,
    InferDeepCase18Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase19<never>,
    InferDeepCase19Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase20<never>,
    InferDeepCase20Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase21<never>,
    InferDeepCase21Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase22<never>,
    InferDeepCase22Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase23<never>,
    InferDeepCase23Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase24<never>,
    InferDeepCase24Flat<never>
  >
>;
assert<
  Equals<
    InferDeepCase25<never>,
    InferDeepCase25Flat<never>
  >
>;
