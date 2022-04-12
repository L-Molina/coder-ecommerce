import { getProductsById } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import Counter from "../Counter/Counter"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
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
    
    const [show, setShow] = useState(true)
    
    const handleOnAdd = (quantity) => {
        console.log(`Se han agregado ${quantity} productos al carrito`)
    }

    return (
        <div className="detail-container">
                {
                    loading ?
                    <h1>Loading...</h1> :
                    product ?
                    <div className="detail-wrap">
                        <ItemDetail {...product} />
                        <p className="detail-button" onClick={() => setShow(!show)}>{show ? 'Back' : 'Add to Cart'}</p>
                        {show ? <Counter initial={0} stock={9} onAdd={handleOnAdd}/> : null}
                    </div> :
                    <h1 className="detail-container">Product you looked for doesn't exist.</h1>
                }
        </div>
    )
    
}

export default ItemDetailContainer