import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()

    const { categoryId } = useParams()
    
    useEffect(() => {
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Here, for your enjoyment!')
        }, 1000)
    })
    const handleClick = () => {
        console.log('Hice click en ItemListContainer')
    }

    return(
        <div className="list-container">
            <h1 className="list-item">{title}</h1>
            <hr className="list-line"/>
            <div className="list-item" onClick={handleClick}>
                <ItemList products={products}/>
            </div>
            <hr className="list-line"/>
        </div>
    )
} 

export default ItemListContainer