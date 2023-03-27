import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, clearSearch } from "../features/MoviesSlice";
import { Link } from "react-router-dom";

export const Search = () => {
  const { isLoading, MoviesSearch } = useSelector((store) => store.MoviesSlice);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length <= 0) dispatch(clearSearch());
    if (!search) return; // guard clauses

    dispatch(searchMovie(search));
  }, [search]);

  return (
    <div className={`search ${search ? "search-list-open" : null}`}>
      <CiSearch className="icon-search" />

      <input
        className="search-input"
        type="text"
        onChange={handleSearch}
        placeholder="Search Movie"
      />

      <nav className="movie-list-search">
        <ul className="movie-list">
          {MoviesSearch.map((movie) => {
            const { id, title, poster_path } = movie;
            return (
              <li key={id} className="movie-item">
                <Link className="movie-link-search" to={`/Movie/${id}`}>
                  <img
                    className="img-movie-search"
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
                    alt="img-movie"
                  />
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
