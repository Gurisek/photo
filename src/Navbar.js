import "./Navbar.css";
import React from "react";
// import Triangle from "./components/Triangle";
import { NavLink } from "react-router-dom";
import logo from "./Images/logo1x1.jpg";

export default function Navbar() {
  return (
    <header>
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i class="gg-menu"></i>
        </label>
        <ul className="nav_links">
          <li>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                <div className="btn-content">
                  <span>Portfolio</span>
                  <i class="gg-chevron-down"></i>
                </div>
              </button>
              <div className="dropdown-content">
                <NavLink to="/svatba">Svatby</NavLink>
                <NavLink to="/rodinne">Rodinné focení</NavLink>
                <NavLink to="/portret">Portréty</NavLink>
                <NavLink to="/reklamni_foceni">Reklamní focení</NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/about">
              <button>O mně</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sluzby">
              <button>Služby</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">
              <button>Kontakt</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
