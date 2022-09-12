import { Summary } from "../contracts/Summary";
import { localNameParser } from "../parsers/localNameParser";
import { moduleNameParser } from "../parsers/moduleNameParser";
import { packageNameParser } from "../parsers/packageNameParser";

export function keyForSummaryType(name: string, summaryType: Summary) {
  if (summaryType === "package") {
    return packageNameParser(name);
  }

  if (summaryType === "project") {
    return localNameParser(name);
  }

  return moduleNameParser(name);
}
