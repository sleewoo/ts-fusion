# 🧬 ts-fusion

_"Understand your types. Flatten the complexity."_

> Flatten any TypeScript type — no matter how deep, generic or entangled — into a clean, inspectable, plain-text structure.

## ⚡ Example

Your regular types, split across multiple files:

`user.ts`:

```ts
export type UserProfile = {
  name: string;
  email: string;
};

export type UserPreferences = {
  theme: "light" | "dark";
  notifications: NotificationPreferences;
};

type NotificationPreferences = {
  enabled: boolean;
};
```

`api-response.ts`:

```ts
import type { UserPreferences, UserProfile } from "./user";

type ApiResponse<T> = {
  data: T;
  meta: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
    };
    cache: {
      ttl: number;
      revalidate: boolean;
    };
  };
};

type User = {
  id: number;
  profile: UserProfile;
  preferences: UserPreferences;
  posts: Post[];
};

type Post = {
  id: number;
  title: string;
  tags: { id: string; name: string }[];
  stats?: { views: number; likes: number };
};

export type UserResponse = ApiResponse<User>;
export type PostResponse = ApiResponse<Post>;
```

Just pass `api-response.ts` file to `ts-fusion`, it will return an array of `ResolvedType` objects:

```ts
type UserResponse = {
  data: {
    id: number;
    profile: {
      name: string;
      email: string
    };
    preferences: {
      theme: ("light" | "dark");
      notifications: {
        enabled: boolean
      }
    };
    posts: {
      id: number;
      title: string;
      tags: Array<{
        id: string;
        name: string
      }>;
      stats?: {
        views: number;
        likes: number
      }
    }[]
  };
  meta: {
    pagination?: {
      page: number;
      limit: number;
      total: number
    };
    cache: {
      ttl: number;
      revalidate: boolean
    }
  }
};

type PostResponse = {
  data: {
    id: number;
    title: string;
    tags: {
      id: string;
      name: string
    }[];
    stats?: {
      views: number;
      likes: number
    }
  };
  meta: {
    pagination?: {
      page: number;
      limit: number;
      total: number
    };
    cache: {
      ttl: number;
      revalidate: boolean
    }
  }
};
```

Check `tests` folder for more examples.

## 📦 Install

```bash
[p]npm i -D ts-fusion
# or
yarn add --dev ts-fusion
```

> **Note:** `ts-fusion` is an ESM-only package and requires **Node.js 22** or higher.

## 🚀 Usage

### Basic usage

```ts
import flattener from "ts-fusion";

const flatDefs = flattener("./path/to/file.ts");
```

This returns an array of `ResolvedType` objects representing all exported types in the file.
Each flattened literal represents an expanded, serializable version of a TypeScript type — including its parameters, structure, and comments.

```ts
export type ResolvedType = {
  kind: keyof typeof SyntaxKind;

  /**
   * The name of the type, identical to the exported alias in the original file.
   * */
  name: string;

  /**
   * Type parameters declared on the original type, if any.
   *
   * Example:
   *   export type Entry<T, R = string> = { ... }
   * Will produce:
   *   [
   *     { name: "T", text: "T" },
   *     { name: "R", text: "R = string" }
   *   ]
   * */
  parameters: Array<{ name: string; text: string; fullText: string }>;

  /**
   * The flattened type body (object literal only), without name or parameters.
   * */
  text: string;

  /**
   * The full flattened type declaration,
   * including name, type parameters, and leading comments.
   * */
  fullText: string;

  /**
   * Any single-line or multi-line comments
   * that immediately precede the original type declaration.
   * */
  comments: Array<string>;

  /**
   * Returns the list of direct property names defined in a type literal.
   * Does not recurse into nested types — only includes top-level properties.
   * */
  getPropertyNames: () => Array<string>;
};
```

> The output is plain text for now. If you want AST nodes, you can use `ts-morph` on the returned structure.

### With options

The flattener accepts an optional second argument for customization:

```ts
import flattener from "ts-fusion";

const flatDefs = flattener("./path/to/file.ts", {
  typesFilter: (name) => name.startsWith("API"),
  overrides: {
    CustomPromise: "Promise",
  },
  maxDepth: 10,
});
```

```ts
export type UserOptions = {
  /**
   * by default all exported types will be processed.
   * use this filter to only process specific types.
   * */
  typesFilter?: (typeName: string) => boolean;

  /**
   * a map of types to override default name for.
   *
   * eg. you have a CustomPromise type that should be rendered as native Promise:
   *    import { CustomPromise } from "@/lib";
   *    export type ResponseHandler = () => CustomPromise<...>
   *
   * then add CustomPromise to `overrides`:
   *    overrides: {
   *      CustomPromise: "Promise",
   *    }
   *
   * and the flattened result will be:
   *    export type ResponseHandler = () => Promise<...>
   * */
  overrides?: Record<string, string>;

  /**
   * limit recursion to this level depth.
   * @default: 16
   * */
  maxDepth?: number;

  /**
   * If enabled, removes all comments from the generated output.
   * Useful for producing clean, minimal artifacts.
   * @default false
   * */
  stripComments?: boolean;

  /**
   * By default, backticks and $ chars are not escaped, assuming the result will be written
   * to a file as a standalone type definition.
   *
   * However, if the resulting text is intended to be used within a string,
   * especially one wrapped in backticks, it's safer to escape these chars
   * to avoid syntax issues.
   * */
  escapeTemplateChars?: boolean;
};
```

### Advanced: working with `ts-morph` directly

If you already have a `ts-morph` `Project` and want to reuse it across files:

```ts
import { flattener } from "ts-fusion";

const flatDefs = flattener(existingProject, "./types/user.ts", options);
```

```ts
// Signature:
(project: Project, file: string | SourceFile, opts?: UserOptions) => ResolvedType[];
```

This is ideal when you're flattening multiple files in one session and want to avoid recreating the project each time.

## 🔍 Notes

- **Performance:** This tool prioritizes type correctness over raw speed.

- **Reliability:** `ts-fusion` is thoroughly tested, with over **40 test suites** and **1000+ individual tests**,
covering most use-cases (but not all; some edge cases are printed as is).

- **Disclaimer:** TypeScript is complex. Edge cases happen. Contributions and bug reports are welcome.

## 🧪 Coming Soon

No CLI yet — but one is planned if there's enough interest. Open an issue if that's something you'd use.

## 🛠 Related

- [`ts-morph`](https://github.com/dsherret/ts-morph) – core engine for AST inspection
- [`typescript`](https://github.com/microsoft/TypeScript) –  the official compiler powering all type resolution

