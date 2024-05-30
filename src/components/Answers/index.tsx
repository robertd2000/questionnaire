import { ConfigProvider } from "antd";
import { MultipleAnswers } from "./components";
import { SingleAnswers } from "./components";
import { useAnswers } from "./hooks/useAnswers";

export const Answers = () => {
  const { anwers, questionType } = useAnswers();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 18,
        },
      }}
    >
      {questionType === "multiple" ? (
        <MultipleAnswers options={anwers} />
      ) : (
        <SingleAnswers options={anwers} />
      )}
    </ConfigProvider>
  );
};
