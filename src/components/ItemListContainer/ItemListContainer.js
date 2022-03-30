import "./ItemListContainer.css"
import Counter from "../Counter/Counter"
import { useState } from "react"

const ItemListContainer = (props) => {
    const [show, setShow] = useState(true)
    
    const handleOnAdd = (quantity) => {
        console.log(`Se han agregado ${quantity} productos al carrito`)
    }

    return(
        <div className="list-container">
            <h1 className="list-item">{props.greeting}</h1>
            <h3 className="list-button" onClick={() => setShow(!show)}>{show ? 'Cerrar' : 'Agregar al carrito'}</h3>
            {show ? <Counter initial={0} stock={9} onAdd={handleOnAdd}/> : null}
        </div>
    )
} 

export default ItemListContainer