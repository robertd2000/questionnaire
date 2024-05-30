import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "./api/asyncActions";
import { checkIsCorrect } from "../../utils/check";
import { initialState } from "./constants";
import { ERROR_MESSAGE } from "../../constants";
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
      if (payload.response_code === 0) {
        state.questions = payload.results;
        state.currentQuestion = payload.results?.[0];
        state.score.totalAmount = state.questions.length;
        state.error = null;
      } else {
        state.error = {
          message: ERROR_MESSAGE,
        };
      }

      state.isLoading = false;
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      if (!state.questions.length)
        state.error = {
          message: ERROR_MESSAGE,
        };
      state.isLoading = false;
    });
  },
});

export const { moveToNextQuestion, setAnswer, resetState } =
  questionsSlice.actions;
export default questionsSlice.reducer;
