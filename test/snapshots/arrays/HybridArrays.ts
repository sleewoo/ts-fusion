import { assert, type Equals } from "tsafe";

import type {
  HybridArraysCase1,
  HybridArraysCase2,
  HybridArraysCase3,
  HybridArraysCase4,
  HybridArraysCase5,
  HybridArraysCase6,
  HybridArraysCase7,
  HybridArraysCase8,
  HybridArraysCase9,
  HybridArraysCase10,
  HybridArraysCase11,
  HybridArraysCase12,
  HybridArraysCase13,
  HybridArraysCase14,
  HybridArraysCase15,
  HybridArraysCase16,
  HybridArraysCase17,
  HybridArraysCase18,
  HybridArraysCase19,
  HybridArraysCase20,
  HybridArraysCase21,
  HybridArraysCase22,
  HybridArraysCase23,
  HybridArraysCase24,
  HybridArraysCase25,
} from "@/fixtures/arrays/HybridArrays.ts";

// Inspired by React ref array patterns
type HybridArraysCase1Flat = (number[] & {
  readonly current: number[]
});

// Similar to Redux action type intersections
type HybridArraysCase2Flat = ((Array<{
  id: (string & {
    __brand: "ProductID"
  });
  variants: (((Readonly<{
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
  }>)["users"])[number])["permissions"];
  pricing: {
    base: number;
    currency: (Array<((string & {
      __brand: "id"
    }) | (number & {
      __brand: "count"
    }))>)[number];
    discounts?: [
      key: `i18n_${string}`,
      translations: [
        string,
        ((newValue: string) => void)
      ][]
    ]
  }
}> & {
  timestamp: string
}))[];

// Pattern from GIS coordinate systems
type HybridArraysCase3Flat = ([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
});

// Inspired by financial instrument hybrids
type HybridArraysCase4Flat = ((Array<((string & {
  __brand: "id"
}) | (number & {
  __brand: "count"
}))> & {
  expiration: Date
}))[];

// Similar to type-safe event emitters
type HybridArraysCase5Flat = (Array<((req: {
  params: [
    number,
    number,
    (number)?
  ][]
}, res: {
  json: ((data: Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
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
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }>) => void)
}, next: (() => void)) => Promise<void>)> & {
  eventMap: Map<string, (number[] & {
    readonly current: number[]
  })>
});

// Pattern from 3D graphics buffers
type HybridArraysCase6Flat = (Float32Array & {
  vertexCount: number;
  attributes: ([
    componentType: ("transform" | "render"),
    data: ((({
      a: number
    } | {
      b: string
    }))[])[number],
    ...dependencies: string[]
  ][] & {
    projection: ("WGS84" | "Mercator")
  })[]
});

// Inspired by blockchain smart contract ABIs
type HybridArraysCase7Flat = (({
  inputs: ((Array<((string & {
    __brand: "id"
  }) | (number & {
    __brand: "count"
  }))> & {
    expiration: Date
  }))[];
  outputs: ((Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
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
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }> & {
    timestamp: string
  }))[]
} & {
  payable: boolean
}))[];

// Similar to neural network layer hybrids
type HybridArraysCase8Flat = (Array<symbol> & {
  activation: (Array<((req: {
    params: [
      number,
      number,
      (number)?
    ][]
  }, res: {
    json: ((data: Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>) => void)
  }, next: (() => void)) => Promise<void>)>)[number];
  weights: (number[] & {
    readonly current: number[]
  })
});

// Pattern from quantum state hybrids
type HybridArraysCase9Flat = ((`img_${("jpg" | "png")}`[] & {
  classicalBits: (number[] & {
    readonly current: number[]
  })
}))[];

// Inspired by API gateway configs
type HybridArraysCase10Flat = (((Array<((req: {
  params: [
    number,
    number,
    (number)?
  ][]
}, res: {
  json: ((data: Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
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
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }>) => void)
}, next: (() => void)) => Promise<void>)>)[number] & {
  rateLimit: number;
  path: `/${string}`
}))[];

// Similar to type-safe ORM relationships
type HybridArraysCase11Flat = (Array<{
  id: (string & {
    __brand: "ProductID"
  });
  variants: (((Readonly<{
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
  }>)["users"])[number])["permissions"];
  pricing: {
    base: number;
    currency: (Array<((string & {
      __brand: "id"
    }) | (number & {
      __brand: "count"
    }))>)[number];
    discounts?: [
      key: `i18n_${string}`,
      translations: [
        string,
        ((newValue: string) => void)
      ][]
    ]
  }
}> & {
  joins: (Array<symbol> & {
    activation: (Array<((req: {
      params: [
        number,
        number,
        (number)?
      ][]
    }, res: {
      json: ((data: Array<{
        id: (string & {
          __brand: "ProductID"
        });
        variants: (((Readonly<{
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
        }>)["users"])[number])["permissions"];
        pricing: {
          base: number;
          currency: (Array<((string & {
            __brand: "id"
          }) | (number & {
            __brand: "count"
          }))>)[number];
          discounts?: [
            key: `i18n_${string}`,
            translations: [
              string,
              ((newValue: string) => void)
            ][]
          ]
        }
      }>) => void)
    }, next: (() => void)) => Promise<void>)>)[number];
    weights: (number[] & {
      readonly current: number[]
    })
  })[]
} & {
  _hydrated: boolean
});

// Pattern from physics engine colliders
type HybridArraysCase12Flat = (([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}) & {
  material: {
    friction: number;
    restitution: ((((Array<((string & {
      __brand: "id"
    }) | (number & {
      __brand: "count"
    }))> & {
      expiration: Date
    }))[])[number])["expiration"]
  }
}[]);

// Inspired by cryptocurrency UTXO patterns
type HybridArraysCase13Flat = ((Array<{
  block: (ReadonlyArray<Readonly<{
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
  }>>)[number];
  transactions: {
    from: ((Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>)[number])["id"];
    to: [
      "previousHash"
    ];
    value: ((((Array<{
      holdings: {
        asset: ((Array<{
          id: (string & {
            __brand: "ProductID"
          });
          variants: (((Readonly<{
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
          }>)["users"])[number])["permissions"];
          pricing: {
            base: number;
            currency: (Array<((string & {
              __brand: "id"
            }) | (number & {
              __brand: "count"
            }))>)[number];
            discounts?: [
              key: `i18n_${string}`,
              translations: [
                string,
                ((newValue: string) => void)
              ][]
            ]
          }
        }>)[number])["id"];
        quantity: (number & {
          __minimum: 0
        });
        value: ((Array<{
          id: (string & {
            __brand: "ProductID"
          });
          variants: (((Readonly<{
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
          }>)["users"])[number])["permissions"];
          pricing: {
            base: number;
            currency: (Array<((string & {
              __brand: "id"
            }) | (number & {
              __brand: "count"
            }))>)[number];
            discounts?: [
              key: `i18n_${string}`,
              translations: [
                string,
                ((newValue: string) => void)
              ][]
            ]
          }
        }>)[number])["pricing"]
      }[];
      riskProfile: ((ReadonlyArray<Readonly<{ [K in ((ReadonlyArray<({
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
      })>)[number])["type"]]: string }>>)[number])[keyof (ReadonlyArray<Readonly<{ [K in ((ReadonlyArray<({
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
      })>)[number])["type"]]: string }>>)[number]]
    }>)[number])["holdings"])[number])["value"]
  }[];
  smartContracts: ((Array<{
    method: `0x${string}`;
    inputs: (ReadonlyArray<Readonly<{
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
    }>>)[number];
    outputs: ((Array<{
      experimentId: `exp_${number}`;
      parameters: {
        [k: `param_${string}`]: (number | ((Array<{
          node: string;
          properties: { [K in keyof (Array<{
            id: (string & {
              __brand: "ProductID"
            });
            variants: (((Readonly<{
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
            }>)["users"])[number])["permissions"];
            pricing: {
              base: number;
              currency: (Array<((string & {
                __brand: "id"
              }) | (number & {
                __brand: "count"
              }))>)[number];
              discounts?: [
                key: `i18n_${string}`,
                translations: [
                  string,
                  ((newValue: string) => void)
                ][]
              ]
            }
          }>)[number]]?: K /** unresolved */ extends "id" ? never : ((Array<{
            id: (string & {
              __brand: "ProductID"
            });
            variants: (((Readonly<{
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
            }>)["users"])[number])["permissions"];
            pricing: {
              base: number;
              currency: (Array<((string & {
                __brand: "id"
              }) | (number & {
                __brand: "count"
              }))>)[number];
              discounts?: [
                key: `i18n_${string}`,
                translations: [
                  string,
                  ((newValue: string) => void)
                ][]
              ]
            }
          }>)[number])[K /** unresolved */] }
        }>)[number])["node"])
      };
      metrics: (((ReadonlyArray<Readonly<{
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
      }>>)[number])["weights"])[number];
      dependencies: ((Array<{
        deviceId: `dev_${string}`;
        sensors: ReadonlyArray<Readonly<{
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
        readonly firmware: {
          version: [
            major: number,
            minor: number,
            patch: number
          ];
          checksum: (string & {
            __length: 40
          })
        }
      }>)[number])["firmware"]
    }>)[number])["metrics"];
    constant: ((Array<{
      type: ("hero" | "cta" | "text");
      content: ((Array<{
        id: (string & {
          __brand: "ProductID"
        });
        variants: (((Readonly<{
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
        }>)["users"])[number])["permissions"];
        pricing: {
          base: number;
          currency: (Array<((string & {
            __brand: "id"
          }) | (number & {
            __brand: "count"
          }))>)[number];
          discounts?: [
            key: `i18n_${string}`,
            translations: [
              string,
              ((newValue: string) => void)
            ][]
          ]
        }
      }>)[number])["pricing"];
      meta: Partial<(Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number]>;
      readonly _version: number
    }>)[number])["_version"] extends number ? boolean : never
  }>)[number])["constant"][]
}> & {
  scriptSig: (Array<((req: {
    params: [
      number,
      number,
      (number)?
    ][]
  }, res: {
    json: ((data: Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>) => void)
  }, next: (() => void)) => Promise<void>)> & {
    eventMap: Map<string, (number[] & {
      readonly current: number[]
    })>
  })
}))[];

// Similar to medical imaging hybrids
type HybridArraysCase14Flat = ((Int16Array & {
  dimensions: [
    number,
    number,
    number
  ];
  voxelSize: (number[] & {
    readonly current: number[]
  })
}))[];

// Pattern from game engine ECS systems
type HybridArraysCase15Flat = ((Array<{
  mesh: ((({
    a: number
  } | {
    b: string
  }))[])[number];
  transform: {
    position: [
      number,
      number,
      (number)?
    ][];
    rotation: (((Array<{
      deviceId: `dev_${string}`;
      sensors: ReadonlyArray<Readonly<{
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
      readonly firmware: {
        version: [
          major: number,
          minor: number,
          patch: number
        ];
        checksum: (string & {
          __length: 40
        })
      }
    }>)[number])["firmware"])["version"]
  };
  children: []
}> & {
  systems: (((Array<((req: {
    params: [
      number,
      number,
      (number)?
    ][]
  }, res: {
    json: ((data: Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>) => void)
  }, next: (() => void)) => Promise<void>)>)[number] & {
    rateLimit: number;
    path: `/${string}`
  }))[]
}))[];

// Inspired by IoT device telemetry
type HybridArraysCase16Flat = ((Array<{
  deviceId: `dev_${string}`;
  sensors: ReadonlyArray<Readonly<{
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
  readonly firmware: {
    version: [
      major: number,
      minor: number,
      patch: number
    ];
    checksum: (string & {
      __length: 40
    })
  }
}> & {
  firmware: ((`img_${("jpg" | "png")}`[] & {
    classicalBits: (number[] & {
      readonly current: number[]
    })
  }))[];
  signalStrength: ((number[] & {
    readonly current: number[]
  }))[number]
}))[];

// Similar to type-safe CSS-in-JS props
type HybridArraysCase17Flat = {
  breakpoints: ([
    componentType: ("transform" | "render"),
    data: ((({
      a: number
    } | {
      b: string
    }))[])[number],
    ...dependencies: string[]
  ][] & {
    projection: ("WGS84" | "Mercator")
  });
  variants: ((Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
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
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }> & {
    timestamp: string
  }))[]
}[];

// Pattern from aerospace telemetry
type HybridArraysCase18Flat = (((Float32Array & {
  vertexCount: number;
  attributes: ([
    componentType: ("transform" | "render"),
    data: ((({
      a: number
    } | {
      b: string
    }))[])[number],
    ...dependencies: string[]
  ][] & {
    projection: ("WGS84" | "Mercator")
  })[]
}) & {
  timestamp: ((((Array<((string & {
    __brand: "id"
  }) | (number & {
    __brand: "count"
  }))> & {
    expiration: Date
  }))[])[number])["expiration"];
  source: ("GPS" | "INS")
}))[];

// Inspired by computational biology
type HybridArraysCase19Flat = ((Array<{
  genomeId: (string & {
    __brand: "GenomeID"
  });
  sequences: {
    chromosome: `chr${number}`;
    markers: ((((ReadonlyArray<Readonly<{
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
    }>>)[number])["orbitals"])[number])["energy"][]
  }[];
  variations: ((Array<{
    node: string;
    properties: { [K in keyof (Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>)[number]]?: K /** unresolved */ extends "id" ? never : ((Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>)[number])[K /** unresolved */] }
  }>)[number])["properties"]
}> & {
  alignment: (number[] & {
    readonly current: number[]
  });
  scoringMatrix: (Float32Array & {
    vertexCount: number;
    attributes: ([
      componentType: ("transform" | "render"),
      data: ((({
        a: number
      } | {
        b: string
      }))[])[number],
      ...dependencies: string[]
    ][] & {
      projection: ("WGS84" | "Mercator")
    })[]
  })
}))[];

// Similar to quantum-classical hybrids
type HybridArraysCase20Flat = ((((`img_${("jpg" | "png")}`[] & {
  classicalBits: (number[] & {
    readonly current: number[]
  })
}))[] & {
  classicalControl: ((((Array<((req: {
    params: [
      number,
      number,
      (number)?
    ][]
  }, res: {
    json: ((data: Array<{
      id: (string & {
        __brand: "ProductID"
      });
      variants: (((Readonly<{
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
      }>)["users"])[number])["permissions"];
      pricing: {
        base: number;
        currency: (Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number];
        discounts?: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ]
      }
    }>) => void)
  }, next: (() => void)) => Promise<void>)>)[number] & {
    rateLimit: number;
    path: `/${string}`
  }))[])[number]
}))[];

// Pattern from automotive CAN bus
type HybridArraysCase21Flat = ((Uint8Array & {
  arbitrationId: number;
  extended: boolean;
  data: (number[] & {
    readonly current: number[]
  })
}))[];

// Inspired by astronomy catalogs
type HybridArraysCase22Flat = ((Array<{
  celestialId: `cel_${number}`;
  coordinates: ((ReadonlyArray<Readonly<{
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
  }>>)[number])["coordinates"];
  magnitudes: {
    band: (((((ReadonlyArray<Readonly<{
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
    }>>)[number])["orbitals"])[number])["shape"])[number];
    value: number
  }[];
  discoveries: ((((Array<{
    documentId: (string & {
      __brand: "DocumentID"
    });
    revisions: {
      content: ((Array<{
        type: ("hero" | "cta" | "text");
        content: ((Array<{
          id: (string & {
            __brand: "ProductID"
          });
          variants: (((Readonly<{
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
          }>)["users"])[number])["permissions"];
          pricing: {
            base: number;
            currency: (Array<((string & {
              __brand: "id"
            }) | (number & {
              __brand: "count"
            }))>)[number];
            discounts?: [
              key: `i18n_${string}`,
              translations: [
                string,
                ((newValue: string) => void)
              ][]
            ]
          }
        }>)[number])["pricing"];
        meta: Partial<(Array<((string & {
          __brand: "id"
        }) | (number & {
          __brand: "count"
        }))>)[number]>;
        readonly _version: number
      }>)[number])["content"];
      author: (((Readonly<{
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
      }>)["users"])[number])["id"];
      timestamp: ((ReadonlyArray<Readonly<{
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
    }[]
  }>)[number])["revisions"])[number])["author"][]
}> & {
  spectralClass: ("O" | "B" | "A");
  parallax: ((number[] & {
    readonly current: number[]
  }))[number]
}))[];

// Similar to type-safe dependency graphs
type HybridArraysCase23Flat = ((readonly number[][] & {
  dependencyMap: Map<((((Array<{
    id: (string & {
      __brand: "ProductID"
    });
    variants: (((Readonly<{
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
    }>)["users"])[number])["permissions"];
    pricing: {
      base: number;
      currency: (Array<((string & {
        __brand: "id"
      }) | (number & {
        __brand: "count"
      }))>)[number];
      discounts?: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ]
    }
  }> & {
    timestamp: string
  }))[])[number])["length"], ((Array<((string & {
    __brand: "id"
  }) | (number & {
    __brand: "count"
  }))> & {
    expiration: Date
  }))[]>
}))[];

// Pattern from robotics sensor fusion
type HybridArraysCase24Flat = ((([
  componentType: ("transform" | "render"),
  data: ((({
    a: number
  } | {
    b: string
  }))[])[number],
  ...dependencies: string[]
][] & {
  projection: ("WGS84" | "Mercator")
}) & {
  sensorType: ("LIDAR" | "RADAR" | "CAMERA");
  calibration: (Float32Array & {
    vertexCount: number;
    attributes: ([
      componentType: ("transform" | "render"),
      data: ((({
        a: number
      } | {
        b: string
      }))[])[number],
      ...dependencies: string[]
    ][] & {
      projection: ("WGS84" | "Mercator")
    })[]
  })
}))[];

// Inspired by nuclear physics simulations
type HybridArraysCase25Flat = ((((`img_${("jpg" | "png")}`[] & {
  classicalBits: (number[] & {
    readonly current: number[]
  })
}))[] & {
  decayChains: ((Array<((string & {
    __brand: "id"
  }) | (number & {
    __brand: "count"
  }))> & {
    expiration: Date
  }))[];
  halfLife: ((number[] & {
    readonly current: number[]
  }))[number]
}))[];


assert<
  Equals<
    HybridArraysCase1,
    HybridArraysCase1Flat
  >
>;
assert<
  Equals<
    HybridArraysCase2,
    HybridArraysCase2Flat
  >
>;
assert<
  Equals<
    HybridArraysCase3,
    HybridArraysCase3Flat
  >
>;
assert<
  Equals<
    HybridArraysCase4,
    HybridArraysCase4Flat
  >
>;
assert<
  Equals<
    HybridArraysCase5,
    HybridArraysCase5Flat
  >
>;
assert<
  Equals<
    HybridArraysCase6,
    HybridArraysCase6Flat
  >
>;
assert<
  Equals<
    HybridArraysCase7,
    HybridArraysCase7Flat
  >
>;
assert<
  Equals<
    HybridArraysCase8,
    HybridArraysCase8Flat
  >
>;
assert<
  Equals<
    HybridArraysCase9,
    HybridArraysCase9Flat
  >
>;
assert<
  Equals<
    HybridArraysCase10,
    HybridArraysCase10Flat
  >
>;
assert<
  Equals<
    HybridArraysCase11,
    HybridArraysCase11Flat
  >
>;
assert<
  Equals<
    HybridArraysCase12,
    HybridArraysCase12Flat
  >
>;
assert<
  Equals<
    HybridArraysCase13,
    HybridArraysCase13Flat
  >
>;
assert<
  Equals<
    HybridArraysCase14,
    HybridArraysCase14Flat
  >
>;
assert<
  Equals<
    HybridArraysCase15,
    HybridArraysCase15Flat
  >
>;
assert<
  Equals<
    HybridArraysCase16,
    HybridArraysCase16Flat
  >
>;
assert<
  Equals<
    HybridArraysCase17,
    HybridArraysCase17Flat
  >
>;
assert<
  Equals<
    HybridArraysCase18,
    HybridArraysCase18Flat
  >
>;
assert<
  Equals<
    HybridArraysCase19,
    HybridArraysCase19Flat
  >
>;
assert<
  Equals<
    HybridArraysCase20,
    HybridArraysCase20Flat
  >
>;
assert<
  Equals<
    HybridArraysCase21,
    HybridArraysCase21Flat
  >
>;
assert<
  Equals<
    HybridArraysCase22,
    HybridArraysCase22Flat
  >
>;
assert<
  Equals<
    HybridArraysCase23,
    HybridArraysCase23Flat
  >
>;
assert<
  Equals<
    HybridArraysCase24,
    HybridArraysCase24Flat
  >
>;
assert<
  Equals<
    HybridArraysCase25,
    HybridArraysCase25Flat
  >
>;
