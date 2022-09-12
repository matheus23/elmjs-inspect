import { Range } from "../contracts/Range";
import { Summary } from "../contracts/Summary";
import { summaryGenerator } from "../utils/generateSummary";
import { rangeSize } from "../utils/rangeSize";
import { ElmJsDefinition } from "../contracts/ElmJsDefinition";
import { percent } from "../utils/percent";

export function textFormatter(
  definitions: ElmJsDefinition[],
  summaryType: Summary,
  parsedRange: Range
) {
  const summary = summaryGenerator(definitions, summaryType);
  const entries = Array.from(summary.entries());
  entries.sort((a, b) => b[1] - a[1]);

  return entries
    .map(
      ([name, range]) => `${name}: ${percent(range, rangeSize(parsedRange))}`
    )
    .join("\n");
}
