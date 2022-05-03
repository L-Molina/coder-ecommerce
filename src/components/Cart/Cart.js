import "./Cart.css"
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, removeItem, getTotalPrice, clearCart } = useContext(CartContext)

    const createOrder = () => {
        setLoading(true)


        const objOrder = {
            items: cart,
            buyer: {
                name: 'Lautaro Molina',
                phone: '12345678',
                email: 'lautarogabrielmolina@gmail.com'
            },
            total: getTotalPrice(),
            date: new Date()
        }
        
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids))).then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(firestoreDb, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({ name: 'outOfStockError', products: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit()
            console.log(`The order's id is ${id}`)
        }).catch(error => {
            console.log(error)
        }).finally (() => {
            setLoading(false)
        })
    }

    if(loading) {
        return <h1>Generating your order, please wait...</h1>
    }

    if(cart.length === 0) {
        return (
            <div className="cart-container">
                <h1 className="cart-title">Your cart is currently empty</h1>
                <Link to="/" className="cart-link">
                    <h2>
                        Back to Menu
                    </h2> 
                </Link>
            </div>
        )
    }


    return (
        <div className="cart-container">
            <h1 className="cart-title">
                These are the current elements in your cart.
            </h1>
            <div className="cart-list">
                {
                    cart.map(prod =>  
                    <div className="cart-element" key={prod.id}>
                        <hr />
                        <h3>{prod.name}</h3>
                        Units: {prod.quantity}
                        <br/> Individual Price: ${prod.price}
                        <br/> Subtotal: ${prod.quantity * prod.price}
                        <h3 className="cart-button" onClick={() => removeItem(prod.id)}>Remove this Item</h3>
                        <hr />
                    </div>)
                }
            </div>
            <h2 className="cart-title">
                Total Price: ${getTotalPrice()}
            </h2>
            <div className="cart-list">
                <h2 onClick={() => clearCart()} className='cart-link'>Clean up my Cart</h2>
                <h2 onClick={() => createOrder()} className='cart-link'>Create Order</h2>
            </div>
        </div>
    )
}

export default Cart