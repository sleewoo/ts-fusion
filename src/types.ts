import type { Type, TypeNode } from "ts-morph";

export type CycleParameters = Record<string, string | undefined>;

export type CycleData = {
  typeNode: TypeNode;
  type: Type;
  typeParameters?: CycleParameters | undefined;
};

export type CycleOptions = {
  overrides: Record<string, string>;
};

export type CycleSignature = (
  data: CycleData,
  opts: CycleOptions,
  depthLevel?: number,
) => string;

export type Next = (data: CycleData) => string;

export type Handler = (next: Next, opts: CycleOptions) => string;

export type HandlerQualifier = (data: CycleData) => Handler | undefined;

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

export type FlattenedLiteral = {
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
};
