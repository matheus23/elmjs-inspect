import * as Esprima from "esprima";

export function* elmJsStatements(script: Esprima.Program) {
  for (const e of script.body) {
    if (
      e.type === "ExpressionStatement" &&
      e.expression.type === "CallExpression" &&
      e.expression.callee.type === "FunctionExpression"
    ) {
      yield* e.expression.callee.body.body;
    }
  }
}
