import React from "react";
import "./navBar.scss";
import "./hamburgerMenu.scss";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function NavBar() {
  return (
    <div className="navBar">
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <div className="nav-list">
        <NavLink to="/">
          <span className="nav-item">Home</span>
        </NavLink>
        <NavLink to="/exercises">
          <span className="nav-item">Exercises</span>
        </NavLink>
        <NavLink to="/calculator">
          <span className="nav-item">Calculator</span>
        </NavLink>
        <NavLink to="/nutrition">
          <span className="nav-item">Nutrition</span>
        </NavLink>
        <span className="nav-item">Contact Us</span>
      </div>
      <button className="nav-btn">Let’s Explore</button>
      <div className="hamburger">
        <Menu left>
          <NavLink to="/">
            <span className="nav-item">Home</span>
          </NavLink>
          <NavLink to="/exercises">
            <span className="nav-item">Exercises</span>
          </NavLink>
          <NavLink to="/calculator">
            <span className="nav-item">Calculator</span>
          </NavLink>
          <NavLink to="/nutrition">
            <span className="nav-item">Nutrition</span>
          </NavLink>
          <Link to="/">
            <span className="nav-item">Contact Us</span>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
