import { Range } from "../contracts/Range";
import { Summary } from "../contracts/Summary";
import { summaryGenerator } from "../utils/generateSummary";
import { rangeSize } from "../utils/rangeSize";
import { ElmJsDefinition } from "../contracts/ElmJsDefinition";
import { percent } from "../utils/percent";

export function jsonFormatter(
  definitions: ElmJsDefinition[],
  summaryType: Summary,
  parsedRange: Range
) {
  const summary = summaryGenerator(definitions, summaryType);
  const entries = Array.from(summary.entries()).sort((a, b) => b[1] - a[1]);
  const formattedEntries = entries.map(([name, range]) => ({
    [name]: percent(range, rangeSize(parsedRange)),
  }));

  return JSON.stringify(formattedEntries);
}
