import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { fetchQuestions } from "../../redux/questions/api/asyncActions";
import { Question } from "../Question";
import { moveToNextQuestion } from "../../redux/questions/slice";
import { QuestionSteps } from "../QuestionSteps";

export const Questions = () => {
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

  return isLoading ? (
    "Loading"
  ) : (
    <div>
      <QuestionSteps />
      {currentQuestion && <Question />}{" "}
      <Button onClick={nextQuestion}>Next</Button>
    </div>
  );
};
