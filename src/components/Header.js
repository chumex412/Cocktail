import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header className="page-header">
      <div className="container">
        <nav className="nav-bar">
          <div className="nav-header">
            <h1>TheCocktailDB</h1>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;