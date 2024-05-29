import { FC } from "react";
import { ConfigProvider } from "antd";
import { ProviderProps } from "../types";

export const AntdProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "PT Root UI",
          fontSize: 20,
          colorText: "rgb(0, 0, 0)",
          fontWeightStrong: 500,
          lineHeight: 2,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
