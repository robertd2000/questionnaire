import { useEffect } from "react";
import { Form } from "antd";
import { fetchQuestions } from "../../../redux/questions/api/asyncActions";
import { moveToNextQuestion, setAnswer } from "../../../redux/questions/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { checkIsCorrect } from "../../../utils/check";

export const useQuestions = () => {
  const dispatch = useAppDispatch();

  const { isLoading, currentQuestion, currentQuestionSequenceNumber } =
    useAppSelector((state) => state.questionsSlice);

  const [form] = Form.useForm();
  const answer = Form.useWatch("answer", form);

  const nextQuestion = () => {
    dispatch(moveToNextQuestion());
  };

  const onAnswer = (answerData: string | string[]) => {
    const answerPayload = {
      question: currentQuestionSequenceNumber,
      answer: answerData,
      correct_answer: currentQuestion?.correct_answer,
      isCorrect: checkIsCorrect(
        currentQuestion?.correct_answer as string,
        answerData
      ),
    };
    dispatch(setAnswer(answerPayload));
  };

  const onSubmit = () => {
    form.validateFields().then((data) => {
      onAnswer(data.answer);
      nextQuestion();
      form.resetFields();
    });
  };

  const isDisabled = !answer?.length;

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return {
    isLoading,
    currentQuestion,
    form,
    isDisabled,
    onSubmit,
  };
};
