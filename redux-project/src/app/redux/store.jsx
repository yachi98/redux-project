import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import stocksReducer from "./features/stocksSlice";

export const store = configureStore({
  reducer: {
    stocksData: stocksReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
