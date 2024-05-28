import { Question } from "../../../types/questions";

export interface InitialState {
  currentQuestion: Question;
  questions: Question[];
  answers: Answer[];
}

export interface Answer {
  question: number;
  answer: string;
  correct_answer: string;
  isCorrect: boolean;
}
