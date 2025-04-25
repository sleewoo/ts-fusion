import type { Type, TypeNode } from "ts-morph";

export type TraverseDataParameters = Record<string, string | undefined>;

export type TraverseData = {
  typeNode: TypeNode;
  type: Type;
  typeParameters?: TraverseDataParameters | undefined;
};

export type TraverseOptions = { overrides: Record<string, string> };

export type Traverse = (
  data: TraverseData,
  opts: TraverseOptions,
  depthLevel?: number,
) => string;

export type Next = (data: TraverseData) => string;

export type Handler = (
  data: TraverseData,
) => ((next: Next, opts: TraverseOptions) => string) | undefined;

type HandlerName =
  | "symbol"
  | "void"
  | "object"
  | "constructorType"
  | "conditionalType"
  | "optionalType"
  | "parenthesizedType"
  | "indexedAccessType"
  | "templateLiteralType"
  | "mappedType"
  | "inferType"
  | "typeOperator"
  | "typeReference"
  | "typeLiteral"
  | "typeQuery"
  | "union"
  | "intersection"
  | "tuple"
  | "array"
  | "callSignature";

export type HandlerStack = Record<`${HandlerName}Handler`, Handler>;

export type UserOptions = {
  /**
   * by default all exported types will be processed.
   * use this filter to only process specific types.
   */
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
   * default: 16 */
  maxDepth?: number;
};

export type FlatDefinition = {
  /** type name, same as exported alias in original file */
  name: string;
  /** type parameters, if any, eg:
   * export type Entry<T, R = string> = { ... }
   * will have following parameters:
   * [ { name: "T", text: "T" }, { name: "R", text: "R = string" } ]
   * */
  parameters: Array<{ name: string; text: string }>;
  /** type structure after flattening */
  text: string;
  /** any comments, multi/single line,
   * that preceeds type declaration in original file */
  comments: Array<string>;
};
