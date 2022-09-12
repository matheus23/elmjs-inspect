import { ElmJsDefinition } from "../contracts/ElmJsDefinition";
import { Summary } from "../contracts/Summary";
import { keyForSummaryType } from "./keyForSummaryType";
import { rangeSize } from "./rangeSize";

export function summaryGenerator(
  definitions: ElmJsDefinition[],
  summaryType: Summary
) {
  return definitions.reduce(
    (accumulator: Map<string, number>, { name, range }) => {
      const key = keyForSummaryType(name, summaryType);

      return accumulator.set(
        key,
        (accumulator.get(key) ?? 0) + rangeSize(range)
      );
    },
    new Map<string, number>()
  );
}
