import { FC } from "react";
import { Checkbox, Form, Space } from "antd";
import { AnswersProps } from "../types";

export const MultipleAnswers: FC<AnswersProps> = ({ options }) => {
  return (
    <Space direction="vertical">
      {options.map((option) => (
        <Form.Item name={option}>
          <Checkbox>{option}</Checkbox>
        </Form.Item>
      ))}
    </Space>
  );
};
