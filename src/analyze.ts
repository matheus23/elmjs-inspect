import * as FS from "fs";
import * as Console from "console";
import { promisify } from "util";
import * as Esprima from "esprima";
import * as ESTree from "estree";

function* yieldElmJsDefinitionInfos(script: Esprima.Program) {
    for (const statement of yieldElmJsStatements(script)) {
        yield* yieldFunctionDeclarationInfo(statement);
        yield* yieldVariableDeclarationInfos(statement);
    }
}

function* yieldElmJsStatements(script: Esprima.Program) {
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

function* yieldFunctionDeclarationInfo(statement: ESTree.Statement) {
    if (statement.type === "FunctionDeclaration") {
        yield {
            name: statement.id.name,
            range: statement.range,
        };
    }
}

function* yieldVariableDeclarationInfos(statement: ESTree.Statement) {
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

function rangeSize([start, end]) {
    return end - start;
}

function pct(value: number, of: number) {
    return `${Number((value / of) * 100).toFixed(3)}%`;
}

function moduleName(name: string) {
    return !name.startsWith("$")
        ? "Kernel Code"
        : name.slice(0, name.lastIndexOf("$"));
}

function packageName(name: string) {
    return !name.startsWith("$")
        ? "Kernel Code"
        : name.split("$").slice(1, 3).join("/");
}
function localName(name: string) {
    return !name.startsWith("$author")
        ? "Dependencies"
        : name.slice(16, name.lastIndexOf("$")).replaceAll("$", ".");
}

export async function analyze(elmOutputJsFilePath: string, opts: any) {
    const file = await promisify(FS.readFile)(elmOutputJsFilePath);
    const parsed = Esprima.parseScript(file.toString(), { range: true });
    const size = parsed.range;
    const infos = Array.from(yieldElmJsDefinitionInfos(parsed));

    if (opts.summary != undefined) {
        const summary = infos.reduce((prev, { name, range }) => {
            let key;

            switch (opts.summary) {
                case "package": {
                    key = packageName(name);
                    break;
                }
                case "project": {
                    key = localName(name);
                    break;
                }
                default: {
                    key = moduleName(name);
                    break;
                }
            }

            prev.set(key, (prev.get(key) ?? 0) + rangeSize(range));

            return prev;
        }, new Map<string, number>());
        const entries = [...summary.entries()];
        entries.sort((a, b) => b[1] - a[1]);
        entries.forEach(([name, range]) => {
            Console.log(`${pct(range, rangeSize(size))}: ${name}`);
        });
    } else {
        infos.sort((a, b) => rangeSize(b.range) - rangeSize(a.range));
        infos.forEach(({ name, range }) => {
            Console.log(`${pct(rangeSize(range), rangeSize(size))}: ${name}`);
        });
    }
    const rangeSum = infos
        .map(({ range }) => rangeSize(range))
        .reduce((a, b) => a + b, 0);
    Console.log(
        `Range sum: ${rangeSum} total: ${rangeSize(size)}, analyzed ${pct(
            rangeSum,
            rangeSize(size)
        )}`
    );
}
