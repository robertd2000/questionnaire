import { Card, Divider } from "antd";
import { useResults } from "./hooks/useResults";
import style from "../../styles/components/result/result.module.scss";
import {
  ResultsEasy,
  ResultsHard,
  ResultsHeader,
  ResultsMedium,
} from "./components";

export const Results = () => {
  const { byDificulty } = useResults();

  return (
    <Card className={style.resultCard}>
      <ResultsHeader />
      <Divider />
      {byDificulty.easy.totalAmount > 0 && (
        <ResultsEasy score={byDificulty.easy} />
      )}
      {byDificulty.medium.totalAmount > 0 && (
        <ResultsMedium score={byDificulty.medium} />
      )}
      {byDificulty.hard.totalAmount > 0 && (
        <ResultsHard score={byDificulty.hard} />
      )}
    </Card>
  );
};
