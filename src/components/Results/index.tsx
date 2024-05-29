import { Card, Divider } from "antd";
import { useResults } from "./hooks/useResults";
import style from "../../styles/components/result/result.module.scss";
import { ResultsEasy, ResultsHeader } from "./components";

export const Results = () => {
  const { byDificulty } = useResults();

  return (
    <Card className={style.resultCard}>
      <ResultsHeader />
      <Divider />
      {byDificulty.easy.totalAmount > 0 && (
        <ResultsEasy score={byDificulty.easy} />
      )}
    </Card>
  );
};
