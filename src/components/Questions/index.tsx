import { Button, Form } from "antd";
import { Question } from "../Question";
import { QuestionSteps } from "../QuestionSteps";
import { useQuestions } from "./hooks/useQuestions";
import { useQuestionsForm } from "./hooks/useQuestionsForm";

export const Questions = () => {
  const { isLoading, currentQuestion, nextQuestion } = useQuestions();
  const { form, isDisabled, onSubmit } = useQuestionsForm(nextQuestion);

  return isLoading ? (
    "Loading"
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
