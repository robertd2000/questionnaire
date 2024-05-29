import { FC } from "react";
import { Typography, Progress, ConfigProvider } from "antd";
import { ScoreResult } from "../../../../redux/questions/types";
import { percentage } from "../../../../utils/math";
import { getColor } from "../../../../utils/color";
import { capitalizeString } from "../../../../utils/strings";
import { DifficultyType } from "../../../../types/questions";
import style from "../../../../styles/components/result/result.module.scss";

interface Props {
  score: ScoreResult;
  difficulty: DifficultyType;
}

export const ResultDifficulty: FC<Props> = ({ score, difficulty }) => {
  const percent = percentage(score.correct, score.totalAmount);
  const color = getColor(difficulty);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 19,
        },
      }}
    >
      <Typography.Title level={5}>
        <span
          style={{
            textDecoration: "underline",
            color,
          }}
        >
          {capitalizeString(difficulty)}
        </span>{" "}
        questions ( <u className={style.question}>{score.correct}</u> /{" "}
        <u className={style.question}>{score.totalAmount}</u> ):
      </Typography.Title>

      <Progress
        percent={percent}
        status="active"
        strokeColor={color}
        size={"small"}
        format={(p) => p?.toFixed(1) + "%"}
      />
    </ConfigProvider>
  );
};
