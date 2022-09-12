export function packageNameParser(name: string) {
  return !name.startsWith("$")
    ? "Kernel Code"
    : name.split("$").slice(1, 3).join("/");
}
