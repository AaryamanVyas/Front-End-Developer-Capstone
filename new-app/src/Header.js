import logo1 from './waitress.avif'
import './App.css';
function Header() {
    return(
        <header className='header'>
            <>
            
                <div className='text-block'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean 
                        restaurant, focused on traditional recipes 
                        served with a modern twist.</p>
                    <div className="call-to-action">
                        <button>Reserve a Table</button>
                    </div>
                    <div className='image-block'>
                        <img src={logo1} alt='Delicous food'/>
                    </div>
                </div>
            </>
        </header>
    )
}
export default Header;
