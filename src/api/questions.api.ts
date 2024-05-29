import base from "./base";
import { QuestionsQuery } from "../types/questions";

export const getQuestions = async (): Promise<QuestionsQuery> => {
  const { data } = await base.get("/", {
    params: {
      amount: 10,
      difficulty: "any",
    },
  });

  return data;
};
