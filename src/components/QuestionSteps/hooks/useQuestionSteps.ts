import { useAppSelector } from "../../../redux/store";
import { percentage } from "../../../utils/math";

export const useQuestionSteps = () => {
  const { questions, currentQuestionSequenceNumber } = useAppSelector(
    (state) => state.questionsSlice
  );

  const items = questions.map((item) => ({ key: item.question, title: "" }));

  const percent = percentage(currentQuestionSequenceNumber, items.length);

  return {
    currentQuestionSequenceNumber,
    items,
    percent,
  };
};
