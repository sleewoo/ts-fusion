export type ValidationSchemaTest1<T> = {
  _type: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => T);
  refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
};

export type ValidationSchemaTest2<T> = {
  cast: ((value: unknown) => T);
  validateSync: ((value: unknown) => T);
  describe: (() => {
    type: string;
    fields: { [K in keyof T]?: {
      type: string;
      required: boolean;
      tests: string[]
    } }
  })
};

export type ValidationSchemaTest3 = {
  "$schema": string;
  "$defs": Record<string, {
    [k: string]: unknown;
    "$id"?: string;
    "$schema"?: string
  }>;
  type: "string" | "number" | "boolean" | "object" | "array" | "null" | "string" | "number" | "boolean" | "object" | "array" | "null"[];
  properties?: Record<string, {
    [k: string]: unknown;
    "$id"?: string;
    "$schema"?: string
  }>;
  required?: string[];
  additionalProperties: boolean
};

export type ValidationSchemaTest4<T> = {
  target: {
    new: ((...args: unknown[]) => T)
  };
  constraints: {
    type: "min" | "max" | "matches";
    value: number | string | RegExp;
    message?: string
  }[];
  errorMessage?: string | ((validationContext: {
    path: (string | number)[];
    parent: unknown;
    schema: unknown
  }) => string)
};

export type ValidationSchemaTest5<T> = {
  validateAsync: ((value: unknown) => Promise<T>);
  options: {
    abortEarly: boolean;
    stripUnknown: boolean;
    presence: "required" | "optional"
  }
};

export type ValidationSchemaTest6<T, U> = {
  decode: ((input: U) => {
    left: {
      [k: string]: unknown;
      path: (string | number)[];
      message: string;
      code: "invalid_type" | "missing_value" | "custom" | "too_small" | "too_big";
      expected?: string;
      received?: string;
      fatal?: boolean
    }[]
  } | {
    right: T
  });
  encode: ((value: T) => U);
  name: string;
  is: ((u: unknown) => boolean)
};

export type ValidationSchemaTest7<T> = {
  coerce: ((value: unknown, context: {
    path: (string | number)[];
    parent: unknown;
    schema: unknown
  }) => T);
  validate: ((value: T, context: {
    path: (string | number)[];
    parent: unknown;
    schema: unknown
  }) => {
    [k: string]: unknown;
    path: (string | number)[];
    message: string;
    code: "invalid_type" | "missing_value" | "custom" | "too_small" | "too_big";
    expected?: string;
    received?: string;
    fatal?: boolean
  }[])
};

export type ValidationSchemaTest8<T> = {
  pipe: Array<{
    type: "transform" | "check";
    fn: ((value: T) => unknown)
  }>;
  transform: ((value: T) => unknown);
  fallback: (() => T)
};

export type ValidationSchemaTest9<T> = {
  test: ((fieldName: keyof T, assertions: (() => void)) => void);
  enforce: ((values: Partial<T>) => {
    valid: boolean;
    errors: { [K in keyof T]?: {
      [k: string]: unknown;
      path: (string | number)[];
      message: string;
      code: "invalid_type" | "missing_value" | "custom" | "too_small" | "too_big";
      expected?: string;
      received?: string;
      fatal?: boolean
    }[] }
  })
};

export type ValidationSchemaTest10 = {
  "$schema": string;
  "$defs": Record<string, {
    [k: string]: unknown;
    "$id"?: string;
    "$schema"?: string
  }>;
  type: "string" | "number" | "boolean" | "object" | "array" | "null" | "string" | "number" | "boolean" | "object" | "array" | "null"[];
  properties?: Record<string, {
    [k: string]: unknown;
    "$id"?: string;
    "$schema"?: string
  }>;
  required?: string[];
  additionalProperties: boolean
} & {
  "$ref": string;
  "$dynamicRef"?: string;
  "$recursiveAnchor"?: boolean
};

export type ValidationSchemaTest11<T> = {
  if: ((value: Partial<T>, context: {
    path: (string | number)[];
    parent: unknown;
    schema: unknown
  }) => boolean);
  then: {
    _type: never;
    parse: ((input: unknown) => never);
    safeParse: ((input: unknown) => never);
    refine: (<U extends never>(fn: ((val: never) => U /** unresolved */)) => U /** unresolved */)
  };
  otherwise?: {
    _type: never;
    parse: ((input: unknown) => never);
    safeParse: ((input: unknown) => never);
    refine: (<U extends never>(fn: ((val: never) => U /** unresolved */)) => U /** unresolved */)
  }
};

export type ValidationSchemaTest12<T extends string> = {
  discriminator: T;
  mapping: Record<string, {
    _type: never;
    parse: ((input: unknown) => never);
    safeParse: ((input: unknown) => never);
    refine: (<U extends never>(fn: ((val: never) => U /** unresolved */)) => U /** unresolved */)
  }>;
  options: string[]
};

export type ValidationSchemaTest13<T> = {
  definition: T;
  unwrap: (() => T)
};

export type ValidationSchemaTest14<T, B extends string> = T & {
  __brand: B;
  __validator: {
    _type: T;
    parse: ((input: unknown) => T);
    safeParse: ((input: unknown) => T);
    refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
  }
};

export type ValidationSchemaTest15<T> = {
  _type: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => T);
  refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
} & {
  default: T | (() => T);
  optional: (() => T | undefined)
};

export type ValidationSchemaTest16<T> = {
  _type: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => T);
  refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
} & {
  message: string | ((ctx: {
    path: (string | number)[];
    parent: unknown;
    schema: unknown
  }) => string);
  path: (string | number)[];
  params?: Record<string, unknown>
};

export type ValidationSchemaTest17<T> = {
  _type: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => T);
  refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
} & {
  meta: {
    [k: string]: unknown;
    description?: string;
    examples?: T[];
    deprecated?: boolean
  }
};

export type ValidationSchemaTest18<T> = {
  partial: (() => Partial<T>);
  required: (() => Required<T>)
};

export type ValidationSchemaTest19<T, U> = {
  merge: ((schema: {
    _type: T;
    parse: ((input: unknown) => T);
    safeParse: ((input: unknown) => T);
    refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
  }) => U);
  omit: (<K extends keyof T & U>(keys: K /** unresolved */[]) => Omit<U, K /** unresolved */>)
};

export type ValidationSchemaTest20<T> = {
  _type: T[];
  parse: ((input: unknown) => T[]);
  safeParse: ((input: unknown) => T[]);
  refine: (<U extends T[]>(fn: ((val: T[]) => U /** unresolved */)) => U /** unresolved */)
} & {
  min: ((length: number) => T);
  max: ((length: number) => T);
  length: ((length: number) => T)
};

export type ValidationSchemaTest21<K extends string | number | symbol, V> = {
  keySchema: {
    _type: K;
    parse: ((input: unknown) => K);
    safeParse: ((input: unknown) => K);
    refine: (<U extends K>(fn: ((val: K) => U /** unresolved */)) => U /** unresolved */)
  };
  valueSchema: {
    _type: V;
    parse: ((input: unknown) => V);
    safeParse: ((input: unknown) => V);
    refine: (<U extends V>(fn: ((val: V) => U /** unresolved */)) => U /** unresolved */)
  };
  catchall: {
    _type: never;
    parse: ((input: unknown) => never);
    safeParse: ((input: unknown) => never);
    refine: (<U extends never>(fn: ((val: never) => U /** unresolved */)) => U /** unresolved */)
  }
};

export type ValidationSchemaTest22<T> = {
  lazy: ((fn: (() => {
    _type: T;
    parse: ((input: unknown) => T);
    safeParse: ((input: unknown) => T);
    refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
  })) => {
    _type: T;
    parse: ((input: unknown) => T);
    safeParse: ((input: unknown) => T);
    refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
  })
};

export type ValidationSchemaTest23<T> = {
  _type: T;
  parse: ((input: unknown) => T);
  safeParse: ((input: unknown) => T);
  refine: (<U extends T>(fn: ((val: T) => U /** unresolved */)) => U /** unresolved */)
} & {
  checkAsync: ((value: T) => Promise<boolean>);
  transformAsync: ((value: T) => Promise<T>)
};

export type ValidationSchemaTest24 = {
  type: "file";
  validate: ((file: {
    name: string;
    size: number;
    type: string;
    content: ArrayBuffer
  }) => {
    [k: string]: unknown;
    path: (string | number)[];
    message: string;
    code: "invalid_type" | "missing_value" | "custom" | "too_small" | "too_big";
    expected?: string;
    received?: string;
    fatal?: boolean
  }[])
};

export type ValidationSchemaTest25<T> = {
  dependencies: (keyof T)[];
  validate: ((value: T, context: {
    path: (string | number)[];
    parent: unknown;
    schema: unknown
  }) => {
    [k: string]: unknown;
    path: (string | number)[];
    message: string;
    code: "invalid_type" | "missing_value" | "custom" | "too_small" | "too_big";
    expected?: string;
    received?: string;
    fatal?: boolean
  }[])
};
