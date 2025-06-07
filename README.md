# 🧬 ts-fusion

_"Understand your types. Flatten the complexity."_

> Flatten any TypeScript type — no matter how deep, generic, or entangled — into a clean, inspectable, text-based structure.

## 💡 What is it?

`ts-fusion` is a **TypeScript type flattener** that flattens exported types
into readable, structured definitions — designed with runtime validation in mind.

Instead of maintaining parallel schemas (like Zod, TypeBox, or JSON Schema),
`ts-fusion` lets you use your existing TypeScript types as the source of truth,
both during development and in production.

It's especially helpful when you're building tools, validators, or runtime contracts and want to speak one language — TypeScript — everywhere.

## 💡 What it is not!

`ts-fusion` is NOT a replacement for schema libraries like Zod, TypeBox, or JSON Schema generators.

Instead, it acts as a **bridge layer**: it transforms complex TypeScript types into plain,
fully-resolved structures, making them easier to **feed into existing schema generation tools** like
[@sinclair/typemap](https://github.com/sinclairzx81/typemap) or
[ts-to-zod](https://github.com/fabien0102/ts-to-zod).

Most TS-to-schema tools only handle simple, shallow types — and often choke on generics, intersections, aliases, or deep references.
That's where `ts-fusion` comes in: it **flattens your types first**, so those tools can operate on clean, unfolded definitions.

## 🎯 Working Schema

> 🧠 Write your TypeScript types once —
> 🛠 Let `ts-fusion` prepare them —
> 📦 Generate Zod/TypeBox/JSON schemas with confidence.


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
  tags: Array<{ id: string; name: string }>;
  stats?: { views: number; likes: number };
};

export type UserResponse = ApiResponse<User>;
export type PostResponse = ApiResponse<Post>;
```

Read the `api-response.ts` file and pass its contents to ts-fusion.<br>
It will return an array of `FlatDefinition`s, like below.<br>
Next you can pass these definitions to `@sinclair/typemap` or `ts-to-zod`.

```ts
type UserResponseFlat = {
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

type PostResponseFlat = {
  data: {
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
npm i ts-fusion
# same for pnpm / yarn
```

> **Note:** `ts-fusion` is an ESM-only package and requires **Node.js 22** or higher.

## 🚀 Usage

### Basic usage

```ts
import flattener from "ts-fusion";

const flatDefs = flattener("./path/to/file.ts");
```

This returns an array of `FlatDefinition` objects representing all exported types in the file.

```ts
export type FlatDefinition = {
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
  parameters: Array<{ name: string; text: string }>;

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
}
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
   * default: 16
   * */
  maxDepth?: number;

  /**
   * By default, backticks are not escaped, assuming the result will be written
   * to a file as a standalone type definition.
   *
   * However, if the resulting text is intended to be used within a string,
   * especially one wrapped in backticks, it's safer to escape internal backticks
   * to avoid syntax issues.
   * */
  escapeBackticks?: boolean;
};
```

### Advanced: working with ts-morph directly

If you already have a `ts-morph` `Project` and want to reuse it across files:

```ts
import { flattener } from "ts-fusion";

const flatDefs = flattener(existingProject, "./types/user.ts", options);
```

```ts
// Signature:
(project: Project, file: string | SourceFile, opts?: UserOptions) => FlatDefinition[];
```

This is ideal when you're flattening multiple files in one session and want to avoid recreating the project each time.

## 🔍 Notes

- **Performance:** This tool prioritizes type correctness over raw speed.
It relies on the TypeScript compiler, which seems inherently slow for deep analysis.

- **Reliability:** `ts-fusion` is thoroughly tested, with over **40 test suites** and **1000+ individual tests**,
covering most use-cases (but not all; some edge cases are printed as is).

- **Disclaimer:** TypeScript is complex. Edge cases happen. Contributions and bug reports are welcome.

## 🧪 Coming Soon

No CLI yet — but one is planned if there's enough interest. Open an issue if that's something you'd use.

## 🛠 Related

- [`ts-morph`](https://github.com/dsherret/ts-morph) – core engine for AST inspection
- [`typescript`](https://github.com/microsoft/TypeScript) – we talk to the beast directly

