import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuSunMedium } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import NavLinks from "./navlinks";
import { IoLogoMedium } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-base-200 mb-10">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link to="/" className="logo flex items-center gap-1">
            <div className="glowing-btn text-5xl  " />
            My Articles
          </Link>
        </div>
        <nav className="navbar-center">
          <ul className=" menu-horizontal gap-10">
            <NavLinks />
          </ul>
        </nav>

        <div className="navbar-end flex gap-10 items-center">
          <button className="glowing-btn btn btn-primary">
            <span className="">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
