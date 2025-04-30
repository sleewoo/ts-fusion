import { assert, type Equals } from "tsafe";

import type {
  OptionalElementsTest1,
  OptionalElementsTest2,
  OptionalElementsTest3,
  OptionalElementsTest4,
  OptionalElementsTest5,
  OptionalElementsTest6,
  OptionalElementsTest7,
  OptionalElementsTest8,
  OptionalElementsTest9,
  OptionalElementsTest10,
  OptionalElementsTest11,
  OptionalElementsTest12,
  OptionalElementsTest13,
  OptionalElementsTest14,
  OptionalElementsTest15,
  OptionalElementsTest16,
  OptionalElementsTest17,
  OptionalElementsTest18,
  OptionalElementsTest19,
  OptionalElementsTest20,
  OptionalElementsTest21,
  OptionalElementsTest22,
  OptionalElementsTest23,
  OptionalElementsTest24,
  OptionalElementsTest25,
} from "@/fixtures/tuples/optional-elements.ts";

type OptionalElementsTest1Flat = [
  string,
  (number)?
];

type OptionalElementsTest2Flat = [
  first?: string,
  second?: number
];

type OptionalElementsTest3Flat = [
  start: Date,
  end?: Date
];

type OptionalElementsTest4Flat = [
  prefix: string,
  ...middle: number[]
];

type OptionalElementsTest5Flat = [
  ...start: string[],
  end: boolean
];

type OptionalElementsTest6Flat<T> = [
  metadata?: T,
  ...data: boolean[]
];

type OptionalElementsTest7Flat = [
  config?: readonly [
    boolean,
    string
  ],
  override?: [
    (number)?
  ]
];

type OptionalElementsTest8Flat = readonly [
  id: string,
  timestamp?: number
];

type OptionalElementsTest9Flat = [
  readonly [
    ({
      id: string;
      name: string
    })?,
    ({
      sku: string;
      price: number
    })?
  ],
  editable?: [
    string,
    (number)?
  ]
];

type OptionalElementsTest10Flat<T> = [
  primary?: T,
  secondary?: T,
  ...details: T[]
];

type OptionalElementsTest11Flat = [
  validator?: ((input: unknown) => boolean),
  onSuccess?: (() => void)
];

type OptionalElementsTest12Flat<T> = [
  id: string,
  payload?: T
];

type OptionalElementsTest13Flat = [
  source?: (string | [
    number,
    number
  ]),
  transform?: (() => never)
];

type OptionalElementsTest14Flat = [
  coordinates?: [
    x?: number,
    y?: number
  ],
  metadata?: [
    author?: string
  ]
];

type OptionalElementsTest15Flat<T> = [
  combined?: (T & {
    timestamp: Date
  }),
  partial?: Partial<T>
];

type OptionalElementsTest16Flat<T extends Array<unknown>> = [
  ...T,
  ...{
    id: string;
    name: string
  }[]
];

type OptionalElementsTest17Flat = [
  header: string,
  ...{
    sku: string;
    price: number
  }[],
  footer: string
];

type OptionalElementsTest18Flat<T> = [
  root?: T,
  depth?: number
];

type OptionalElementsTest19Flat = [
  format?: ("json" | "csv"),
  ...dataEntries: [
    string,
    unknown
  ][]
];

type OptionalElementsTest20Flat<T> = [
  initial?: Promise<T>,
  fallback?: T
];

type OptionalElementsTest21Flat<T> = [
  primary?: (T)[keyof T],
  secondary?: keyof T
];

type OptionalElementsTest22Flat<T> = [
  value?: (T extends string ? string : number),
  ...options: never[]
];

type OptionalElementsTest23Flat<T> = [
  ...((T extends never[] ? [
    first?: (T)[0]
  ] : never))
];

type OptionalElementsTest24Flat = [
  ...config: [
    port?: number
  ],
  ...features: (("logging" | "caching"))[]
];

type OptionalElementsTest25Flat<T> = [
  self?: T,
  sibling?: [
    (T)?,
    (T)?
  ]
];


assert<
  Equals<
    OptionalElementsTest1,
    OptionalElementsTest1Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest2,
    OptionalElementsTest2Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest3,
    OptionalElementsTest3Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest4,
    OptionalElementsTest4Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest5,
    OptionalElementsTest5Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest6<never>,
    OptionalElementsTest6Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest7,
    OptionalElementsTest7Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest8,
    OptionalElementsTest8Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest9,
    OptionalElementsTest9Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest10<never>,
    OptionalElementsTest10Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest11,
    OptionalElementsTest11Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest12<never>,
    OptionalElementsTest12Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest13,
    OptionalElementsTest13Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest14,
    OptionalElementsTest14Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest15<never>,
    OptionalElementsTest15Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest16<never>,
    OptionalElementsTest16Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest17,
    OptionalElementsTest17Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest18<never>,
    OptionalElementsTest18Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest19,
    OptionalElementsTest19Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest20<never>,
    OptionalElementsTest20Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest21<never>,
    OptionalElementsTest21Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest22<never>,
    OptionalElementsTest22Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest23<never>,
    OptionalElementsTest23Flat<never>
  >
>;
assert<
  Equals<
    OptionalElementsTest24,
    OptionalElementsTest24Flat
  >
>;
assert<
  Equals<
    OptionalElementsTest25<never>,
    OptionalElementsTest25Flat<never>
  >
>;
