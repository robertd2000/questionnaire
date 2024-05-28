import { useAppSelector } from "../../redux/store";
import { MultipleAnswers } from "./Multiple";
import { SingleAnswers } from "./Single";

export const Answers = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return (
    <div>
      {currentQuestion?.type === "multiple" ? (
        <MultipleAnswers options={currentQuestion?.incorrect_answers} />
      ) : (
        <SingleAnswers options={currentQuestion?.incorrect_answers || []} />
      )}
    </div>
  );
};
