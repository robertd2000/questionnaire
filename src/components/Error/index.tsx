import { FC } from "react";
import { Button, Card, Typography } from "antd";
import { useAppDispatch } from "../../redux/store";
import { resetState } from "../../redux/questions/slice";
import style from "../../styles/components/error/error.module.scss";

interface Props {
  errorMessage: string;
}

export const Error: FC<Props> = ({ errorMessage }) => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(resetState());
  };

  return (
    <Card className={style.errorContainer}>
      <Typography.Title>Oops!</Typography.Title>

      <p>{errorMessage}</p>

      <Button type="dashed" size="large" onClick={reset}>
        Try again
      </Button>
    </Card>
  );
};
