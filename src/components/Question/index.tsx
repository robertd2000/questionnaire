import { Card } from "antd";
import { useAppSelector } from "../../redux/store";
import style from "../../styles/components/question/question.module.scss";
import { Answers } from "../Answers";

export const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return (
    <Card className={style.questionCard}>
      <>
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
