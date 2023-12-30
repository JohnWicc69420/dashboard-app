import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  openSettings: false,
};

// Create a slice for the color state
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // Define a reducer to update the selectedColor
    setOpenSettings(state, action) {
      state.openSettings = action.payload;
    },
  },
});

// Export the reducer and the action creator
export const { setOpenSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
