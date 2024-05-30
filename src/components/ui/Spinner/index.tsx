import { FC } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface Props {
  size?: number;
}

export const Spinner: FC<Props> = ({ size = 48 }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <Spin indicator={antIcon} size="large" data-testid="spinner" />
    </div>
  );
};
