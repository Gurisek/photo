import "./Navbar.css";
import React from "react";
import Triangle from "./components/Triangle";
import { Link } from "react-router-dom";
import logo from "./Images/7.jpg";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className="nav_links">
          {/* <li>
            <Link to="/">Hlavní stránka</Link>
          </li> */}
          <li>
            <Link to="/portfolio">
              <button>
                Portfolio <Triangle />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>O mně</button>
            </Link>
          </li>
          <li>
            <Link to="/price">
              <button>Ceník</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/contact">
        <button>Kontakt</button>
      </Link>
    </header>
  );
}
