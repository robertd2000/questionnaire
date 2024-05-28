import { FC } from "react";
import { ProviderProps } from "./types";
import { StoreProvider } from "./Store";
import { AntdProvider } from "./Antd";

export const Providers: FC<ProviderProps> = ({ children }) => {
  return (
    <StoreProvider>
      <AntdProvider>{children}</AntdProvider>
    </StoreProvider>
  );
};
