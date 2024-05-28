import { FC } from "react";
import { AnswersProps } from "../types";
import { Checkbox, Space } from "antd";

export const MultipleAnswers: FC<AnswersProps> = ({ options }) => {
  return (
    <Space direction="vertical">
      {options.map((option) => (
        <Checkbox>{option}</Checkbox>
      ))}
    </Space>
  );
};
