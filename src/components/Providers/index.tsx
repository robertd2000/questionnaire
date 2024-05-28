import { FC } from "react";
import { ProviderProps } from "./types";

export const Providers: FC<ProviderProps> = ({ children }) => {
  return <div>{children}</div>;
};
