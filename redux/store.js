import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./features/colorSlice";

// Create a Redux store with the color reducer
export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});
