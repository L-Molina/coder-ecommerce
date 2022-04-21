import './ItemDetail.css'
import '../Counter/Counter.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ButtonCount = ({ onConfirm, stock }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='counter-container'>
            <div className='counter-wrap'>
            <h3 className='counter-button counter-sign' onClick={decrement}>-</h3>
                <p className='counter-text'>{count}</p>
            <h3 className='counter-button counter-sign' onClick={increment}>+</h3>  
            </div>
            <h3 className='counter-button counter-text' onClick={() => onConfirm(count)}>Agregar al carrito</h3>
        </div>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem, isInCart } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        const objProd = {
            id, name, price, quantity: count
        }
        addItem({...objProd})
        setNotification('success', `Correctly added to Cart: ${count} ${name}`)
    }

    return (
        <article className="list-item">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="list-image"/>
            </picture>
            <section className="list-item">
                <p>
                    Category: {category}
                </p>
                <p>
                    Description: <br/>{description}
                </p>
                <p>
                    Price: ${price}
                </p>
            </section>           
            <footer>
                { isInCart(id) ? <h3><Link className='counter-button counter-text' to='/cart'>Go to Cart</Link></h3> : <ButtonCount onConfirm={handleAdd} stock={stock}/>}
            </footer>
        </article>
    )
}

export default ItemDetail