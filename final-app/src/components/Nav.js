import logo from '../images/little_lemon.png'
function Nav() {
    return (
        <nav className="nav">
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>
            <div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
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
    )
};
export default Nav;