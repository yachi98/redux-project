import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import stocksReducer from "./features/stocksSlice";

export const store = configureStore({
  reducer: {
    stocksData: stocksReducer,
  },
});

export const useAppDispatch = () => store.dispatch;
export const RootState = store.getState();
export const useAppSelector = (state) => store.getState();
