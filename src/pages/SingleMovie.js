import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar, Footer, Loading } from "../components";
import { getMovie, getMoviesMain } from "../features/MoviesSlice";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";

export const SingleMovie = () => {
  const { isLoading, isError, Movie, Most_Popular, top_rated } = useSelector(
    (store) => store.MoviesSlice
  );
  const [isOpen, setOpen] = useState(false); // open Trailer
  const Navigate = useNavigate(); // if have any error navigate to home page

  const dispatch = useDispatch();
  const { id } = useParams();
  const swiperRef = useRef();

  useEffect(() => {
    dispatch(getMovie(id));

    /*
    If the user has refreshed the page.
    So we need to call getMoviesMain once again
    To get our movies on the home page.
    Again if Most_Popular or top_rated is small or equal to 0 you will render to our request. 
    */
    if (Most_Popular.length <= 0 || top_rated.length <= 0) {
      dispatch(getMoviesMain());
    }
  }, [id]);

  if (isLoading) return <Loading />;
  if (isError) {
    setTimeout(() => Navigate("/"), 1000);
  }

  const {
    title,
    overview,
    release_date,
    genres,
    original_language,
    runtime,
    poster_path,
    backdrop_path,
    vote_average,
    video_Trailer,
    cast,
  } = Movie;

  const hours = Math.floor(runtime / 60); // We have 60 minutes in an hour. We take what we got divided by 60.
  const minutes = runtime % 60; // Remainder

  const url = `https://www.themoviedb.org/t/p/original/`;
  return (
    <>
      <Navbar />
      <section
        className="section-single-Movie"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url(${url}${backdrop_path})`,
        }}
      >
        <div className="container">
          <img
            className="img-poster"
            src={`${url}${poster_path}`}
            alt="img-poster"
          />

          <div className="content-movie">
            <h1 className="title-movie">
              {title} ({release_date ? release_date.split("-")[0] : null})
            </h1>
            <p className="general-information">
              {release_date} ({original_language}){" "}
              {genres && genres.map((genres) => genres.name).join(", ")} {hours}
              h {minutes}m
            </p>

            <div className="action-icons">
              <div className="user-score">
                <CircularProgressbar
                  value={
                    vote_average
                      ? vote_average.toFixed(1).split(".").join("")
                      : null
                  }
                  text={`${
                    vote_average
                      ? vote_average.toFixed(1).split(".").join("")
                      : null
                  }%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#000",
                    textColor: "#B91C1C",
                    pathColor: "#B91C1C",
                    trailColor: "transparent",
                    width: 100,
                    height: 100,
                  })}
                />
                <p className="user-score-text">User Score</p>
              </div>

              <button
                className="btn-action-movie"
                onClick={() => setOpen(true)}
              >
                play trailer
              </button>
            </div>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={video_Trailer ? video_Trailer[0].key : null}
              onClose={() => setOpen(false)}
            />
            <p className="overview">Overview</p>
            <p className="text-movie">{overview}</p>
            <div className="credit">
              <button
                className="btn btn-credit-left"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <BsChevronLeft size={40} />
              </button>
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  // when window width is >= 1437px
                  431: {
                    slidesPerView: 3,
                  },
                }}
              >
                {cast &&
                  cast.map((cast, index) => {
                    const { name, profile_path } = cast;
                    if (!profile_path || !name) return; // guard clauses
                    return (
                      <SwiperSlide key={index}>
                        <div className="card">
                          <img
                            className="credit-photo"
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`}
                          />
                          <span className="name-actor">{name}</span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <button
                className="btn btn-credit-right"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <BsChevronRight size={40} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
