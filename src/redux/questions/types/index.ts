import { Question } from "../../../types/questions";

export interface InitialState {
  currentQuestion: Question | null;
  currentQuestionSequenceNumber: number;
  questions: Question[];
  answers: Answer[];
  isLoading: boolean;
  score: Score;
}

export interface Answer {
  question: number;
  answer: string;
  correct_answer: string;
  isCorrect: boolean;
}

export interface Score extends ScoreResult {
  byDificulty: DifficultyCategories;
}

export interface ScoreResult {
  totalAmount: number;
  correct: number;
}

export interface DifficultyCategories {
  easy: ScoreResult;
  medium: ScoreResult;
  hard: ScoreResult;
}
