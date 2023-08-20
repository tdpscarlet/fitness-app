import { configureStore } from "@reduxjs/toolkit";
import ExercisesReducer from "./exercises/exercisesSlice";

export const store = configureStore({
  reducer: {
    exercisesList: ExercisesReducer,
  },
});
