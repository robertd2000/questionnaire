import { Colors } from "../../../../constants";
import { DifficultyType } from "../../../../types/questions";

const getDifficultyColumnColor = (
  difficulty: DifficultyType,
  columns: number
) => {
  if (difficulty === "easy" && columns === 1) return Colors.green;
  else if (difficulty === "medium" && columns <= 2) return Colors.orange;
  else if (difficulty === "hard" && columns <= 3) return Colors.red;
  return Colors.darkGray;
};

export const getDifficultyColumnColors = (difficulty: DifficultyType) => {
  const colors = {
    first: getDifficultyColumnColor(difficulty, 1),
    second: getDifficultyColumnColor(difficulty, 2),
    third: getDifficultyColumnColor(difficulty, 3),
  };

  return colors;
};

export const capitalizeString = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};
