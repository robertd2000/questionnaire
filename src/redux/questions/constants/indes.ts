import { InitialState } from "../types";

export const initialState: InitialState = {
  isLoading: false,
  currentQuestion: null,
  currentQuestionSequenceNumber: 0,
  questions: [],
  answers: [],
  score: {
    totalAmount: 0,
    correct: 0,
    byDificulty: {
      easy: { totalAmount: 0, correct: 0 },
      medium: { totalAmount: 0, correct: 0 },
      hard: { totalAmount: 0, correct: 0 },
    },
  },
};
