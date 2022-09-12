export function percent(x: number, y: number) {
  return `${Number((x / y) * 100).toFixed(3)}%`;
}
