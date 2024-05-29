import { Button, Form } from "antd";
import { Question } from "../Question";
import { QuestionSteps } from "../QuestionSteps";
import { Spinner } from "../ui";
import { Results } from "../Results";
import { useQuestions } from "./hooks/useQuestions";

export const Questions = () => {
  const { isLoading, currentQuestion, form, isDisabled, hasNext, onSubmit } =
    useQuestions();

  return isLoading ? (
    <Spinner />
  ) : (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <QuestionSteps />
      {currentQuestion && hasNext ? <Question /> : <Results />}{" "}
      {hasNext && (
        <Button type="primary" htmlType="submit" disabled={isDisabled}>
          Send
        </Button>
      )}
    </Form>
  );
};
