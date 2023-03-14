import React from "react";
import { Link } from "react-router-dom";
import popCorn from "../images/popcorn.png";
export const Error = () => {
  return (
    <div className="error">
      <div className="error-text">
        <h1 class="logo">
          Movie<span>X </span>404
        </h1>
        <Link className="main-nav-link" to="/">
          Back Home
        </Link>
      </div>
      <img className="img-error" src={popCorn} alt="popcorn img" />
    </div>
  );
};
