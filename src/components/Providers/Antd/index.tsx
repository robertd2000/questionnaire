import { FC } from "react";
import { ConfigProvider } from "antd";
import { ProviderProps } from "../types";

export const AntdProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto",
          fontSize: 18,
          colorText: "#404140",
          fontWeightStrong: 500,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
