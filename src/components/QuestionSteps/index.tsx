import { Steps } from "antd";
import { useQuestionSteps } from "./hooks/useQuestionSteps";

export const QuestionSteps = () => {
  const { currentQuestionSequenceNumber, items } = useQuestionSteps();

  return (
    <Steps
      current={currentQuestionSequenceNumber}
      items={items}
      size="small"
      responsive
    />
  );
};
