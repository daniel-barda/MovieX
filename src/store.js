import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./features/MoviesSlice";
export const store = configureStore({
  reducer: {
    MoviesSlice: MoviesSlice,
  },
});
