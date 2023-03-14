import React, { useEffect } from "react";

import { getMoviesMain } from "../features/MoviesSlice";
import { useSelector, useDispatch } from "react-redux";
import { MovieList } from "./MovieList";
import { Loading } from "./Loading";

export const SectionCategories = () => {
  const { top_rated, Most_Popular, isLoading } = useSelector(
    (store) => store.MoviesSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesMain());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className="section-categories">
      <MovieList title="Most Popular" data={Most_Popular} />
      <MovieList title="Top Rated" data={top_rated} />
    </section>
  );
};
