import { createSlice } from "@reduxjs/toolkit";

const initialSettingsState = {
  theme: window.localStorage.getItem("theme") || "Numbers",
  numPlayers: window.localStorage.getItem("numPlayers") || "1",
  gridSize: window.localStorage.getItem("gridSize") || "4 x 4",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettingsState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      window.localStorage.setItem("theme", state.theme);
    },
    setNumPlayers(state, action) {
      state.numPlayers = action.payload;
      window.localStorage.setItem("numPlayers", state.numPlayers);
    },
    setGridSize(state, action) {
      state.gridSize = action.payload;
      window.localStorage.setItem("gridSize", state.gridSize);
    },
  },
});

export const settingsActions = settingsSlice.actions;

export default settingsSlice.reducer;
