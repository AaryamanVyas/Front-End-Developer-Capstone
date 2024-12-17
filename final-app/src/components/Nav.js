import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/little_lemon.png";

const Nav = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    if (onNavigate) {
      onNavigate(anchor); // Call the handler with the section
    }
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
        <li>
          <a href="#home-section" onClick={handleClick('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#menu-section" onClick={handleClick('menu')}>
            Menu
          </a>
        </li>
        <li>
          <a href="#about-section" onClick={handleClick('about')}>
            About Us
          </a>
        </li>
        <li>
          <a href="#booking-section" onClick={handleClick('booking')}>
            Reservations
          </a>
        </li>
        <li>
          <a href="#contact-section" onClick={handleClick('contact')}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
