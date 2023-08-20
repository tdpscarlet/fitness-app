import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  exercises: {},
  search: "",
  bodyPart: "all",
  selected: {},
};
const config = {
  headers: {
    "X-RapidAPI-Key": "aba5ebbb43msh492ff23b5162573p1dfe59jsnf1f5d5668110",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const url = "https://exercisedb.p.rapidapi.com/exercises";

export const fetchAsyncExercises = createAsyncThunk(
  "exercisesList/fetchAsyncExercises",
  async () => {
    const response = await axios
      .get(url, config)
      .catch((err) => console.log(err));
    // console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncDetail = createAsyncThunk(
  "exercisesList/fetchAsyncDetail",
  async (id) => {
    const response = await axios
      .get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, config)
      .catch((err) => console.log(err));
    // console.log(response.data);
    return response.data;
  }
);

export const exercisesSlice = createSlice({
  name: "exercisesList",
  initialState,
  reducers: {
    searchExercises: (state, { payload }) => {
      state.search = payload;
    },
    filterExercises: (state, { payload }) => {
      state.bodyPart = payload;
    },
    removeSelectedExercise: (state) => {
      state.selected = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncExercises.pending, () => {
      console.log("Pending...");
    });
    builder.addCase(fetchAsyncExercises.fulfilled, (state, { payload }) => {
      console.log("Fetch exercises Successfully");
      return {
        ...state,
        exercises: payload,
      };
    });
    builder.addCase(fetchAsyncDetail.pending, () => {
      console.log("Pending...");
    });
    builder.addCase(fetchAsyncDetail.fulfilled, (state, { payload }) => {
      console.log("Fetch exercise detail  Successfully");
      return {
        ...state,
        search: "",
        bodyPart: "all",
        selected: payload,
      };
    });
  },
});

export const searchSelector = (state) => state.exercisesList.search;
export const bodyPartSelector = (state) => state.exercisesList.bodyPart;
export const getAllExercises = (state) => state.exercisesList.exercises;
export const getSelectedExercise = (state) => state.exercisesList.selected;
export const { removeSelectedExercise } = exercisesSlice.actions;
export const { searchExercises } = exercisesSlice.actions;
export const { filterExercises } = exercisesSlice.actions;

export default exercisesSlice.reducer;
