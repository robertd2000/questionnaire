import { FC } from "react";
import { ProviderProps } from "../types";
import { Provider } from "react-redux";
import store from "../../../redux/store";

export const StoreProvider: FC<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
