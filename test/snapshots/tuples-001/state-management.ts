export type StateManagementTest1 = [
  {
    id: string;
    name: string
  },
  ((update: Partial<{
    id: string;
    name: string
  }>) => void)
];

export type StateManagementTest2 = readonly [
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

export type StateManagementTest3 = [
  state: unknown,
  dispatch: ((action: {
    type: string;
    payload?: unknown
  }) => void)
];

export type StateManagementTest4<T> = [
  initialState: T,
  reducers: Record<string, T>,
  middlewares?: ((next: (() => void)) => (() => void))[]
];

export type StateManagementTest5<T> = [
  current: T,
  previous: T,
  updateCount: number
];

export type StateManagementTest6<T> = [
  T,
  ...(T extends infer U ? U /** unresolved */[] : never)
];

export type StateManagementTest7 = [
  key: string,
  ...handlers: [
    ((data: unknown) => void),
    ...((next: (() => void)) => (() => void))[]
  ]
];

export type StateManagementTest8 = [
  threshold: number,
  values: [
    ...number[]
  ],
  callback: ((reached: boolean) => void)
];

export type StateManagementTest9 = [
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

export type StateManagementTest10 = [
  string,
  ...(number | boolean)[],
  {
    timestamp: Date
  }
];

export type StateManagementTest11<T> = [
  state: T,
  version: number,
  history: [
    ...T[]
  ]
];

export type StateManagementTest12<T> = [
  readonly T[],
  mutable: [
    ...T[]
  ]
];

export type StateManagementTest13<T> = [
  initial: T,
  ...patches: Partial<T>[]
];

export type StateManagementTest14<T, U> = [
  parentState: U,
  ...childStates: [
    ...T[]
  ]
];

export type StateManagementTest15<T> = [
  state: T,
  ...middlewareChain: ((next: (() => void)) => (() => void))[]
];

export type StateManagementTest16<T> = [
  key: string,
  defaultValue: T,
  validator?: ((input: unknown) => T)
];

export type StateManagementTest17<T> = [
  current: T,
  ...subscribers: (((newState: T) => void))[]
];

export type StateManagementTest18<T> = [
  state: T,
  ...effects: [
    deps: unknown[],
    effect: (() => void)
  ][]
];

export type StateManagementTest19<T> = [
  baseState: T,
  ...overrides: Partial<T>[]
];

export type StateManagementTest20<T> = [
  state: T,
  serializer: ((state: T) => string),
  deserializer: ((raw: string) => T)
];

export type StateManagementTest21<T, U> = [
  normalized: T,
  denormalized: U,
  mapping: Record<string, unknown>
];

export type StateManagementTest22<T> = [
  state: T,
  ...selectors: (((state: T) => unknown))[]
];

export type StateManagementTest23<T> = [
  state: T,
  ...versionHistory: [
    T,
    number
  ][]
];

export type StateManagementTest24<T> = [
  state: T,
  ...timeTravel: [
    undo: (() => void),
    redo: (() => void)
  ]
];

export type StateManagementTest25<T> = [
  state: T,
  ...persistence: [
    save: (() => void),
    load: (() => T)
  ]
];
