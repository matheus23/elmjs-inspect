export function localNameParser(name: string) {
  return !name.startsWith("$author")
    ? "Dependencies"
    : name.slice(16, name.lastIndexOf("$")).replaceAll("$", ".");
}
