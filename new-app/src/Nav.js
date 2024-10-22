import logo from './little_lemon.png';

import './App.css';
function Nav() {
    return(
        
        <nav className='nav'>
            <img src={logo} alt=" Little lemon logo"/>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#Reservations">Reservations </a></li>
                <li><a href="#order-online">Order Online</a> </li>
                <li><a href="#login">Login Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
