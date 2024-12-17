import logo from "../images/little_lemon.png";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Nav = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Scroll to Home if already on the homepage
      scrollToSection(refs.homeRef);
    } else {
      // Navigate to the homepage
      navigate("/");
    }
    setMenuOpen(false);
  };

  const handleLinkClick = (ref, path) => {
    if (path === "/") {
      scrollToSection(ref);
    } else {
      navigate(path);
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <button onClick={handleHomeClick} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick(refs.menuRef, "/")}
            className="nav-button"
          >
            Menu
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick(refs.aboutRef, "/")}
            className="nav-button"
          >
            About Us
          </button>
        </li>
        <li>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            Reservations
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick(refs.footerRef, "/")}
            className="nav-button"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
