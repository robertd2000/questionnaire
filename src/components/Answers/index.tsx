import { useAppSelector } from "../../redux/store";
import { shuffleArray } from "../../utils/array";
import { MultipleAnswers } from "./Multiple";
import { SingleAnswers } from "./Single";

export const Answers = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  const anwers = shuffleArray([
    ...(currentQuestion?.incorrect_answers as string[]),
    currentQuestion?.correct_answer || "",
  ]);

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
