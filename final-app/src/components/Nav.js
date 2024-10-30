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

            </ul>
        </nav>
    )
};
export default Nav;