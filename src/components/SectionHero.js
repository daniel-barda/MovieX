import React from "react";
import { Search } from "./Search";
import background from "../images/bg.jpg";
import background2 from "../images/bg.webp";

export const SectionHero = () => {
  return (
    <section className="section-hero grid grid-col-auto">
      <Search />
      <picture>
        <source srcSet={background2} type="image/webp" />
        <source srcSet={background} type="image/png" />

        <img className="img-hero" src={background} alt="cinema img" />
      </picture>
    </section>
  );
};
