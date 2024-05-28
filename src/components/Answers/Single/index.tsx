import { FC } from "react";
import { AnswersProps } from "../types";
import { Radio, Space } from "antd";

export const SingleAnswers: FC<AnswersProps> = ({ options }) => {
  return (
    <Radio.Group>
      <Space direction="vertical">
        {options.map((option) => (
          <Radio>{option}</Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};
