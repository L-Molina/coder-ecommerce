import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header-container">
            <div className='header-text'>
                <h1>Welcome to Molina's. Want a meal?</h1>
                <h3>-"For pastas, there's nothing better" -Brett Andersen</h3>
            </div>
            <h1>
                <Link to='/' className="header-button header-text">Look at our delicious menu!</Link>
            </h1>
        </div>
    )
}

export default Header;