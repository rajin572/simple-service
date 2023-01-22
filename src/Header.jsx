import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>MR.X</div>
      <div>
        <div className="menuIcon">
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="service">Service</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
