import { FC } from "react";
import { Button, Card, Typography } from "antd";
import { useAppDispatch } from "../../redux/store";
import { resetState } from "../../redux/questions/slice";
import { Colors } from "../../constants";

interface Props {
  errorMessage: string;
}

export const Error: FC<Props> = ({ errorMessage }) => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(resetState());
  };
  return (
    <Card
      style={{
        borderColor: Colors.red,
        textAlign: "center",
      }}
    >
      <Typography.Title>Oops!</Typography.Title>

      <p>{errorMessage}</p>

      <Button type="dashed" size="large" onClick={reset}>
        Try again
      </Button>
    </Card>
  );
};
