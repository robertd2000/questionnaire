import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants/indes";
import { fetchQuestions } from "./api/asyncActions";
import { checkIsCorrect } from "../../utils/check";

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
      const answer = {
        question: state.currentQuestionSequenceNumber,
        answer: payload,
        correct_answer: state.currentQuestion?.correct_answer as string,
        isCorrect: checkIsCorrect(
          state.currentQuestion?.correct_answer as string,
          payload
        ),
      };
      state.answers.push(answer);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, { payload }) => {
      state.questions = payload.results;
      state.currentQuestion = payload.results?.[0];
      state.isLoading = false;
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { moveToNextQuestion, setAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;
