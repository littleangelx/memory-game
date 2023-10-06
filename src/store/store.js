import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./settingsSlice";
import gamePlayReducer from "./gamePlaySlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    gamePlay: gamePlayReducer,
  },
});

export default store;
