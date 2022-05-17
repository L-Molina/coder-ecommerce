import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
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

    if(products.length === 0) {
        return(
            <div className="list-container">
                <h1 className="list-item">There are no products available.</h1>
                <hr className="list-line"/>
            </div>
        )
    }

    if (loading) {
        return(
            <div className="list-container">
                <h1 className="list-item">Loading, please wait...</h1>
                <hr className="list-line" />
            </div>
        ) 
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