import { useEffect } from "react";
import { Form } from "antd";
import { fetchQuestions } from "../../../redux/questions/api/asyncActions";
import { moveToNextQuestion, setAnswer } from "../../../redux/questions/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

export const useQuestions = () => {
  const dispatch = useAppDispatch();

  const { isLoading, currentQuestion } = useAppSelector(
    (state) => state.questionsSlice
  );

  const [form] = Form.useForm();
  const answer = Form.useWatch("answer", form);

  const nextQuestion = () => {
    dispatch(moveToNextQuestion());
  };

  const onAnswer = (answerPayload: string | string[]) => {
    dispatch(setAnswer(answerPayload.toString()));
  };

  const onSubmit = () => {
    form.validateFields().then((data) => {
      onAnswer(data.answer);
      nextQuestion();
      form.resetFields();
    });
  };

  const isDisabled = !answer?.length;

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return {
    isLoading,
    currentQuestion,
    form,
    isDisabled,
    onSubmit,
  };
};
