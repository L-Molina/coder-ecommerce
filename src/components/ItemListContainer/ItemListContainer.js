import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    /* const handleOnResize = () => {
        console.log('Cambio el tamaño de ItemListContainer')
    }

    useEffect(() => {
        window.addEventListener('resize', handleOnResize)
        return(() => {
            window.removeEventListener('resize', handleOnResize)
        })
    }) */
    const handleClick = () => {
        console.log('Hice click en ItemListContainer')
    }

    return(
        <div className="list-container">
            <h1 className="list-item">{props.greeting}</h1>
            <hr/>
            <div className="list-item" onClick={handleClick}>
                <ItemList products={products}/>
            </div>
            <hr/>
        </div>
    )
} 

export default ItemListContainer