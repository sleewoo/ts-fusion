import { resolve } from "node:path";

import { describe, it } from "vitest";
import { Project } from "ts-morph";

import flattener from "../src";

const project = new Project({
  tsConfigFilePath: resolve(import.meta.dirname, "tsconfig.json"),
  skipAddingFilesFromTsConfig: true,
})

{{#each folders}}
describe("{{folder}}", () => {
  {{#each files}}
  it("{{basename}}", async ({ expect }) => {
    const file = resolve(import.meta.dirname, "fixtures/{{relativePath}}");
    await expect(
      flattener(project, file)
    ).toMatchFileSnapshot("./snapshots/{{relativePath}}");
  })

  {{/each}}
});

{{/each}}
