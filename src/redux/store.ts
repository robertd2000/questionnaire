import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import questionsSlice from "./questions/slice";
import { questionsApi } from "./questions/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    questionsSlice,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
