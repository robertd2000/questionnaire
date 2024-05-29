import { Card, Divider } from "antd";
import { useResults } from "./hooks/useResults";
import { ResultDifficulty, ResultsHeader } from "./components";
import style from "../../styles/components/result/result.module.scss";

export const Results = () => {
  const { byDificulty } = useResults();

  return (
    <Card className={style.resultCard}>
      <ResultsHeader />
      <Divider />
      {byDificulty.easy.totalAmount > 0 && (
        <ResultDifficulty score={byDificulty.easy} difficulty="easy" />
      )}
      {byDificulty.medium.totalAmount > 0 && (
        <ResultDifficulty score={byDificulty.medium} difficulty="medium" />
      )}
      {byDificulty.hard.totalAmount > 0 && (
        <ResultDifficulty score={byDificulty.hard} difficulty="hard" />
      )}
    </Card>
  );
};
