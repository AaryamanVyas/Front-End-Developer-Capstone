import logo from './little_lemon.png';
import './App.css';
function Header() {
    return(
        <header className='header'>
            <h1>Little lemon</h1>
            <img src={logo} alt=" Little lemon logo"/>
            <div className="call-to-action">
                <h1>Reserve a Table</h1>
                <button>Click Here</button>
            </div>

        </header>
    )
}
export default Header;
