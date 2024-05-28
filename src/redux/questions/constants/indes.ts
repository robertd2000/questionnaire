import { InitialState } from "../types";

export const initialState: InitialState = {
  isLoading: false,
  currentQuestion: null,
  currentQuestionSequenceNumber: 0,
  questions: [],
  answers: [],
};
