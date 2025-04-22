import { resolve } from "node:path";

import { describe, it } from "vitest";
import { Project } from "ts-morph";

import flattener from "../src";

const project = new Project({
  tsConfigFilePath: resolve(import.meta.dirname, "tsconfig.json"),
  skipAddingFilesFromTsConfig: true,
})

describe("tuples-001", () => {
  it("api-handling", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/api-handling.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/api-handling.ts");
  })

  it("data-transformation", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/data-transformation.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/data-transformation.ts");
  })

  it("optional-elements", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/optional-elements.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/optional-elements.ts");
  })

  it("state-management", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/state-management.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/state-management.ts");
  })

  it("type-system-torture", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/type-system-torture.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/type-system-torture.ts");
  })

  it("types", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/types.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/types.ts");
  })

  it("utility-patterns", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/tuples-001/utility-patterns.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/tuples-001/utility-patterns.ts");
  })

});

describe("type-literals-001", () => {
  it("api-responses", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/type-literals-001/api-responses.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/type-literals-001/api-responses.ts");
  })

  it("configuration", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/type-literals-001/configuration.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/type-literals-001/configuration.ts");
  })

  it("data-modeling", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/type-literals-001/data-modeling.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/type-literals-001/data-modeling.ts");
  })

  it("object-types", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/type-literals-001/object-types.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/type-literals-001/object-types.ts");
  })

  it("ui-components", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/type-literals-001/ui-components.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/type-literals-001/ui-components.ts");
  })

  it("validation-schemas", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/type-literals-001/validation-schemas.ts");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/type-literals-001/validation-schemas.ts");
  })

});

