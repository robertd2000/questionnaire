import { useEffect } from "react";
import { fetchQuestions } from "../../../redux/questions/api/asyncActions";
import { moveToNextQuestion } from "../../../redux/questions/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

export const useQuestions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const nextQuestion = () => {
    dispatch(moveToNextQuestion());
  };

  const { isLoading, currentQuestion } = useAppSelector(
    (state) => state.questionsSlice
  );

  return {
    isLoading,
    currentQuestion,
    nextQuestion,
  };
};
