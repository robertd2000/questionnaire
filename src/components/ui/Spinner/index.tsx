import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Spinner = () => {
  return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
};
