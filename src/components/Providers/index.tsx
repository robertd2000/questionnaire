import { FC } from "react";
import { StoreProvider } from "./Store";
import { AntdProvider } from "./Antd";
import { ProviderProps } from "./types";

export const Providers: FC<ProviderProps> = ({ children }) => {
  return (
    <StoreProvider>
      <AntdProvider>{children}</AntdProvider>
    </StoreProvider>
  );
};
