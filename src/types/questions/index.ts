export interface QuestionsQuery {
  response_code: number;
  results: Question[];
}

export type DifficultyType = "easy" | "medium" | "hard";

export interface Question {
  type: string;
  difficulty: DifficultyType;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
