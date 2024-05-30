import { test, expect } from "vitest";
import { getColor, getScoreColor } from "../../utils/color";
import { Colors } from "../../constants";

test("Check color util getColor function - easy", () => {
  const color = getColor("easy");

  expect(color).toBe(Colors.green);
});

test("Check color util getColor function - medium", () => {
  const color = getColor("medium");

  expect(color).toBe(Colors.orange);
});

test("Check color util getColor function - hard", () => {
  const color = getColor("hard");

  expect(color).toBe(Colors.red);
});

test("Check color util getScoreColor function - 70%", () => {
  const color = getScoreColor(80);

  expect(color).toBe(Colors.green);
});

test("Check color util getScoreColor function - 40%", () => {
  const color = getScoreColor(50);

  expect(color).toBe(Colors.orange);
});

test("Check color util getScoreColor function - <= 40%", () => {
  const color = getScoreColor(30);

  expect(color).toBe(Colors.red);
});
