import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "main-nav-link main-nav-link--active"
                  : "main-nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "main-nav-link main-nav-link--active"
                  : "main-nav-link"
              }
              to="/Movies"
            >
              Movies
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "main-nav-link main-nav-link--active"
                  : "main-nav-link"
              }
              to="/ContactUs"
            >
              Contact Us
            </NavLink>
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
