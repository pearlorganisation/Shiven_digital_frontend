// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import globalDataReducer from "./slice/globalDataSlice";

export const store = configureStore({
  reducer: {
    globalData: globalDataReducer,
  },
});
