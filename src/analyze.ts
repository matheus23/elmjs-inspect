import { promises as FSPromises } from "fs";
import { log } from "console";
import { parseScript } from "esprima";
import { Options } from "./contracts/Options";
import { rangeSize } from "./utils/rangeSize";
import { percent } from "./utils/percent";
import { formatterForFormat } from "./utils/formatterForFormat";
import { elmJsDefinitions } from "./generators/elmJsDefinitions";

export async function analyze(elmOutputJsFilePath: string, options: Options) {
  const file = await FSPromises.readFile(elmOutputJsFilePath);
  const parsed = parseScript(file.toString(), { range: true });
  const definitions = Array.from(elmJsDefinitions(parsed));
  const parsedRange = parsed.range;
  const formatter = formatterForFormat(options.format);
  const summary = formatter(definitions, options.summary, parsedRange);
  const rangeSum = definitions
    .map(({ range }) => rangeSize(range))
    .reduce((a, b) => a + b, 0);

  log(summary);
  log(
    `Range sum: ${rangeSum} total: ${rangeSize(
      parsedRange
    )}, analyzed ${percent(rangeSum, rangeSize(parsedRange))}`
  );
}
