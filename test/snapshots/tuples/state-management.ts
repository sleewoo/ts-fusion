import { assert, type Equals } from "tsafe";

import type {
  StateManagementTest1,
  StateManagementTest2,
  StateManagementTest3,
  StateManagementTest4,
  StateManagementTest5,
  StateManagementTest6,
  StateManagementTest7,
  StateManagementTest8,
  StateManagementTest9,
  StateManagementTest10,
  StateManagementTest11,
  StateManagementTest12,
  StateManagementTest13,
  StateManagementTest14,
  StateManagementTest15,
  StateManagementTest16,
  StateManagementTest17,
  StateManagementTest18,
  StateManagementTest19,
  StateManagementTest20,
  StateManagementTest21,
  StateManagementTest22,
  StateManagementTest23,
  StateManagementTest24,
  StateManagementTest25,
} from "@/fixtures/tuples/state-management.ts";

type StateManagementTest1Flat = [
  {
    id: string;
    name: string
  },
  ((update: Partial<{
    id: string;
    name: string
  }>) => void)
];

type StateManagementTest2Flat = readonly [
  products: {
    sku: string;
    price: number
  }[],
  loading: boolean,
  error?: {
    code: number;
    message: string
  }
];

type StateManagementTest3Flat = [
  state: unknown,
  dispatch: ((action: {
    type: string;
    payload?: unknown
  }) => void)
];

type StateManagementTest4Flat<T> = [
  initialState: T,
  reducers: Record<string, T>,
  middlewares?: ((next: (() => void)) => (() => void))[]
];

type StateManagementTest5Flat<T> = [
  current: T,
  previous: T,
  updateCount: number
];

type StateManagementTest6Flat<T> = [
  T,
  ...(((T) extends (infer U) ? (U /** unresolved */[]) : (never)))
];

type StateManagementTest7Flat = [
  key: string,
  ...handlers: [
    ((data: unknown) => void),
    ...((next: (() => void)) => (() => void))[]
  ]
];

type StateManagementTest8Flat = [
  threshold: number,
  values: [
    ...number[]
  ],
  callback: ((reached: boolean) => void)
];

type StateManagementTest9Flat = [
  readonly [
    {
      id: string;
      name: string
    }
  ],
  mutable: [
    {
      sku: string;
      price: number
    }
  ]
];

type StateManagementTest10Flat = [
  string,
  ...(((number) | (boolean)))[],
  {
    timestamp: Date
  }
];

type StateManagementTest11Flat<T> = [
  state: T,
  version: number,
  history: [
    ...T[]
  ]
];

type StateManagementTest12Flat<T> = [
  readonly T[],
  mutable: [
    ...T[]
  ]
];

type StateManagementTest13Flat<T> = [
  initial: T,
  ...patches: Partial<T>[]
];

type StateManagementTest14Flat<T, U> = [
  parentState: U,
  ...childStates: [
    ...T[]
  ]
];

type StateManagementTest15Flat<T> = [
  state: T,
  ...middlewareChain: ((next: (() => void)) => (() => void))[]
];

type StateManagementTest16Flat<T> = [
  key: string,
  defaultValue: T,
  validator?: ((input: unknown) => T)
];

type StateManagementTest17Flat<T> = [
  current: T,
  ...subscribers: (((newState: T) => void))[]
];

type StateManagementTest18Flat<T> = [
  state: T,
  ...effects: [
    deps: unknown[],
    effect: (() => void)
  ][]
];

type StateManagementTest19Flat<T> = [
  baseState: T,
  ...overrides: Partial<T>[]
];

type StateManagementTest20Flat<T> = [
  state: T,
  serializer: ((state: T) => string),
  deserializer: ((raw: string) => T)
];

type StateManagementTest21Flat<T, U> = [
  normalized: T,
  denormalized: U,
  mapping: Record<string, unknown>
];

type StateManagementTest22Flat<T> = [
  state: T,
  ...selectors: (((state: T) => unknown))[]
];

type StateManagementTest23Flat<T> = [
  state: T,
  ...versionHistory: [
    T,
    number
  ][]
];

type StateManagementTest24Flat<T> = [
  state: T,
  ...timeTravel: [
    undo: (() => void),
    redo: (() => void)
  ]
];

type StateManagementTest25Flat<T> = [
  state: T,
  ...persistence: [
    save: (() => void),
    load: (() => T)
  ]
];


assert<
  Equals<
    StateManagementTest1,
    StateManagementTest1Flat
  >
>;
assert<
  Equals<
    StateManagementTest2,
    StateManagementTest2Flat
  >
>;
assert<
  Equals<
    StateManagementTest3,
    StateManagementTest3Flat
  >
>;
assert<
  Equals<
    StateManagementTest4<never>,
    StateManagementTest4Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest5<never>,
    StateManagementTest5Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest6<never>,
    StateManagementTest6Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest7,
    StateManagementTest7Flat
  >
>;
assert<
  Equals<
    StateManagementTest8,
    StateManagementTest8Flat
  >
>;
assert<
  Equals<
    StateManagementTest9,
    StateManagementTest9Flat
  >
>;
assert<
  Equals<
    StateManagementTest10,
    StateManagementTest10Flat
  >
>;
assert<
  Equals<
    StateManagementTest11<never>,
    StateManagementTest11Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest12<never>,
    StateManagementTest12Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest13<never>,
    StateManagementTest13Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest14<never, never>,
    StateManagementTest14Flat<never, never>
  >
>;
assert<
  Equals<
    StateManagementTest15<never>,
    StateManagementTest15Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest16<never>,
    StateManagementTest16Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest17<never>,
    StateManagementTest17Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest18<never>,
    StateManagementTest18Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest19<never>,
    StateManagementTest19Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest20<never>,
    StateManagementTest20Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest21<never, never>,
    StateManagementTest21Flat<never, never>
  >
>;
assert<
  Equals<
    StateManagementTest22<never>,
    StateManagementTest22Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest23<never>,
    StateManagementTest23Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest24<never>,
    StateManagementTest24Flat<never>
  >
>;
assert<
  Equals<
    StateManagementTest25<never>,
    StateManagementTest25Flat<never>
  >
>;
