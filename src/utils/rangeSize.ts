import { Range } from "../contracts/Range";

export function rangeSize([start, end]: Range) {
  return end - start;
}
