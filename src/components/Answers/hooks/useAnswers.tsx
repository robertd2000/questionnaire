import { useMemo } from "react";
import { useAppSelector } from "../../../redux/store";
import { shuffleArray } from "../../../utils/array";

export const useAnswers = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  const anwers = useMemo(
    () =>
      shuffleArray([
        ...(currentQuestion?.incorrect_answers as string[]),
        currentQuestion?.correct_answer || "",
      ]),
    [currentQuestion]
  );

  const questionType = currentQuestion?.type;

  return {
    anwers,
    questionType,
  };
};
