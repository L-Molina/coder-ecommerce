import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <NavLink to='/'>
                    <img src="../../../images/molinas-logo.png" alt={props.title} className='navbar-logo' />
                </NavLink>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <h3>
                            { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'nav-links-active' : 'nav-links'}>{cat.description}</NavLink>)}
                        </h3>
                    </li>
                </ul>            
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;