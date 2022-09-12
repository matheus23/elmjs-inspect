export function moduleNameParser(name: string) {
  const packageName = name.split("$").slice(1, 3).join("/");
  const moduleName = name.split("$").slice(3).join(".");
  const prettifiedName = `${packageName}: ${moduleName}`;

  return !name.startsWith("$")
    ? "Kernel Code"
    : prettifiedName.slice(0, prettifiedName.lastIndexOf("."));
}
