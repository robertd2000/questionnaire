import { Card, Typography } from "antd";
import { useResults } from "./hooks/useResults";
import style from "../../styles/components/result/result.module.scss";

export const Results = () => {
  const { totalAmount, correct, correctPercent, byDificulty } = useResults();

  return (
    <Card className={style.resultCard}>
      <Typography.Title level={5}>
        Your score: {correct} / {totalAmount}
      </Typography.Title>
      <Typography.Title level={5}>{correctPercent}%</Typography.Title>
    </Card>
  );
};
