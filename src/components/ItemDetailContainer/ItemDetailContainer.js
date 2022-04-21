import { getProductsById } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])

    if(loading) {
        return (
            <div className="detail-container">
                <div className="detail-wrap">
                    <hr/>
                    <h3>Loading...</h3>
                    <hr />
                </div>
            </div>
        )
    }

    return (
        <div className="detail-container">
                {
                    product ?
                        <div className="detail-wrap">
                            <hr />
                            <ItemDetail {...product} setCart={setCart} cart={cart}/>
                            <hr />
                        </div> :
                        <div className="detail-wrap">
                            <hr />
                            <h3>Product you looked for doesn't exist.</h3>
                            <hr />
                        </div>
                }
        </div>
    )
    
}

export default ItemDetailContainer