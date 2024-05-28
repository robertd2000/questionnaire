import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { QuestionsQuery } from "../../../types/questions";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsQuery, string>({
      query: () => ``,
    }),
  }),
});

export const { getQuestions } = questionsApi.endpoints;
