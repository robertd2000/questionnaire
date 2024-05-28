import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants/indes";

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const {} = questionsSlice.actions;
export default questionsSlice.reducer;
