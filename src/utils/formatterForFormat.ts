import { Format } from "../contracts/Format";
import { Formatter } from "../contracts/Formatter";
import { textFormatter } from "../formatters/textFormatter";
import { jsonFormatter } from "../formatters/jsonFormatter";
import { Range } from "../contracts/Range";
import { Summary } from "../contracts/Summary";
import { ElmJsDefinition } from "../contracts/ElmJsDefinition";

export function formatterForFormat(format: Format): Formatter {
  const formatter: Formatter =
    format === "text" ? textFormatter : jsonFormatter;

  return (
    definitions: ElmJsDefinition[],
    summaryType: Summary,
    parsedRange: Range
  ) => {
    return formatter(definitions, summaryType, parsedRange);
  };
}
