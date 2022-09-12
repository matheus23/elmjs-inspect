import * as Esprima from "esprima";
import { ElmJsDefinition } from "../contracts/ElmJsDefinition";
import { elmJsStatements } from "./elmJsStatements";
import { elmFunctionDeclarationInformation } from "./elmFunctionDeclarationInformation";
import { elmVariableDeclarationInformation } from "./elmVariableDeclarationInformation";

export function* elmJsDefinitions(
  script: Esprima.Program
): Generator<ElmJsDefinition> {
  for (const statement of elmJsStatements(script)) {
    yield* elmFunctionDeclarationInformation(statement);
    yield* elmVariableDeclarationInformation(statement);
  }
}
