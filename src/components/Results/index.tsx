import { Button, Card, Divider } from "antd";
import { ResultDifficulty, ResultsHeader } from "./components";
import { useResults } from "./hooks/useResults";
import style from "../../styles/components/result/result.module.scss";

export const Results = () => {
  const { byDificulty, startQuestionaire } = useResults();

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

      <Divider />

      <div className={style.startButton}>
        <Button type="primary" onClick={startQuestionaire}>
          Try again
        </Button>
      </div>
    </Card>
  );
};
