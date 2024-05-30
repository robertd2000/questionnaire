import { FC } from "react";
import { Form, Radio, Space } from "antd";
import { AnswersProps } from "../../types";

export const SingleAnswers: FC<AnswersProps> = ({ options }) => {
  return (
    <Form.Item name="answer">
      <Radio.Group>
        <Space direction="vertical">
          {options.map((option) => (
            <Radio value={option} data-testid={option} data-cy="answer">
              {option}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};
