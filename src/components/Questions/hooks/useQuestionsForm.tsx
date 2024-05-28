import { Form } from "antd";

export const useQuestionsForm = (callback: () => void) => {
  const [form] = Form.useForm();
  const answer = Form.useWatch("answer", form);

  const onSubmit = () => {
    form.validateFields().then((data) => {
      console.log("data", data);
      callback();
      form.resetFields();
    });
  };

  const isDisabled = !answer?.length;

  return {
    form,
    isDisabled,
    onSubmit,
  };
};
