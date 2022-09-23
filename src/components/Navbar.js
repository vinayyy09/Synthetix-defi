import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiAnydesk } from "react-icons/si";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          Synthetix
          <SiAnydesk className="logo" />
        </h1>
        <ul className={click ? " nav active" : "nav"}>
          <li className="nav-item">
            <a href="/">Explore</a>
          </li>

          <li className="nav-item">
            <a href="/">Stats</a>
          </li>

          <li className="nav-item">
            <a href="/">About</a>
          </li>

          <li className="nav-item">
            <a href="/">Community</a>
          </li>

          <li className="nav-item">
            <a className="btn" href="/">
              Create
            </a>
          </li>
        </ul>

        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
