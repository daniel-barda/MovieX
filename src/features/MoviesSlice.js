import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getJSON from "../utils/axios";
import { toast } from "react-toastify";
import {
  getMovieMainThunk,
  moviesGenresThunk,
  singleMovieThunk,
  searchThunk,
} from "./MovieThunk";

const initialState = {
  Most_Popular: [], // Category
  top_rated: [], // List of recommended movies shown on the home page
  Movies: [], // All movies list
  Movie: {}, // current Movie
  MoviesSearch: [], // Getting all the movies from the search
  isLoading: true, // cheak if page is loading
  isError: false,
};

export const getMoviesMain = createAsyncThunk(
  "getMoviesMain",
  getMovieMainThunk
);
export const getMoviesGenres = createAsyncThunk(
  "getMoviesGenres",
  moviesGenresThunk
);
export const getMovie = createAsyncThunk("getMovie", singleMovieThunk);
export const searchMovie = createAsyncThunk("searchMovie", searchThunk);

const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.MoviesSearch = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesMain.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getMoviesMain.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.Most_Popular = payload[0].value;
        state.top_rated = payload[1].value;
        state.isError = false;
      })
      .addCase(getMoviesMain.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        console.error(payload);
      });

    // searchMovie
    builder
      .addCase(searchMovie.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(searchMovie.fulfilled, (state, { payload }) => {
        state.MoviesSearch = payload.results;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(searchMovie.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.error(payload.message);
      });

    // get Movies Genres
    builder
      .addCase(getMoviesGenres.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getMoviesGenres.fulfilled, (state, { payload }) => {
        state.Movies = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getMoviesGenres.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.error(payload.message);
      });

    // get Single Movie
    builder
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getMovie.fulfilled, (state, { payload }) => {
        const currentMovie = {
          ...payload[0].value,
          video_Trailer: payload[1].value.results,
          cast: payload[2].value,
        };

        state.Movie = currentMovie;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getMovie.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.error(payload.message);
      });
  },
});
export const { clearSearch } = MovieSlice.actions;
export default MovieSlice.reducer;
