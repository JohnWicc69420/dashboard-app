import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./features/colorSlice";
import settingsReducer from "./features/settingsSlice";

// Create a Redux store with the color reducer
export const store = configureStore({
  reducer: {
    color: colorReducer,
    settings: settingsReducer,
  },
});
