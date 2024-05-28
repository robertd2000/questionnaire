import { Card, Form } from "antd";
import { useAppSelector } from "../../redux/store";
import style from "../../styles/components/question/question.module.scss";

export const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return (
    <Card className={style.questionCard}>
      <Form>
        <p
          dangerouslySetInnerHTML={{
            __html: currentQuestion?.question as string,
          }}
        />
      </Form>
    </Card>
  );
};
