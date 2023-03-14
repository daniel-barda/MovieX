import getJSON from "../utils/axios";

// getMoviesMain Return Promise (pending,fulfilled,rejected)

/*
    themoviedb does not support axios well.
    So unfortunately we will have to configure manually every time instead of using interceptors.
*/

export const getMovieMainThunk = async (_, thunkAPI) => {
  try {
    const api = `api_key=${process.env.REACT_APP_KEY_API}`;

    const data = await getJSON.get(`movie/popular?${api}`);
    const data2 = await getJSON.get(`movie/top_rated?${api}`);

    return Promise.allSettled([data.data.results, data2.data.results]);
  } catch (error) {
    return thunkAPI.rejectWithValue(`Sorry, i have Error ${error}`);
  }
};

export const moviesGenresThunk = async (_, thunkAPI) => {
  try {
    const api = `api_key=${process.env.REACT_APP_KEY_API}`;
    const data = await getJSON.get(`genre/movie/list?${api}`);

    const allMovies = await Promise.allSettled(
      data.data.genres.map(async (item) => {
        const { id, name } = item;
        const data = await getJSON.get(
          `discover/movie?${api}&with_genres=${id}`
        );

        return [{ name_genres: name }, data.data.results];
      })
    );

    return allMovies;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const singleMovieThunk = async (id, thunkAPI) => {
  try {
    const api = `api_key=${process.env.REACT_APP_KEY_API}`;
    const data = await getJSON.get(`movie/${id}?${api}`);
    const getTrailer = await getJSON.get(`movie/${id}/videos?${api}`);
    const getCredits = await getJSON.get(`movie/${id}/credits?${api}`);

    if (data.status !== 200) return thunkAPI.rejectWithValue(data.message);

    return Promise.allSettled([
      data.data,
      getTrailer.data,
      getCredits.data.cast,
    ]);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const searchThunk = async (search_movie, thunkAPI) => {
  console.log(search_movie);
  try {
    const api = `api_key=${process.env.REACT_APP_KEY_API}`;
    const data = await getJSON.get(`search/movie?${api}&query=${search_movie}`);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
