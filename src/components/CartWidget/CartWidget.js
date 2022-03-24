import "../NavBar/NavBar.css"

const CartWidget = () => {
    return(
        <div className="nav-meals">
            <img src={require("./meal-icon.png")} alt="Meal Icon"></img>
            <h4>4</h4>
        </div>
    )
}

export default CartWidget