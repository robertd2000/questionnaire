import { useAppSelector } from "../../../redux/store";
import { percentage } from "../../../utils/math";

export const useResults = () => {
  const { score } = useAppSelector((state) => state.questionsSlice);

  const { totalAmount, correct, byDificulty } = score;

  const correctPercent = percentage(correct, totalAmount);

  return {
    totalAmount,
    correct,
    byDificulty,
    correctPercent,
  };
};
