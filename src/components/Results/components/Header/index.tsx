import { Typography } from "antd";
import { useResults } from "../../hooks/useResults";
import { getScoreColor } from "../../../../utils/check";
import style from "../../../../styles/components/result/result.module.scss";

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
        You've got correct answer to <u className={style.question}>{correct}</u>{" "}
        question of total <u className={style.question}>{totalAmount}</u>
      </Typography.Title>
    </>
  );
};
