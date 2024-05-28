import { FC } from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { ProviderProps } from "../types";

export const StoreProvider: FC<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
