import "../NavBar/NavBar.css"
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div className="nav-meals">
            <img src={require("./meal-icon.png")} alt="Meal Icon"/>
            <h4>{ getQuantity() }</h4>
        </div>
    )
}

export default CartWidget