import { firestoreDb } from "./index"
import {
    getDocs, 
    collection, 
    query, 
    where,
    orderBy, 
} from "firebase/firestore"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : query(collection(firestoreDb, 'products'), orderBy('order'))

        getDocs(collectionRef)
            .then(response => {
                const products = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                resolve(products)
            })
            .catch(error => {
                reject(error)
            })
    })
}