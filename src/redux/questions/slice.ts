import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { fetchQuestions } from "./api/asyncActions";
import { checkIsCorrect } from "../../utils/check";
import { DifficultyType } from "../../types/questions";

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    moveToNextQuestion(state) {
      state.currentQuestionSequenceNumber++;
      const currentQuestion =
        state.questions[state.currentQuestionSequenceNumber];
      state.currentQuestion = currentQuestion;
    },
    setAnswer(state, { payload }: { payload: string }) {
      const isCorrect = checkIsCorrect(
        state.currentQuestion?.correct_answer as string,
        payload
      );

      const answer = {
        question: state.currentQuestionSequenceNumber,
        answer: payload,
        correct_answer: state.currentQuestion?.correct_answer as string,
        isCorrect,
      };
      state.answers.push(answer);

      const difficulty = state.currentQuestion?.difficulty as DifficultyType;
      state.score.byDificulty[difficulty].totalAmount++;
      if (isCorrect) {
        state.score.correct++;
        state.score.byDificulty[difficulty].correct++;
      }
    },
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, { payload }) => {
      state.questions = payload.results;
      state.currentQuestion = payload.results?.[0];
      state.score.totalAmount = state.questions.length;
      state.isLoading = false;
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { moveToNextQuestion, setAnswer, resetState } =
  questionsSlice.actions;
export default questionsSlice.reducer;
