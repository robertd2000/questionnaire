import { FC } from "react";
import { Button, ConfigProvider, Popover, theme } from "antd";
import { DifficultyBadge } from "../../../ui";
import { DifficultyType } from "../../../../types/questions";
import style from "../../../../styles/components/question/question.module.scss";

interface Props {
  difficulty: DifficultyType;
}

export const QuestionHeader: FC<Props> = ({ difficulty }) => {
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
            <DifficultyBadge difficulty={difficulty} />
            <p className={style.questionPopoverDescription}>
              Difficulty is based on the ratio of correct attempts to all
              attempts made by those answering the question.
            </p>
          </div>
        }
        placement="bottom"
      >
        <Button type="text" className={style.questionPopoverInner}>
          <DifficultyBadge difficulty={difficulty} />
        </Button>
      </Popover>
    </ConfigProvider>
  );
};
