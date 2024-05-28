import { FC } from "react";
import { Form, Radio, Space } from "antd";
import { AnswersProps } from "../types";

export const SingleAnswers: FC<AnswersProps> = ({ options }) => {
  return (
    <Radio.Group>
      <Space direction="vertical">
        {options.map((option) => (
          <Form.Item name={option} valuePropName="checked">
            <Radio>{option}</Radio>
          </Form.Item>
        ))}
      </Space>
    </Radio.Group>
  );
};
