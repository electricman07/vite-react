import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Avatar200.png";
import { links } from "../assets/data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <div className="logo__container">
          <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="logo" />
          </Link>
          <h2>Glen Popowich</h2>
        </div>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
