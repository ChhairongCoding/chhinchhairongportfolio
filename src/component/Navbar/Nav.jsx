import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="contain">
      <nav className="nav">
        <div className="nav-content">
          <div className="style"></div>
          <div className="style"></div>
          <a href="#" className="brand-name">
            .CHHIN CHHAIRONG
          </a>
        </div>
        <div className="navBar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
