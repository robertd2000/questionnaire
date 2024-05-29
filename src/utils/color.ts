import { Colors } from "../constants";
import { DifficultyType } from "../types/questions";

export const getColor = (difficulty: DifficultyType) => {
  if (difficulty === "easy") return Colors.green;
  else if (difficulty === "medium") return Colors.orange;
  else if (difficulty === "hard") return Colors.red;
  return Colors.darkGray;
};
