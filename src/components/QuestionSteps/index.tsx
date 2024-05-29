import { Divider, Grid, Progress, Steps } from "antd";
import { useQuestionSteps } from "./hooks/useQuestionSteps";

const { useBreakpoint } = Grid;

export const QuestionSteps = () => {
  const { currentQuestionSequenceNumber, items, percent } = useQuestionSteps();
  const screens = useBreakpoint();

  return (
    <>
      {screens.lg && (
        <>
          <Steps
            current={currentQuestionSequenceNumber}
            items={items}
            size="small"
            responsive
          />
          <Divider />
        </>
      )}

      <div>
        <span>{percent.toFixed(2)}% completed</span>
        <Progress
          percent={percent}
          format={(p) => p?.toFixed(2) + "%"}
          showInfo={false}
        />
      </div>
    </>
  );
};
