import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <NavLink to='/'>
                    <img src="../../../images/molinas-logo.png" alt={props.title} className='navbar-logo' />
                </NavLink>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <h3>
                            <NavLink to='/list' className={({ isActive }) => isActive ? 'nav-links-active' : 'nav-links'}>Menu</NavLink> 
                        </h3>
                    </li>
                    <li className='nav-item'>
                        <h3>
                            <NavLink to='/detail' className={({ isActive }) => isActive ? 'nav-links-active' : 'nav-links'}>Details</NavLink> 
                        </h3>
                    </li>
                    <li className='nav-item'>
                        <h3>
                            <NavLink to='/offers' className={({ isActive }) => isActive ? 'nav-links-active' : 'nav-links'}>Offers</NavLink>
                        </h3>
                    </li>
                    <li className='nav-item'>
                        <h3>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-links-active' : 'nav-links'}>Contact Us</NavLink>
                        </h3>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;