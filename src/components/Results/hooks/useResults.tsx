import { resetState } from "../../../redux/questions/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { percentage } from "../../../utils/math";

export const useResults = () => {
  const { score } = useAppSelector((state) => state.questionsSlice);
  const dispatch = useAppDispatch();

  const { totalAmount, correct, byDificulty } = score;

  const correctPercent = percentage(correct, totalAmount);

  const startQuestionaire = () => {
    dispatch(resetState());
  };

  return {
    totalAmount,
    correct,
    byDificulty,
    correctPercent,
    startQuestionaire,
  };
};
