import { Typography } from "antd";
import { getScoreColor } from "../../../../utils/check";
import { useResults } from "../../hooks/useResults";

export const ResultsHeader = () => {
  const { totalAmount, correct, correctPercent } = useResults();

  return (
    <>
      <Typography.Title level={4}>
        Your score:{" "}
        <span
          style={{
            color: getScoreColor(correctPercent),
          }}
        >
          {correctPercent} %
        </span>
      </Typography.Title>
      <Typography.Title level={5}>
        You've got correct answer to{" "}
        <u
          style={{
            color: "rgb(22, 119, 255)",
          }}
        >
          {correct}
        </u>{" "}
        question of total{" "}
        <u
          style={{
            color: "rgb(22, 119, 255)",
          }}
        >
          {totalAmount}
        </u>
      </Typography.Title>
    </>
  );
};
