import { getProductsById } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsById(1).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [])

    return (
        <div className="detail-container">
                {
                    loading ?
                    <h1>Loading...</h1> :
                    product ?
                    <div className="detail-wrap"><ItemDetail {...product} /></div> :
                    <h1>Product you looked for doesn't exist.</h1>
                }
        </div>
    )
    
}

export default ItemDetailContainer