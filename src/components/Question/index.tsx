import { Form } from "antd";
import { useAppSelector } from "../../redux/store";

export const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questionsSlice);

  return <Form>{currentQuestion?.question}</Form>;
};
