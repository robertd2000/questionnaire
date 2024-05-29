import { useMemo } from "react";
import { useAppSelector } from "../../redux/store";
import { shuffleArray } from "../../utils/array";
import { MultipleAnswers } from "./Multiple";
import { SingleAnswers } from "./Single";
import { ConfigProvider } from "antd";

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
    <ConfigProvider
      theme={{
        token: {
          fontSize: 18,
        },
      }}
    >
      {currentQuestion?.type === "multiple" ? (
        <MultipleAnswers options={anwers} />
      ) : (
        <SingleAnswers options={anwers} />
      )}
    </ConfigProvider>
  );
};
