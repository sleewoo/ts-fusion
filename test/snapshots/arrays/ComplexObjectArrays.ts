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
} from "@/fixtures/arrays/ComplexObjectArrays.ts";

// Inspired by e-commerce product listings
type ComplexObjectArraysCase1Flat = Array<{
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
}>;

// Similar to CMS content blocks pattern
type ComplexObjectArraysCase2Flat = Array<{
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
}>;

// Pattern from social media graphs
type ComplexObjectArraysCase3Flat = Array<{
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
  }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
  }>)[number])[K /** unresolved */]) }
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
}>;

// Similar to medical records structure
type ComplexObjectArraysCase5Flat = Array<{
  patientId: ((Array<{
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
  history: {
    visitDate: ((ReadonlyArray<Readonly<{
      timestamp: number;
      values: Readonly<[
        number,
        number,
        (number)?
      ][]>;
      readonly sensorId: (string & {
        __brand: "SensorID"
      })
    }>>)[number])["timestamp"];
    readings: ((((Array<{
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
    }>)[number])["sensors"])[number])["values"]
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
}>;

// Inspired by financial portfolios
type ComplexObjectArraysCase7Flat = Array<{
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
}>;

// Similar to versioned document stores
type ComplexObjectArraysCase8Flat = Array<{
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
}>;

// Pattern from ML experiment tracking
type ComplexObjectArraysCase9Flat = Array<{
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
      }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
      }>)[number])[K /** unresolved */]) }
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
}>;

// Inspired by game character inventories
type ComplexObjectArraysCase10Flat = Array<{
  characterId: ((Array<{
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
  }>)[number])["documentId"];
  equipment: {
    slot: ("weapon" | "armor" | "accessory");
    item: (Array<{
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
    }>)[number];
    modifiers: ((ReadonlyArray<ReadonlyArray<({
      formula: string;
      value: never
    } | {
      value: number;
      formula?: never
    })>>)[number])[number]
  }[];
  skills: ((Array<{
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
  }>)[number])["riskProfile"][]
}>;

// Pattern from smart contract ABIs
type ComplexObjectArraysCase11Flat = Array<{
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
        }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
        }>)[number])[K /** unresolved */]) }
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
  constant: (((Array<{
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
  }>)[number])["_version"] extends number ? boolean : never)
}>;

// Similar to genomic data structures
type ComplexObjectArraysCase12Flat = Array<{
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
    }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
    }>)[number])[K /** unresolved */]) }
  }>)[number])["properties"]
}>;

// Inspired by CAD assembly structures
type ComplexObjectArraysCase13Flat = Array<{
  assemblyId: ((Array<{
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
  }>)[number])["documentId"];
  components: (((Array<{
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
  }>)[number] & {
    material: {
      density: ((Array<{
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
            }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
            }>)[number])[K /** unresolved */]) }
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
      texture: ((ReadonlyArray<Readonly<{
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
      }>>)[number])["breakpoints"]
    }
  }))[];
  constraints: ((ReadonlyArray<Readonly<{
    commit: (string & {
      __brand: "SHA1"
    });
    diff: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
  }>>)[number])["diff"]
}>;

// Pattern from astrophysics catalogs
type ComplexObjectArraysCase14Flat = Array<{
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
}>;

// Similar to legal case management
type ComplexObjectArraysCase15Flat = Array<{
  caseId: ((Array<{
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
      }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
      }>)[number])[K /** unresolved */]) }
    }>)[number])["properties"]
  }>)[number])["genomeId"];
  parties: [
    key: `i18n_${string}`,
    translations: [
      string,
      ((newValue: string) => void)
    ][]
  ];
  documents: {
    filing: (Array<{
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
    }>)[number];
    evidence: ((ReadonlyArray<Readonly<{
      clauseId: `section_${number}`;
      text: string;
      references: []
    }>>)[number])["references"]
  }[];
  timeline: ((ReadonlyArray<Readonly<{
    commit: (string & {
      __brand: "SHA1"
    });
    diff: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
  }>>)[number])["diff"][]
}>;

// Inspired by quantum experiment setups
type ComplexObjectArraysCase16Flat = Array<{
  experiment: (ReadonlyArray<Readonly<{
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
  }>>)[number];
  controls: {
    parameter: (((Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
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
    }>)[number])["parameters"])[keyof ((Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
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
    }>)[number])["parameters"]];
    range: (Readonly<[
      number,
      number,
      (number)?
    ][]>)[number]
  }[];
  observations: ((Array<{
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
  }>)[number])["magnitudes"]
}>;

// Pattern from industrial IoT systems
type ComplexObjectArraysCase17Flat = Array<{
  factoryId: `fac_${string}`;
  productionLines: {
    lineId: ((Array<{
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
    sensors: ((Array<{
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
    }>)[number])["sensors"];
    throughput: ((((Array<{
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
  maintenanceLogs: ((Array<{
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
  }>)[number])["revisions"]
}>;

// Similar to climate data models
type ComplexObjectArraysCase18Flat = Array<{
  regionId: (((ReadonlyArray<Readonly<{
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
  }>>)[number])["coordinates"] extends infer C ? (C /** unresolved */ extends string[] ? `reg_${(C /** unresolved */)[0]}_${(C /** unresolved */)[1]}` : never) : never);
  measurements: {
    year: number;
    temperature: ((Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
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
    precipitation: ((Readonly<Array<{
      readonly amount: number;
      readonly currency: (string & {
        __brand: "ISO4217"
      })
    }>>)[number])["amount"]
  }[]
}>;

// Inspired by neural architecture search
type ComplexObjectArraysCase19Flat = Array<{
  architecture: (ReadonlyArray<Readonly<{
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
  }>>)[number];
  performance: {
    metric: ((Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
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
    value: ((((Array<{
      regionId: (((ReadonlyArray<Readonly<{
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
      }>>)[number])["coordinates"] extends infer C ? (C /** unresolved */ extends string[] ? `reg_${(C /** unresolved */)[0]}_${(C /** unresolved */)[1]}` : never) : never);
      measurements: {
        year: number;
        temperature: ((Array<{
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
              }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
              }>)[number])[K /** unresolved */]) }
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
        precipitation: ((Readonly<Array<{
          readonly amount: number;
          readonly currency: (string & {
            __brand: "ISO4217"
          })
        }>>)[number])["amount"]
      }[]
    }>)[number])["measurements"])[number])["temperature"]
  };
  variants: []
}>;

// Pattern from pharmaceutical research
type ComplexObjectArraysCase20Flat = Array<{
  compoundId: `cmpd_${string}`;
  structure: {
    smiles: string;
    properties: ((((ReadonlyArray<Readonly<{
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
    }>>)[number])["electrons"])[number])["qubits"][]
  };
  trials: {
    phase: ((Array<{
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
    }>)[number])["type"];
    results: ((Array<{
      caseId: ((Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
        }>)[number])["properties"]
      }>)[number])["genomeId"];
      parties: [
        key: `i18n_${string}`,
        translations: [
          string,
          ((newValue: string) => void)
        ][]
      ];
      documents: {
        filing: (Array<{
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
        }>)[number];
        evidence: ((ReadonlyArray<Readonly<{
          clauseId: `section_${number}`;
          text: string;
          references: []
        }>>)[number])["references"]
      }[];
      timeline: ((ReadonlyArray<Readonly<{
        commit: (string & {
          __brand: "SHA1"
        });
        diff: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
      }>>)[number])["diff"][]
    }>)[number])["timeline"]
  }[]
}>;

// Inspired by space mission planning
type ComplexObjectArraysCase21Flat = Array<{
  missionId: `msn_${number}`;
  trajectory: {
    waypoints: ((ReadonlyArray<Readonly<{
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
    }>>)[number])["coordinates"][];
    deltaV: ((((Array<{
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
    }>)[number])["holdings"])[number])["quantity"]
  };
  payloads: (((Array<{
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
  }>)[number] | (Array<{
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
  }>)[number]))[]
}>;

// Similar to cybersecurity event logs
type ComplexObjectArraysCase22Flat = Array<{
  incidentId: ((Array<{
    compoundId: `cmpd_${string}`;
    structure: {
      smiles: string;
      properties: ((((ReadonlyArray<Readonly<{
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
      }>>)[number])["electrons"])[number])["qubits"][]
    };
    trials: {
      phase: ((Array<{
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
      }>)[number])["type"];
      results: ((Array<{
        caseId: ((Array<{
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
            }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
            }>)[number])[K /** unresolved */]) }
          }>)[number])["properties"]
        }>)[number])["genomeId"];
        parties: [
          key: `i18n_${string}`,
          translations: [
            string,
            ((newValue: string) => void)
          ][]
        ];
        documents: {
          filing: (Array<{
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
          }>)[number];
          evidence: ((ReadonlyArray<Readonly<{
            clauseId: `section_${number}`;
            text: string;
            references: []
          }>>)[number])["references"]
        }[];
        timeline: ((ReadonlyArray<Readonly<{
          commit: (string & {
            __brand: "SHA1"
          });
          diff: Readonly<ReadonlyArray<ReadonlyArray<("X" | "O" | null)>>>
        }>>)[number])["diff"][]
      }>)[number])["timeline"]
    }[]
  }>)[number])["compoundId"];
  timeline: {
    detected: ((ReadonlyArray<Readonly<{
      timestamp: number;
      values: Readonly<[
        number,
        number,
        (number)?
      ][]>;
      readonly sensorId: (string & {
        __brand: "SensorID"
      })
    }>>)[number])["timestamp"];
    severity: ((Array<{
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
    }>)[number])["_version"];
    indicators: ((ReadonlyArray<Readonly<{
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
    }>>)[number])["nonce"][]
  }[];
  mitigation: ((Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
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
    constant: (((Array<{
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
    }>)[number])["_version"] extends number ? boolean : never)
  }>)[number])["outputs"]
}>;

// Pattern from augmented reality scenes
type ComplexObjectArraysCase23Flat = Array<{
  sceneId: `scn_${string}`;
  anchors: {
    position: (((Array<{
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
    }>)[number])["transform"])["position"];
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
    }>)[number])["content"]
  }[];
  physics: {
    gravity: (Readonly<[
      number,
      number,
      (number)?
    ][]>)[number];
    collisions: ((((Array<{
      experiment: (ReadonlyArray<Readonly<{
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
      }>>)[number];
      controls: {
        parameter: (((Array<{
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
              }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
              }>)[number])[K /** unresolved */]) }
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
        }>)[number])["parameters"])[keyof ((Array<{
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
              }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
                id: (string & {
                  __brand: "ProductID"
                });
                variants: (((Readonly<{
                  users: ReadonlyArray<{
                    readonly id: string;
                    permissions: readonly [
                      string,
                      ...(({
                        a: never /** maxDepth exceeded */
                      } | {
                        b: never /** maxDepth exceeded */
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
              }>)[number])[K /** unresolved */]) }
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
        }>)[number])["parameters"]];
        range: (Readonly<[
          number,
          number,
          (number)?
        ][]>)[number]
      }[];
      observations: ((Array<{
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
                      ...(never /** maxDepth exceeded */)[]
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
      }>)[number])["magnitudes"]
    }>)[number])["controls"])[number])["range"]
  }
}>;

// Inspired by blockchain transaction graphs
type ComplexObjectArraysCase24Flat = Array<{
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
          }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
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
          }>)[number])[K /** unresolved */]) }
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
    constant: (((Array<{
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
    }>)[number])["_version"] extends number ? boolean : never)
  }>)[number])["constant"][]
}>;

// Pattern from quantum cryptography
type ComplexObjectArraysCase25Flat = Array<{
  protocol: ("BB84" | "E91");
  participants: {
    publicKey: ((((Array<{
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
                      ...(never /** maxDepth exceeded */)[]
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
              }>)[number]]?: (K /** unresolved */ extends "id" ? never : ((Array<{
                id: (string & {
                  __brand: "ProductID"
                });
                variants: (((Readonly<{
                  users: ReadonlyArray<{
                    readonly id: string;
                    permissions: readonly [
                      string,
                      ...never /** maxDepth exceeded */
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
              }>)[number])[K /** unresolved */]) }
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
        constant: (((Array<{
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
        }>)[number])["_version"] extends number ? boolean : never)
      }>)[number])["constant"][]
    }>)[number])["transactions"])[number])["from"];
    basis: (((((ReadonlyArray<Readonly<{
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
    }>>)[number])["orbitals"])[number])["shape"])[number]
  }[];
  exchange: ((((ReadonlyArray<Readonly<{
    qubits: ReadonlyArray<Readonly<{
      state: ("|0>" | "|1>" | "+" | "-");
      probability: (number & {
        __range: [
          0,
          1
        ]
      })
    }>>
  }>>)[number])["qubits"])[number])["state"][]
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
