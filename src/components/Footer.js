import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer grid grid-footer">
        <h1 className="logo logo--footer">
          Movie<span>X</span>
        </h1>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="#">
                about moviex
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                for business
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="#">
                help center
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>

        <div className="address-col">
          <p className="footer-heading">Contact Us</p>
          <address className="contacts">
            <p className="address">201 Cassia Ct. Michigan United States</p>

            <p>
              <Link className="footer-link" to="tel:734-844-1100">
                734-844-1100
              </Link>

              <br />
              <Link className="footer-link" to="mailto:734-844-1100">
                hello@Moviex.com
              </Link>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};
