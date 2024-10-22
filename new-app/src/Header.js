import './App.css';
function Header() {
    return(
        <header className='header'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className="call-to-action">
                <h1>Reserve a Table</h1>
                <button>Click Here</button>
            </div>

        </header>
    )
}
export default Header;
