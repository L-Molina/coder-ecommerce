import "./Form.css"
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import Cart from "../Cart/Cart"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import { useNotification } from '../../notification/Notification'
import { Link } from "react-router-dom"

const Form = () => {
    const [input, setInput] = useState({name: '', phone: '', mail: '', confirmMail: '' })
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const { cart, getTotalPrice } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) => {
        if (input.mail === input.confirmMail) {
            setButtonDisabled(false)
        } else {
            setNotification('error', `Incorrect Mail. Try again!`)
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)


        const objOrder = {
            items: cart.map(prod => { return ({ 
                id: prod.id,
                name: prod.name, 
                quantity: prod.quantity, 
                price: prod.price
            }) }),
            buyer: {...input},
            total: getTotalPrice(),
            date: new Date()
        }
        
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
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
                const orderId = id
                console.log(`The order's id is ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally (() => {
                setLoading(false)
            })
    }

    const handleKeyDown = (e) => {
        console.log(e)
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    if (orderId) {
        return (
            <div className="form-container">
                <div className="form">
                    <h2 className="form-title">Thanks for buying food by Molina's, {input.name}</h2>
                    <h3>Your order's identification code is the following: {orderId}</h3>
                    <h2>
                        <Link to="/" className="form-link">Back to the Main Menu</Link>
                    </h2>
                </div>
            </div>
        )
    }

    if (loading) {
        return <h2>Loading, please wait...</h2>
    }

    if (cart.length === 0) {
        return <Cart />
    }

    return (
        <div className="form-container">
            <h2>To complete your order, we need some information</h2>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-wrap">
                        <h3 className="form-title">Username</h3>
                        <input required placeholder="User" type='text' onChange={handleChange}
                        onKeyDown={handleKeyDown} name="name" value={input.name || ""} />
                    </div>
                    <div className="form-wrap">
                        <h3 className="form-title">Phone Number</h3>
                        <input required placeholder="Phone" type='text' onChange={handleChange}
                        onKeyDown={handleKeyDown} name="phone" value={input.phone || ""} />
                    </div>
                    <div className="form-wrap">
                        <h3 className="form-title">Email</h3>
                        <input required placeholder="Mail" type='text' onChange={handleChange}
                        onKeyDown={handleKeyDown} name="mail" value={input.mail || ""} />
                    </div>
                    <div className="form-wrap">
                        <h3 className="form-title">Confirm Email</h3>
                        <input required placeholder="Confirm Mail" type='text' onChange={handleChange}
                        onKeyDown={handleKeyDown} onBlur={onBlurHandler} name="confirmMail" value={input.confirmMail || ""} />
                    </div>
                    <button type='submit' onClick={() => createOrder()} className="form-link" disabled={buttonDisabled}>Create Order</button>
                </form>
            </div>
        </div>
    )
}

export default Form 