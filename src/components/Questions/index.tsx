import { Button, Steps } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { fetchQuestions } from "../../redux/questions/api/asyncActions";
import { Question } from "../Question";
import { moveToNextQuestion } from "../../redux/questions/slice";

export const Questions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const nextQuestion = () => {
    dispatch(moveToNextQuestion());
  };

  const { isLoading } = useAppSelector((state) => state.questionsSlice);

  return isLoading ? (
    "Loading"
  ) : (
    <div>
      <Steps />

      <Question />
      <Button onClick={nextQuestion}>Next</Button>
    </div>
  );
};
