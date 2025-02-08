import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const useAppDispatch = () => store.dispatch;
export const RootState = store.getState();
export const useAppSelector = (state) => state.counter;
