import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getDocs, collection, query, where, orderBy, limit } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { firestoreDb } from "../../services/firebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()

    const { categoryId } = useParams()
    
    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : query(collection(firestoreDb, 'products'), orderBy("name", "desc"), limit(5))

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
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