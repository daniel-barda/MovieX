import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`header ${isOpen ? "nav-open" : null}`}>
      <Logo />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link className="main-nav-link main-nav-link--active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to="/Movies">
              Movies
            </Link>
          </li>

          <li>
            <Link className="main-nav-link" to="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="nav-mobile"
        aria-label="btn-menu-mobile"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu className="icon-mobile" name="menu-outline" />
        <AiOutlineClose className="icon-mobile" name="close-outline" />
      </button>
    </div>
  );
};
