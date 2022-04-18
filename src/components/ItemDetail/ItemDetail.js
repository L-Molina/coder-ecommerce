import './ItemDetail.css'
import '../Counter/Counter.css'
import { useState, useContext } from 'react'
import { Link/* , useNavigate */ } from 'react-router-dom'
import CartContext from '../../context/CartContext'

/* const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    const handleChange = (e) => {
        if(e.target.value > 0 && e.target.value <= stock) {
            setCount(e.target.value)
        }    
    }

    return (
        <div className='counter-container'>
            <input className='counter-text' type='number' onChange={handleChange} value={count}/>
            <h3 className='counter-button counter-sign' onClick={() => onConfirm(count)}>Agregar al carrito</h3>
        </div>
    )
} */

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

/* const Select = ({ options = [], onSelect}) => {
    return(
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
        </select>
    )
} */

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
/*     const [typeInput, setTypeInput] = useState(true)
 *//*  const options = [{id: 0, value: '', text: '-'}, {id: 1, value: '/', text: 'ItemListContainer'}, {id: 2, value: '/form', text: 'Form'}] */    
/*  const navigate = useNavigate() */

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const objProd = {
            id, name, price
        }
        addItem({...objProd, quantity: count})
    }

    /* const handleSelect = (value) => {
        navigate(value)
    } */

/*     const Count = typeInput ? ButtonCount : InputCount
 */     
    return (
        <article className="list-item">
            <header>
{/*                 <h3 className='counter-button' onClick={() => setTypeInput(!typeInput)}>Change Counter</h3>
 */}                <h2>
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
                {/* <Select options={options} onSelect={handleSelect} /> */}
                { isInCart(id) ? <h3><Link className='counter-button counter-text' to='/cart'>Go to Cart</Link></h3> : <ButtonCount onConfirm={handleAdd} stock={stock}/>}
            </footer>
        </article>
    )
}

export default ItemDetail