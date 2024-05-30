import { FC } from "react";
import { Checkbox, Form, Space } from "antd";
import { AnswersProps } from "../../types";

export const MultipleAnswers: FC<AnswersProps> = ({ options }) => {
  return (
    <Form.Item name="answer" valuePropName="checked">
      <Checkbox.Group>
        <Space direction="vertical">
          {options.map((option) => (
            <Checkbox value={option} data-testid={option}>
              {option}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </Form.Item>
  );
};
