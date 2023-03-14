import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export const MovieList = ({ title, data }) => {
  const swiperRef = useRef();

  return (
    <div className="category">
      <button
        className="btn btn--left"
        aria-label="btn-slider-left"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <BsChevronLeft size={40} />
      </button>

      <h1 className="title-category">{title}</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          // when window width is >= 1437px
          1200: {
            slidesPerView: 6,
          },
          800: {
            // when window width is >= 1400
            slidesPerView: 4,
          },
          600: {
            // when window width is >= 1371
            slidesPerView: 3,
          },
          300: {
            // when window width is >= 1371
            slidesPerView: 2,
          },
        }}
      >
        {data.map((movie) => {
          const { id, poster_path, title } = movie;
          return (
            <SwiperSlide key={id}>
              <div className="movie">
                <Link className="link-movie" to={`/Movie/${id}`}>
                  <img
                    className="img-movie"
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
                    alt={title}
                  />
                  <span>
                    <p className="name-movie">{title}</p>
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        aria-label="btn-slider-right"
        className="btn btn--right"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <BsChevronRight size={40} />
      </button>
    </div>
  );
};
