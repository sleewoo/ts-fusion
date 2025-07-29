import { assert, type Equals } from "tsafe";

import type {
  ComplexObjectArraysCase1,
  ComplexObjectArraysCase2,
  ComplexObjectArraysCase3,
  ComplexObjectArraysCase4,
  ComplexObjectArraysCase5,
  ComplexObjectArraysCase6,
  ComplexObjectArraysCase7,
  ComplexObjectArraysCase8,
  ComplexObjectArraysCase9,
  ComplexObjectArraysCase10,
  ComplexObjectArraysCase11,
  ComplexObjectArraysCase12,
  ComplexObjectArraysCase13,
  ComplexObjectArraysCase14,
  ComplexObjectArraysCase15,
  ComplexObjectArraysCase16,
  ComplexObjectArraysCase17,
  ComplexObjectArraysCase18,
  ComplexObjectArraysCase19,
  ComplexObjectArraysCase20,
  ComplexObjectArraysCase21,
  ComplexObjectArraysCase22,
  ComplexObjectArraysCase23,
  ComplexObjectArraysCase24,
  ComplexObjectArraysCase25,
} from "@/fixtures/arrays/complex-object-arrays.ts";

// Inspired by e-commerce product listings
type ComplexObjectArraysCase1Flat = Array<{
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
}>;

// Similar to CMS content blocks pattern
type ComplexObjectArraysCase2Flat = Array<{
  type: (("hero") | ("cta") | ("text"));
  content:  {
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
    };
  meta: Partial<(((string) & ({
    __brand: "id"
  }))) | (((number) & ({
    __brand: "count"
  })))>;
  readonly _version: number
}>;

// Pattern from social media graphs
type ComplexObjectArraysCase3Flat = Array<{
  node: string;
  properties: { [K in keyof ({
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
  })]?: ((K /** unresolved */) extends ("id") ? (never) : (({
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
  })[K /** unresolved */])) }
}>;

// Inspired by IoT device configurations
type ComplexObjectArraysCase4Flat = Array<{
  deviceId: `dev_${string}`;
  sensors: ReadonlyArray<Readonly<{
    timestamp: number;
    values: Readonly<[
      number,
      number,
      (number)?
    ][]>;
    readonly sensorId: ((string) & ({
      __brand: "SensorID"
    }))
  }>>;
  readonly firmware: {
    version: [
      major: number,
      minor: number,
      patch: number
    ];
    checksum: ((string) & ({
      __length: 40
    }))
  }
}>;

// Similar to medical records structure
type ComplexObjectArraysCase5Flat = Array<{
  patientId:  ((string) & ({
      __brand: "ProductID"
    }));
  history: {
    visitDate:  number;
    readings:  Readonly<[
          number,
          number,
          (number)?
        ][]>
  }[];
  emergencyContacts: [
    key: `i18n_${string}`,
    translations: [
      string,
      ((newValue: string) => void)
    ][]
  ]
}>;

// Pattern from 3D scene graphs
type ComplexObjectArraysCase6Flat = Array<{
  mesh: ({
    a: number
  }) | ({
    b: string
  });
  transform: {
    position: [
      number,
      number,
      (number)?
    ][];
    rotation:  [
          major: number,
          minor: number,
          patch: number
        ]
  };
  children: []
}>;

// Inspired by financial portfolios
type ComplexObjectArraysCase7Flat = Array<{
  holdings: {
    asset:  ((string) & ({
        __brand: "ProductID"
      }));
    quantity: ((number) & ({
      __minimum: 0
    }));
    value:  {
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
  }[];
  riskProfile: (Readonly<{ [K in  ( "LOGIN" |  "LOGOUT")]: string }>)[keyof (Readonly<{ [K in  ( "LOGIN" |  "LOGOUT")]: string }>)]
}>;

// Similar to versioned document stores
type ComplexObjectArraysCase8Flat = Array<{
  documentId: ((string) & ({
    __brand: "DocumentID"
  }));
  revisions: {
    content:   {
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
        };
    author:  string;
    timestamp:  number
  }[]
}>;

// Pattern from ML experiment tracking
type ComplexObjectArraysCase9Flat = Array<{
  experimentId: `exp_${number}`;
  parameters: {
    [k: `param_${string}`]: ((number) | ( string))
  };
  metrics: ReadonlyArray<(({
      formula: string;
      value: never
    }) | ({
      value: number;
      formula?: never
    }))>;
  dependencies:  {
      version: [
        major: number,
        minor: number,
        patch: number
      ];
      checksum: ((string) & ({
        __length: 40
      }))
    }
}>;

// Inspired by game character inventories
type ComplexObjectArraysCase10Flat = Array<{
  characterId:  ((string) & ({
      __brand: "DocumentID"
    }));
  equipment: {
    slot: (("weapon") | ("armor") | ("accessory"));
    item: {
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
    };
    modifiers: ({
      formula: string;
      value: never
    }) | ({
      value: number;
      formula?: never
    })
  }[];
  skills:  (Readonly<{ [K in  ( "LOGIN" |  "LOGOUT")]: string }>)[keyof (Readonly<{ [K in  ( "LOGIN" |  "LOGOUT")]: string }>)][]
}>;

// Pattern from smart contract ABIs
type ComplexObjectArraysCase11Flat = Array<{
  method: `0x${string}`;
  inputs: Readonly<{
    previousHash: ((string) & ({
      __brand: "SHA256"
    }));
    nonce: number;
    readonly timestamp:  number
  }>;
  outputs:  ReadonlyArray<(({
        formula: string;
        value: never
      }) | ({
        value: number;
        formula?: never
      }))>;
  constant: (( number) extends (number) ? (boolean) : (never))
}>;

// Similar to genomic data structures
type ComplexObjectArraysCase12Flat = Array<{
  genomeId: ((string) & ({
    __brand: "GenomeID"
  }));
  sequences: {
    chromosome: `chr${number}`;
    markers:  number[]
  }[];
  variations:  { [K in keyof ({
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
    })]?: ((K /** unresolved */) extends ("id") ? (never) : (({
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
    })[K /** unresolved */])) }
}>;

// Inspired by CAD assembly structures
type ComplexObjectArraysCase13Flat = Array<{
  assemblyId:  ((string) & ({
      __brand: "DocumentID"
    }));
  components: ((({
    mesh: ({
      a: number
    }) | ({
      b: string
    });
    transform: {
      position: [
        number,
        number,
        (number)?
      ][];
      rotation:  [
            major: number,
            minor: number,
            patch: number
          ]
    };
    children: []
  }) & ({
    material: {
      density:  ReadonlyArray<(({
            formula: string;
            value: never
          }) | ({
            value: number;
            formula?: never
          }))>;
      texture:  Readonly<[
          number,
          number,
          number
        ]>
    }
  })))[];
  constraints:  Readonly<ReadonlyArray<ReadonlyArray<(("X") | ("O") | (null))>>>
}>;

// Pattern from astrophysics catalogs
type ComplexObjectArraysCase14Flat = Array<{
  celestialId: `cel_${number}`;
  coordinates:  Readonly<[
      number,
      number,
      (number)?
    ][]>;
  magnitudes: {
    band: ReadonlyArray<(("X") | ("O") | (null))>;
    value: number
  }[];
  discoveries:   string[]
}>;

// Similar to legal case management
type ComplexObjectArraysCase15Flat = Array<{
  caseId:  ((string) & ({
      __brand: "GenomeID"
    }));
  parties: [
    key: `i18n_${string}`,
    translations: [
      string,
      ((newValue: string) => void)
    ][]
  ];
  documents: {
    filing: {
      documentId: ((string) & ({
        __brand: "DocumentID"
      }));
      revisions: {
        content:   {
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
            };
        author:  string;
        timestamp:  number
      }[]
    };
    evidence:  []
  }[];
  timeline:  Readonly<ReadonlyArray<ReadonlyArray<(("X") | ("O") | (null))>>>[]
}>;

// Inspired by quantum experiment setups
type ComplexObjectArraysCase16Flat = Array<{
  experiment: Readonly<{
    electrons: ReadonlyArray<Readonly<{
      qubits: ReadonlyArray<Readonly<{
        state: (("|0>") | ("|1>") | ("+") | ("-"));
        probability: ((number) & ({
          __range: [
            0,
            1
          ]
        }))
      }>>
    }>>;
    orbitals: ReadonlyArray<Readonly<{
      energy: number;
      shape: Readonly<ReadonlyArray<ReadonlyArray<(("X") | ("O") | (null))>>>
    }>>
  }>;
  controls: {
    parameter: ( {
        [k: `param_${string}`]: ((number) | ( string))
      })[keyof ( {
        [k: `param_${string}`]: ((number) | ( string))
      })];
    range: [
      number,
      number,
      (number)?
    ]
  }[];
  observations:  {
      band: ReadonlyArray<(("X") | ("O") | (null))>;
      value: number
    }[]
}>;

// Pattern from industrial IoT systems
type ComplexObjectArraysCase17Flat = Array<{
  factoryId: `fac_${string}`;
  productionLines: {
    lineId:  ((string) & ({
        __brand: "ProductID"
      }));
    sensors:  ReadonlyArray<Readonly<{
        timestamp: number;
        values: Readonly<[
          number,
          number,
          (number)?
        ][]>;
        readonly sensorId: ((string) & ({
          __brand: "SensorID"
        }))
      }>>;
    throughput:   {
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
  }[];
  maintenanceLogs:  {
      content:   {
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
          };
      author:  string;
      timestamp:  number
    }[]
}>;

// Similar to climate data models
type ComplexObjectArraysCase18Flat = Array<{
  regionId: (( Readonly<[
      number,
      number,
      (number)?
    ][]>) extends (infer C) ? (((C /** unresolved */) extends (string[]) ? (`reg_${(C /** unresolved */)[0]}_${(C /** unresolved */)[1]}`) : (never))) : (never));
  measurements: {
    year: number;
    temperature:  ReadonlyArray<(({
          formula: string;
          value: never
        }) | ({
          value: number;
          formula?: never
        }))>;
    precipitation:  number
  }[]
}>;

// Inspired by neural architecture search
type ComplexObjectArraysCase19Flat = Array<{
  architecture: Readonly<{
    weights: ReadonlyArray<ReadonlyArray<(({
      formula: string;
      value: never
    }) | ({
      value: number;
      formula?: never
    }))>>;
    activation: (("relu") | ("sigmoid"));
    readonly bias: {
      readonly amount: number;
      readonly currency: ((string) & ({
        __brand: "ISO4217"
      }))
    }
  }>;
  performance: {
    metric:  ReadonlyArray<(({
          formula: string;
          value: never
        }) | ({
          value: number;
          formula?: never
        }))>;
    value:   ReadonlyArray<(({
              formula: string;
              value: never
            }) | ({
              value: number;
              formula?: never
            }))>
  };
  variants: []
}>;

// Pattern from pharmaceutical research
type ComplexObjectArraysCase20Flat = Array<{
  compoundId: `cmpd_${string}`;
  structure: {
    smiles: string;
    properties:  ReadonlyArray<Readonly<{
          state: (("|0>") | ("|1>") | ("+") | ("-"));
          probability: ((number) & ({
            __range: [
              0,
              1
            ]
          }))
        }>>[]
  };
  trials: {
    phase:  (("hero") | ("cta") | ("text"));
    results:   Readonly<ReadonlyArray<ReadonlyArray<(("X") | ("O") | (null))>>>[]
  }[]
}>;

// Inspired by space mission planning
type ComplexObjectArraysCase21Flat = Array<{
  missionId: `msn_${number}`;
  trajectory: {
    waypoints:  Readonly<[
        number,
        number,
        (number)?
      ][]>[];
    deltaV:  ((number) & ({
          __minimum: 0
        }))
  };
  payloads: ((({
    deviceId: `dev_${string}`;
    sensors: ReadonlyArray<Readonly<{
      timestamp: number;
      values: Readonly<[
        number,
        number,
        (number)?
      ][]>;
      readonly sensorId: ((string) & ({
        __brand: "SensorID"
      }))
    }>>;
    readonly firmware: {
      version: [
        major: number,
        minor: number,
        patch: number
      ];
      checksum: ((string) & ({
        __length: 40
      }))
    }
  }) | ({
    celestialId: `cel_${number}`;
    coordinates:  Readonly<[
        number,
        number,
        (number)?
      ][]>;
    magnitudes: {
      band: ReadonlyArray<(("X") | ("O") | (null))>;
      value: number
    }[];
    discoveries:   string[]
  })))[]
}>;

// Similar to cybersecurity event logs
type ComplexObjectArraysCase22Flat = Array<{
  incidentId:  `cmpd_${string}`;
  timeline: {
    detected:  number;
    severity:  number;
    indicators:  number[]
  }[];
  mitigation:   ReadonlyArray<(({
          formula: string;
          value: never
        }) | ({
          value: number;
          formula?: never
        }))>
}>;

// Pattern from augmented reality scenes
type ComplexObjectArraysCase23Flat = Array<{
  sceneId: `scn_${string}`;
  anchors: {
    position:  [
          number,
          number,
          (number)?
        ][];
    content:   {
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
  }[];
  physics: {
    gravity: [
      number,
      number,
      (number)?
    ];
    collisions:  [
          number,
          number,
          (number)?
        ]
  }
}>;

// Inspired by blockchain transaction graphs
type ComplexObjectArraysCase24Flat = Array<{
  block: Readonly<{
    previousHash: ((string) & ({
      __brand: "SHA256"
    }));
    nonce: number;
    readonly timestamp:  number
  }>;
  transactions: {
    from:  ((string) & ({
        __brand: "ProductID"
      }));
    to: [
      "previousHash"
    ];
    value:   {
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
  }[];
  smartContracts:  (( number) extends (number) ? (boolean) : (never))[]
}>;

// Pattern from quantum cryptography
type ComplexObjectArraysCase25Flat = Array<{
  protocol: (("BB84") | ("E91"));
  participants: {
    publicKey:   ((string) & ({
            __brand: "ProductID"
          }));
    basis: ReadonlyArray<(("X") | ("O") | (null))>
  }[];
  exchange:  (("|0>") | ("|1>") | ("+") | ("-"))[]
}>;


assert<
  Equals<
    ComplexObjectArraysCase1,
    ComplexObjectArraysCase1Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase2,
    ComplexObjectArraysCase2Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase3,
    ComplexObjectArraysCase3Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase4,
    ComplexObjectArraysCase4Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase5,
    ComplexObjectArraysCase5Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase6,
    ComplexObjectArraysCase6Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase7,
    ComplexObjectArraysCase7Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase8,
    ComplexObjectArraysCase8Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase9,
    ComplexObjectArraysCase9Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase10,
    ComplexObjectArraysCase10Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase11,
    ComplexObjectArraysCase11Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase12,
    ComplexObjectArraysCase12Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase13,
    ComplexObjectArraysCase13Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase14,
    ComplexObjectArraysCase14Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase15,
    ComplexObjectArraysCase15Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase16,
    ComplexObjectArraysCase16Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase17,
    ComplexObjectArraysCase17Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase18,
    ComplexObjectArraysCase18Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase19,
    ComplexObjectArraysCase19Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase20,
    ComplexObjectArraysCase20Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase21,
    ComplexObjectArraysCase21Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase22,
    ComplexObjectArraysCase22Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase23,
    ComplexObjectArraysCase23Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase24,
    ComplexObjectArraysCase24Flat
  >
>;
assert<
  Equals<
    ComplexObjectArraysCase25,
    ComplexObjectArraysCase25Flat
  >
>;
