import { QuestionsQuery } from "../types/questions";
import base from "./base";

export const getQuestions = async (): Promise<QuestionsQuery> => {
  const { data } = await base.get("/");

  return data;
};
