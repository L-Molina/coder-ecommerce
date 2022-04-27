import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';

const NavBar = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(query(collection(firestoreDb, 'categories'), orderBy("order"))).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
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