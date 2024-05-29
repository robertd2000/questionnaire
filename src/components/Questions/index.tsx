import { Button, Form } from "antd";
import { Question } from "../Question";
import { QuestionSteps } from "../QuestionSteps";
import { Spinner } from "../ui";
import { useQuestions } from "./hooks/useQuestions";

export const Questions = () => {
  const { isLoading, currentQuestion, form, isDisabled, onSubmit } =
    useQuestions();

  return isLoading ? (
    <Spinner />
  ) : (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <QuestionSteps />
      {currentQuestion && <Question />}{" "}
      <Button type="primary" htmlType="submit" disabled={isDisabled}>
        Next
      </Button>
    </Form>
  );
};
