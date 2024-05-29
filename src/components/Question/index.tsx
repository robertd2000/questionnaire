import { Card } from "antd";
import { useAppSelector } from "../../redux/store";
import { Answers } from "../Answers";
import { QuestionHeader } from "../QuestionHeader";
import style from "../../styles/components/question/question.module.scss";

export const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return (
    <Card className={style.questionCard}>
      <>
        <QuestionHeader currentQuestion={currentQuestion} />
        <p
          dangerouslySetInnerHTML={{
            __html: currentQuestion?.question as string,
          }}
        />

        <Answers />
      </>
    </Card>
  );
};
