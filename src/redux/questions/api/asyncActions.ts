import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestions } from "../../../api/questions.api";

export const fetchQuestions = createAsyncThunk(
  "userAccount/logIn",
  async () => {
    try {
      const data = await getQuestions();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
