import { Card } from "antd";
import { useAppSelector } from "../../redux/store";
import { Answers } from "../Answers";
import { DifficultyBadge } from "../Difficulty";
import { DifficultyType } from "../../types/questions";
import style from "../../styles/components/question/question.module.scss";

export const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return (
    <Card className={style.questionCard}>
      <>
        <DifficultyBadge
          difficulty={currentQuestion?.difficulty as DifficultyType}
        />
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
