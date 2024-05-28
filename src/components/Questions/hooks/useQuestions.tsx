import { useEffect } from "react";
import { Form } from "antd";
import { fetchQuestions } from "../../../redux/questions/api/asyncActions";
import { moveToNextQuestion } from "../../../redux/questions/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

export const useQuestions = () => {
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  const answer = Form.useWatch("answer", form);

  const onSubmit = () => {
    form.validateFields().then((data) => {
      console.log("data", data);
      nextQuestion();
      form.resetFields();
    });
  };

  const isDisabled = !answer?.length;

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
    form,
    isDisabled,
    onSubmit,
  };
};
