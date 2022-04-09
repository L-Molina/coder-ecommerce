import "./ItemListContainer.css"
import Counter from "../Counter/Counter"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])
    
    const [show, setShow] = useState(true)
    
    const handleOnAdd = (quantity) => {
        console.log(`Se han agregado ${quantity} productos al carrito`)
    }

    return(
        <div className="list-container">
            <h1 className="list-item">{props.greeting}</h1>
            <div className="list-item">
                <ItemList products={products}/>
            </div>
            <h3 className="list-button" onClick={() => setShow(!show)}>{show ? 'Back' : 'Order'}</h3>
            {show ? <Counter initial={0} stock={9} onAdd={handleOnAdd}/> : null}
        </div>
    )
} 

export default ItemListContainer