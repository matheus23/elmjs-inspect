import * as ESTree from "estree";

export function* elmVariableDeclarationInformation(
  statement: ESTree.Statement
) {
  if (statement.type === "VariableDeclaration") {
    for (const declaration of statement.declarations) {
      if (declaration.id.type === "Identifier") {
        yield {
          name: declaration.id.name,
          range: declaration.range,
        };
      }
    }
  }
}
