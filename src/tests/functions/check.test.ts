import { test, expect } from "vitest";
import { checkIsCorrect } from "../../utils/check";

test("Test check util (2 string parameters)", () => {
  expect(checkIsCorrect("True", "True")).toBe(true);
  expect(checkIsCorrect("True", "false")).toBe(false);
});

test("Test check util (string parameter and array parameter)", () => {
  expect(checkIsCorrect(["True"], "True")).toBe(true);
  expect(checkIsCorrect(["True"], "false")).toBe(false);
});

test("Test check util (string parameter and array parameter)", () => {
  expect(checkIsCorrect("True", ["True"])).toBe(true);
  expect(checkIsCorrect("True", ["False"])).toBe(false);
});
