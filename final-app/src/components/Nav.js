import logo from '../images/little_lemon.png'
import React, {useState} from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen]=useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#Reservations">Reservations </a></li>
                <li><a href="#order-online">Order Online</a> </li>
                <li><a href="#login">Login Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
};
export default Nav;