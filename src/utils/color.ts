import { Colors } from "../constants";
import { DifficultyType } from "../types/questions";

export const getColor = (difficulty: DifficultyType) => {
  if (difficulty === "easy") return Colors.green;
  else if (difficulty === "medium") return Colors.orange;
  else if (difficulty === "hard") return Colors.red;
  return Colors.darkGray;
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
