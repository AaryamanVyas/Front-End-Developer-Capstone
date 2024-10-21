import logo from './little_lemon.png';
import './App.css';
function Header() {
    return(
        <header className='header'>
            <h1>Little lemon</h1>
            <img src={logo} alt=" Little lemon logo"/>
        </header>
    )
}
export default Header;
