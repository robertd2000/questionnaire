import { Button, Form } from "antd";
import { Question } from "../Question";
import { QuestionSteps } from "../QuestionSteps";
import { Results } from "../Results";
import { Error } from "../Error";
import { Spinner } from "../ui";
import { useQuestions } from "./hooks/useQuestions";
import { NO_DATA_MESSAGE } from "../../constants";

export const Questions = () => {
  const {
    isLoading,
    currentQuestion,
    form,
    isDisabled,
    hasNext,
    error,
    questions,
    onSubmit,
  } = useQuestions();

  if (isLoading) return <Spinner />;

  if (error) return <Error errorMessage={error.message} />;

  if (!questions.length) return <Error errorMessage={NO_DATA_MESSAGE} />;

  return (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <QuestionSteps />
      {currentQuestion && hasNext ? <Question /> : <Results />}{" "}
      {hasNext && (
        <Button
          type="primary"
          htmlType="submit"
          disabled={isDisabled}
          size="large"
        >
          Send
        </Button>
      )}
    </Form>
  );
};
