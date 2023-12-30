import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  colors: [
    { id: 1, bgColor: "bg-[#108EF3]" },
    { id: 2, bgColor: "bg-[#01B2D5]" },
    { id: 3, bgColor: "bg-[#725FFE]" },
    { id: 4, bgColor: "bg-[#FB6D8E]" },
    { id: 5, bgColor: "bg-[#1B4CB7]" },
    { id: 6, bgColor: "bg-[#FD9D77]" },
  ],
  selectedColor: "bg-[#108EF3]",
};

// Create a slice for the color state
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    // Define a reducer to update the selectedColor
    selectColor(state, action) {
      state.selectedColor = action.payload;
    },
  },
});

// Export the reducer and the action creator
export const { selectColor } = colorSlice.actions;
export default colorSlice.reducer;
