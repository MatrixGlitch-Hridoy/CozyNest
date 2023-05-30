import { configureStore } from "@reduxjs/toolkit";
import registerModalReducer from "./features/RegisterModalSlice";

export const store = configureStore({
  reducer: {
    registerModal: registerModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
