import { DifficultyType } from "../../../types/questions";

export const getColor = (difficulty: DifficultyType, columns: number) => {
  if (difficulty === "easy" && columns === 1) return "green";
  else if (difficulty === "medium" && columns <= 2) return "orange";
  else if (difficulty === "hard" && columns <= 3) return "red";
  return "rgb(220, 220, 220)";
};
export const getColors = (difficulty: DifficultyType) => {
  const colors = {
    first: getColor(difficulty, 1),
    second: getColor(difficulty, 2),
    third: getColor(difficulty, 3),
  };

  return colors;
};

export const capitalizeString = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};
