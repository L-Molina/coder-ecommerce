import "./Cart.css"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, getTotalPrice, clearCart } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className="cart-container">
                <h1 className="cart-title">Your cart is currently empty</h1>
                <Link to="/" className="cart-link">
                    <h2>
                        Back to Menu
                    </h2> 
                </Link>
            </div>
        )
    }


    return (
        <div className="cart-container">
            <h1 className="cart-title">
                These are the current elements in your cart.
            </h1>
            <div className="cart-list">
                {
                    cart.map(prod =>  
                    <div className="cart-element" key={prod.id}>
                        <hr />
                        <h3>{prod.name}</h3>
                        Units: {prod.quantity}
                        <br/> Individual Price: ${prod.price}
                        <br/> Subtotal: ${prod.quantity * prod.price}
                        <h3 className="cart-button" onClick={() => removeItem(prod.id)}>Remove this Item</h3>
                        <hr />
                    </div>)
                }
            </div>
            <h2 className="cart-title">
                Total Price: ${getTotalPrice()}
            </h2>
            <div className="cart-list">
                <h2 onClick={() => clearCart()} className='cart-link'>Clean up my Cart</h2>
                <h2>
                    <Link to="/form" className="cart-link">Checkout</Link>
                </h2>
            </div>
        </div>
    )
}

export default Cart