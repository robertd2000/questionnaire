import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../redux/store";
import { shuffleArray } from "../../utils/array";
import { MultipleAnswers } from "./Multiple";
import { SingleAnswers } from "./Single";

export const Answers = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  const anwers = useMemo(
    () =>
      shuffleArray([
        ...(currentQuestion?.incorrect_answers as string[]),
        currentQuestion?.correct_answer || "",
      ]),
    [currentQuestion]
  );

  return (
    <div>
      {currentQuestion?.type === "multiple" ? (
        <MultipleAnswers options={anwers} />
      ) : (
        <SingleAnswers options={anwers} />
      )}
    </div>
  );
};
