import { type SourceFile, Project, TypeFormatFlags } from "ts-morph";
import crc from "crc/crc32";
import handlebars from "handlebars";

import virtualSourceTpl from "./templates/virtual-source.hbs";

export default async (
  tsConfigFilePathOrProject: string | Project,
  file: string | SourceFile,
  opts?: {
    typesFilter?: (typeName: string) => boolean;
  },
): Promise<string> => {
  const project =
    typeof tsConfigFilePathOrProject === "string"
      ? new Project({
          tsConfigFilePath: tsConfigFilePathOrProject,
          skipAddingFilesFromTsConfig: true,
        })
      : tsConfigFilePathOrProject;

  const createVirtualSourceFile = async () => {
    const sourceFile =
      typeof file === "string"
        ? project.getSourceFile(file) || project.addSourceFileAtPath(file)
        : file;

    const sourceTypes = sourceFile.getTypeAliases().flatMap((e) => {
      if (!e.isExported()) {
        return [];
      }
      const name = e.getName();
      return !opts?.typesFilter || opts.typesFilter(name) //
        ? [{ name }]
        : [];
    });

    const virtualSourceCode = render<{
      sourceFile: string;
      discriminationKey: string;
      sourceTypes: Array<{ name: string }>;
    }>(virtualSourceTpl, {
      sourceFile: sourceFile.getFilePath().replace(/\.ts$/, ""),
      discriminationKey: `@[${crc(JSON.stringify(sourceTypes))}]`,
      sourceTypes,
    });

    const fileBase = [
      crc(sourceFile.getFilePath()),
      crc(JSON.stringify(sourceTypes)),
      new Date().getTime(),
    ].join("_");

    return project.createSourceFile(`./__${fileBase}.ts`, virtualSourceCode);
  };

  const sourceFile = await createVirtualSourceFile();

  const sourceTypes = sourceFile.getTypeAliases().filter((e) => e.isExported());

  const fileBase = [
    crc(sourceFile.getFilePath()),
    crc(JSON.stringify(sourceTypes.map((e) => e.getName()))),
    new Date().getTime(),
  ].join("_");

  const outFile = project.createSourceFile(`./__${fileBase}.ts`);

  for (const sourceType of sourceTypes) {
    const type = sourceType.getType().getText(
      undefined,
      TypeFormatFlags.NoTruncation |
        TypeFormatFlags.UseAliasDefinedOutsideCurrentScope |
        // needed to correctly handle unions
        TypeFormatFlags.NodeBuilderFlagsMask,
    );
    outFile.addTypeAlias({
      name: sourceType.getName(),
      isExported: sourceType.isExported(),
      isDefaultExport: sourceType.isDefaultExport(),
      hasDeclareKeyword: sourceType.hasDeclareKeyword(),
      type,
    });
  }

  const compiledTypes = outFile.getText();

  // cleanup
  for (const file of [sourceFile, outFile]) {
    project.removeSourceFile(file);
  }

  return compiledTypes;
};

const render = <Context = object>(
  template: string,
  context: Context,
  options?: { noEscape?: boolean },
): string => {
  const { noEscape = true } = { ...options };
  return handlebars.compile(template, { noEscape })(context);
};
