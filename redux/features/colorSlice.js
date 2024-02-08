import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  selectedBgColor: "bg-[#01B2D5]",
  selectedTextColor: "text-[#01B2D5]",
};

// Create a slice for the color state
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    // Define a reducer to update the selectedColor
    selectBgColor(state, action) {
      state.selectedBgColor = action.payload;
    },
    selectTextColor(state, action) {
      state.selectedTextColor = action.payload;
    },
  },
});

// Export the reducer and the action creator
export const { selectBgColor, selectTextColor } = colorSlice.actions;
export default colorSlice.reducer;
