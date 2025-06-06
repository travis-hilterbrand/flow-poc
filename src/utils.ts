export function isValidString(s: any): boolean {
  return typeof s === "string" && s.trim().length > 0;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
