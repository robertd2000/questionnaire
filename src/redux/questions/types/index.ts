import { Question } from "../../../types/questions";

export interface InitialState {
  currentQuestion: Question | null;
  currentQuestionSequenceNumber: number;
  questions: Question[];
  answers: Answer[];
  isLoading: boolean;
}

export interface Answer {
  question: number;
  answer: string;
  correct_answer: string;
  isCorrect: boolean;
}