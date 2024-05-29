import { FC } from "react";
import { Button, ConfigProvider, Popover, theme } from "antd";
import { DifficultyBadge } from "../Difficulty";
import { DifficultyType, Question } from "../../types/questions";
import style from "../../styles/components/question/question.module.scss";

interface Props {
  currentQuestion: Question | null;
}

export const QuestionHeader: FC<Props> = ({ currentQuestion }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Popover
        title={
          <h2 className={style.questionPopoverTitle}>Question difficulty</h2>
        }
        content={
          <div className={style.questionPopoverContent}>
            <DifficultyBadge
              difficulty={currentQuestion?.difficulty as DifficultyType}
            />
            <p className={style.questionPopoverDescription}>
              Difficulty is based on the ratio of correct attempts to all
              attempts made by those answering the question.
            </p>
          </div>
        }
        placement="bottom"
      >
        <Button type="text" className={style.questionPopoverInner}>
          <DifficultyBadge
            difficulty={currentQuestion?.difficulty as DifficultyType}
          />
        </Button>
      </Popover>
    </ConfigProvider>
  );
};
