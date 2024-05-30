import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestions } from "../../../api/questions.api";

export const fetchQuestions = createAsyncThunk("questions/get", async () => {
  try {
    const data = await getQuestions();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});
