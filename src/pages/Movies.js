import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesGenres } from "../features/MoviesSlice";
import { MovieList } from "../components/MovieList";
import { Navbar, Loading, Footer } from "../components";

export const Movies = () => {
  const { isLoading, Movies } = useSelector((store) => store.MoviesSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesGenres());
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <Navbar />
      <section className="section-categories">
        {Movies.map((movie, index) => {
          const [title, data] = movie.value;

          return (
            <MovieList key={index} title={title.name_genres} data={data} />
          );
        })}
      </section>
      <Footer />
    </>
  );
};
