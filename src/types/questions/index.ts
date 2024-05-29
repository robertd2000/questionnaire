export interface QuestionsQuery {
  response_code: number;
  results: Question[];
}

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  type: string;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
