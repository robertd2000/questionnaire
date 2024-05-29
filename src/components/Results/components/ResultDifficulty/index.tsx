import { FC } from "react";
import { Typography, Progress } from "antd";
import { ScoreResult } from "../../../../redux/questions/types";
import { percentage } from "../../../../utils/math";
import { getColor } from "../../../../utils/color";
import { DifficultyType } from "../../../../types/questions";

interface Props {
  score: ScoreResult;
  difficulty: DifficultyType;
}

export const ResultDifficulty: FC<Props> = ({ score, difficulty }) => {
  const percent = percentage(score.correct, score.totalAmount);
  const color = getColor(difficulty);

  return (
    <>
      <Typography.Title level={5}>
        <span
          style={{
            textDecoration: "underline",
            color,
          }}
        >
          Easy
        </span>{" "}
        questions:
      </Typography.Title>
      <Progress percent={percent} status="active" strokeColor={color} />
    </>
  );
};
