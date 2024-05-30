import { test, expect } from "vitest";
import { checkIsCorrect } from "../../utils/check";

test("Test check util (2 string parameters)", () => {
  expect(checkIsCorrect("True", "True")).toBe(true);
});

test("Test check util (string parameter and array parameter)", () => {
  expect(checkIsCorrect(["True"], "True")).toBe(true);
});

test("Test check util (string parameter and array parameter)", () => {
  expect(checkIsCorrect("True", ["True"])).toBe(true);
});
