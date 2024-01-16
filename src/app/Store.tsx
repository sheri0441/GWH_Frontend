import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../feature/loginSlice";

export const Store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
