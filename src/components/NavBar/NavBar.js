import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = (props) => {
    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src="../../../images/molinas-logo.png" alt="Molina's" className='navbar-logo' />
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <h3 className='nav-links'>Offers</h3>
                    </li>
                    <li className='nav-item'>
                        <h3 className='nav-links'>Meals</h3>
                    </li>
                    <li className='nav-item'>
                        <h3 className='nav-links'>Drinks</h3>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;