import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestions } from "../../../api/questions.api";

export const fetchQuestions = createAsyncThunk(
  "userAccount/logIn",
  async ({ redirectCallback }: { redirectCallback: () => void }) => {
    try {
      const data = await getQuestions();
      redirectCallback();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
