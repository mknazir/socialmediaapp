import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Features/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
