import { Colors } from "../constants";

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
  return a == b;
};

export const getScoreColor = (score: number) => {
  if (score > 70) {
    return Colors.green;
  } else if (score > 40) {
    return Colors.orange;
  } else if (score <= 40) {
    return Colors.red;
  }
};
