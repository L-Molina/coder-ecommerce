import "../NavBar/NavBar.css"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    if (getQuantity() === 0) {
        return null
    }

    return(
        <>
        <Link to='/cart' className="nav-meals">
            <img src={require("./meal-icon.png")} alt="Meal Icon"/>
            <h4>{ getQuantity() }</h4>
        </Link> 
        </>
    )
}

export default CartWidget