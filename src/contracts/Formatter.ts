import { ElmJsDefinition } from "./ElmJsDefinition";
import { Summary } from "./Summary";
import { Range } from "./Range";

export type Formatter = (
  definitions: ElmJsDefinition[],
  summaryType: Summary,
  parsedRange: Range
) => string;
