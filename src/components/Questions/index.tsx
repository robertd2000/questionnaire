import { Button, Form } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { fetchQuestions } from "../../redux/questions/api/asyncActions";
import { Question } from "../Question";
import { moveToNextQuestion } from "../../redux/questions/slice";
import { QuestionSteps } from "../QuestionSteps";

export const Questions = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const nextQuestion = () => {
    dispatch(moveToNextQuestion());
  };

  const { isLoading, currentQuestion } = useAppSelector(
    (state) => state.questionsSlice
  );

  const onSubmit = () => {
    form.validateFields().then((data) => {
      console.log("data", data);
      nextQuestion();
    });
  };

  return isLoading ? (
    "Loading"
  ) : (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <QuestionSteps />
      {currentQuestion && <Question />}{" "}
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form>
  );
};
