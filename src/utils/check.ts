import { compaireArrays } from "./array";

export const checkIsCorrect = (
  a: string | string[],
  b: string | string[]
): boolean => {
  if (Array.isArray(a) && typeof b == "string") {
    return a.includes(b);
  }
  if (Array.isArray(b) && typeof a == "string") {
    return b.includes(a);
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return compaireArrays(a, b);
  }
  return a == b;
};
