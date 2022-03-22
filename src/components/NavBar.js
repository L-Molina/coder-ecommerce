import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src="../../images/molinas-logo.png" alt="Molina's" className='navbar-logo' />
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
        </nav>
    )
}

export default NavBar;