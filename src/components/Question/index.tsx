import { Card } from "antd";
import { useAppSelector } from "../../redux/store";
import { Answers } from "../Answers";
import { QuestionBody, QuestionHeader } from "./components";
import style from "../../styles/components/question/question.module.scss";

export const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return (
    <Card className={style.questionCard}>
      <>
        <QuestionHeader difficulty={currentQuestion?.difficulty!} />
        <QuestionBody question={currentQuestion?.question} />

        <Answers />
      </>
    </Card>
  );
};
