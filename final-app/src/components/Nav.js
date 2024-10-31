import logo from '../images/little_lemon.png'
import React, {useState} from "react";
import { Link } from 'react-router-dom';
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
};
export default Nav;