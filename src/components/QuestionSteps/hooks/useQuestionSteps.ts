import { useAppSelector } from "../../../redux/store";

export const useQuestionSteps = () => {
  const { questions, currentQuestionSequenceNumber } = useAppSelector(
    (state) => state.questionsSlice
  );

  const items = questions.map((item) => ({ key: item.question, title: "" }));

  return {
    currentQuestionSequenceNumber,
    items,
  };
};
