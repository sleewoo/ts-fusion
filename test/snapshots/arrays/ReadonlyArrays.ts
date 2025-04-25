import { assert, type Equals } from "tsafe";

import type {
  ReadonlyArraysCase1,
  ReadonlyArraysCase2,
  ReadonlyArraysCase3,
  ReadonlyArraysCase4,
  ReadonlyArraysCase5,
  ReadonlyArraysCase6,
  ReadonlyArraysCase7,
  ReadonlyArraysCase8,
  ReadonlyArraysCase9,
  ReadonlyArraysCase10,
  ReadonlyArraysCase11,
  ReadonlyArraysCase12,
  ReadonlyArraysCase13,
  ReadonlyArraysCase14,
  ReadonlyArraysCase15,
  ReadonlyArraysCase16,
  ReadonlyArraysCase17,
  ReadonlyArraysCase18,
  ReadonlyArraysCase19,
  ReadonlyArraysCase20,
  ReadonlyArraysCase21,
  ReadonlyArraysCase22,
  ReadonlyArraysCase23,
  ReadonlyArraysCase24,
  ReadonlyArraysCase25,
} from "@/fixtures/arrays/ReadonlyArrays.ts";

// Inspired by React state persistence patterns
type ReadonlyArraysCase1Flat = Readonly<number[]>;

type ReadonlyArraysCase2Flat = readonly [
  string,
  ...(({
    a: number
  } | {
    b: string
  }))[]
];

// Similar to GIS coordinate locks
type ReadonlyArraysCase3Flat = Readonly<[
  number,
  number,
  (number)?
][]>;

// Pattern from configuration files
type ReadonlyArraysCase4Flat = Readonly<{
  users: ReadonlyArray<{
    readonly id: string;
    permissions: readonly [
      string,
      ...(({
        a: number
      } | {
        b: string
      }))[]
    ]
  }>
}>;

// Inspired by Redux action history
type ReadonlyArraysCase5Flat = ReadonlyArray<({
  readonly type: "LOGIN";
  payload: ((Readonly<{
    users: ReadonlyArray<{
      readonly id: string;
      permissions: readonly [
        string,
        ...(({
          a: number
        } | {
          b: string
        }))[]
      ]
    }>
  }>)["users"])[number]
} | {
  readonly type: "LOGOUT";
  timestamp: number
})>;

// Similar to financial transaction immutability
type ReadonlyArraysCase6Flat = Readonly<Array<{
  readonly amount: number;
  readonly currency: (string & {
    __brand: "ISO4217"
  })
}>>;

// Pattern from versioned API responses
type ReadonlyArraysCase7Flat = Readonly<[
  version: number,
  ...data: ReadonlyArray<Readonly<(((({
    a: number
  } | {
    b: string
  }))[])[number] & {
    revision: number
  })>>
]>;

// Inspired by CSS-in-JS theme contracts
type ReadonlyArraysCase8Flat = ReadonlyArray<Readonly<{
  breakpoints: Readonly<[
    number,
    number,
    number
  ]>;
  colors: Readonly<Array<{
    readonly amount: number;
    readonly currency: (string & {
      __brand: "ISO4217"
    })
  }>>
}>>;

// Similar to immutable navigation state
type ReadonlyArraysCase9Flat = Readonly<{
  breadcrumbs: ReadonlyArray<Readonly<{
    path: string;
    label: ((((ReadonlyArray<Readonly<{
      breakpoints: Readonly<[
        number,
        number,
        number
      ]>;
      colors: Readonly<Array<{
        readonly amount: number;
        readonly currency: (string & {
          __brand: "ISO4217"
        })
      }>>
    }>>)[number])["colors"])[number])["currency"]
  }>>
}>;

// Pattern from hardware sensor readings
type ReadonlyArraysCase10Flat = ReadonlyArray<Readonly<{
  timestamp: number;
  values: Readonly<[
    number,
    number,
    (number)?
  ][]>;
  readonly sensorId: (string & {
    __brand: "SensorID"
  })
}>>;

// Inspired by legal document versions
type ReadonlyArraysCase11Flat = Readonly<(((Readonly<{
  breadcrumbs: ReadonlyArray<Readonly<{
    path: string;
    label: ((((ReadonlyArray<Readonly<{
      breakpoints: Readonly<[
        number,
        number,
        number
      ]>;
      colors: Readonly<Array<{
        readonly amount: number;
        readonly currency: (string & {
          __brand: "ISO4217"
        })
      }>>
    }>>)[number])["colors"])[number])["currency"]
  }>>
}>)["breadcrumbs"])[number])["label"][]>;

// Similar to type-safe translation tables
type ReadonlyArraysCase12Flat = ReadonlyArray<Readonly<{ [K in ((ReadonlyArray<({
  readonly type: "LOGIN";
  payload: ((Readonly<{
    users: ReadonlyArray<{
      readonly id: string;
      permissions: readonly [
        string,
        ...(({
          a: number
        } | {
          b: string
        }))[]
      ]
    }>
  }>)["users"])[number]
} | {
  readonly type: "LOGOUT";
  timestamp: number
})>)[number])["type"]]: string }>>;

// Pattern from immutable AST nodes
type ReadonlyArraysCase13Flat = Readonly<{
  children: ReadonlyArray<[]>;
  nodeType: ((ReadonlyArray<({
    readonly type: "LOGIN";
    payload: ((Readonly<{
      users: ReadonlyArray<{
        readonly id: string;
        permissions: readonly [
          string,
          ...(({
            a: number
          } | {
            b: string
          }))[]
        ]
      }>
    }>)["users"])[number]
  } | {
    readonly type: "LOGOUT";
    timestamp: number
  })>)[number])["type"]
}>;

// Inspired by quantum computing state snapshots
type ReadonlyArraysCase14Flat = ReadonlyArray<Readonly<{
  qubits: ReadonlyArray<Readonly<{
    state: ("|0>" | "|1>" | "+" | "-");
    probability: (number & {
      __range: [
        0,
        1
      ]
    })
  }>>
}>>;

// Similar to medical imaging slices
type ReadonlyArraysCase15Flat = ReadonlyArray<((((ReadonlyArray<Readonly<{
  qubits: ReadonlyArray<Readonly<{
    state: ("|0>" | "|1>" | "+" | "-");
    probability: (number & {
      __range: [
        0,
        1
      ]
    })
  }>>
}>>)[number])["qubits"])[number])["state"][]>;

// Pattern from immutable game boards
type ReadonlyArraysCase16Flat = Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>;

// Inspired by version control history
type ReadonlyArraysCase17Flat = ReadonlyArray<Readonly<{
  commit: (string & {
    __brand: "SHA1"
  });
  diff: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
}>>;

// Similar to cryptographic proof chains
type ReadonlyArraysCase18Flat = ReadonlyArray<Readonly<{
  previousHash: (string & {
    __brand: "SHA256"
  });
  nonce: number;
  readonly timestamp: ((ReadonlyArray<Readonly<{
    timestamp: number;
    values: Readonly<[
      number,
      number,
      (number)?
    ][]>;
    readonly sensorId: (string & {
      __brand: "SensorID"
    })
  }>>)[number])["timestamp"]
}>>;

// Pattern from legal contract clauses
type ReadonlyArraysCase19Flat = ReadonlyArray<Readonly<{
  clauseId: `section_${number}`;
  text: string;
  references: []
}>>;

// Inspired by type-safe spreadsheet cells
type ReadonlyArraysCase20Flat = ReadonlyArray<ReadonlyArray<({
  formula: string;
  value: never
} | {
  value: number;
  formula?: never
})>>;

// Similar to immutable musical scores
type ReadonlyArraysCase21Flat = Readonly<{
  measures: ReadonlyArray<Readonly<{
    notes: ReadonlyArray<Readonly<{
      pitch: string;
      duration: ((ReadonlyArray<({
        readonly type: "LOGIN";
        payload: ((Readonly<{
          users: ReadonlyArray<{
            readonly id: string;
            permissions: readonly [
              string,
              ...(({
                a: number
              } | {
                b: string
              }))[]
            ]
          }>
        }>)["users"])[number]
      } | {
        readonly type: "LOGOUT";
        timestamp: number
      })>)[number])["type"]
    }>>
  }>>
}>;

// Pattern from atomic design systems
type ReadonlyArraysCase22Flat = ReadonlyArray<Readonly<{
  atoms: ReadonlyArray<ReadonlyArray<({
    formula: string;
    value: never
  } | {
    value: number;
    formula?: never
  })>>;
  molecules: unknown[];
  organisms: ReadonlyArray<Readonly<{
    commit: (string & {
      __brand: "SHA1"
    });
    diff: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
  }>>
}>>;

// Inspired by satellite telemetry data
type ReadonlyArraysCase23Flat = ReadonlyArray<Readonly<{
  coordinates: Readonly<[
    number,
    number,
    (number)?
  ][]>;
  velocity: Readonly<[
    number,
    number,
    (number)?
  ][]>;
  readonly timestamp: ((ReadonlyArray<Readonly<{
    timestamp: number;
    values: Readonly<[
      number,
      number,
      (number)?
    ][]>;
    readonly sensorId: (string & {
      __brand: "SensorID"
    })
  }>>)[number])["timestamp"]
}>>;

// Similar to immutable neural network layers
type ReadonlyArraysCase24Flat = ReadonlyArray<Readonly<{
  weights: ReadonlyArray<ReadonlyArray<({
    formula: string;
    value: never
  } | {
    value: number;
    formula?: never
  })>>;
  activation: ("relu" | "sigmoid");
  readonly bias: (Readonly<Array<{
    readonly amount: number;
    readonly currency: (string & {
      __brand: "ISO4217"
    })
  }>>)[number]
}>>;

// Pattern from quantum chemistry simulations
type ReadonlyArraysCase25Flat = ReadonlyArray<Readonly<{
  electrons: ReadonlyArray<Readonly<{
    qubits: ReadonlyArray<Readonly<{
      state: ("|0>" | "|1>" | "+" | "-");
      probability: (number & {
        __range: [
          0,
          1
        ]
      })
    }>>
  }>>;
  orbitals: ReadonlyArray<Readonly<{
    energy: number;
    shape: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
  }>>
}>>;


assert<
  Equals<
    ReadonlyArraysCase1,
    ReadonlyArraysCase1Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase2,
    ReadonlyArraysCase2Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase3,
    ReadonlyArraysCase3Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase4,
    ReadonlyArraysCase4Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase5,
    ReadonlyArraysCase5Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase6,
    ReadonlyArraysCase6Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase7,
    ReadonlyArraysCase7Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase8,
    ReadonlyArraysCase8Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase9,
    ReadonlyArraysCase9Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase10,
    ReadonlyArraysCase10Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase11,
    ReadonlyArraysCase11Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase12,
    ReadonlyArraysCase12Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase13,
    ReadonlyArraysCase13Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase14,
    ReadonlyArraysCase14Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase15,
    ReadonlyArraysCase15Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase16,
    ReadonlyArraysCase16Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase17,
    ReadonlyArraysCase17Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase18,
    ReadonlyArraysCase18Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase19,
    ReadonlyArraysCase19Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase20,
    ReadonlyArraysCase20Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase21,
    ReadonlyArraysCase21Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase22,
    ReadonlyArraysCase22Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase23,
    ReadonlyArraysCase23Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase24,
    ReadonlyArraysCase24Flat
  >
>;
assert<
  Equals<
    ReadonlyArraysCase25,
    ReadonlyArraysCase25Flat
  >
>;
