import { FC } from "react";
import { ScoreResult } from "../../../../redux/questions/types";
import { Progress, Typography } from "antd";
import { percentage } from "../../../../utils/math";
import { Colors } from "../../../../constants";

interface Props {
  score: ScoreResult;
}
export const ResultsMedium: FC<Props> = ({ score }) => {
  const percent = percentage(score.correct, score.totalAmount);

  return (
    <>
      <Typography.Title level={5}>
        <span
          style={{
            textDecoration: "underline",
            color: Colors.orange,
          }}
        >
          Medium
        </span>{" "}
        questions:
      </Typography.Title>
      <Progress percent={percent} status="active" strokeColor={Colors.orange} />
    </>
  );
};
