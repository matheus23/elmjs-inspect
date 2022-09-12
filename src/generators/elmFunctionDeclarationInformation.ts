import * as ESTree from "estree";

export function* elmFunctionDeclarationInformation(
  statement: ESTree.Statement
) {
  if (statement.type === "FunctionDeclaration") {
    yield {
      name: statement.id?.name ?? "anonymous",
      range: statement.range,
    };
  }
}
