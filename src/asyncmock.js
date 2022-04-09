const products = [
    { 
        id: 1,
        name: "Spaghetti All'origano", 
        price: 1100, 
        category: 'meals', 
        img: require('./images/spaghetti-all-origano.png'),
        stock: 15,
        description: 'spaghetti description'
    },
    { 
        id: 2, 
        name: "Macaroni", 
        price: 900, 
        category: 'meals', 
        img: require('./images/macaroni.png'),
        stock: 25,
        description: 'macaroni description'
    },
    { 
        id: 3,
        name: "Gnocchi",
        price: 1000, 
        category: 'meals', 
        img: require('./images/gnocchi.png'),
        stock: 20,
        description: 'gnocchi description'
    },
    { 
        id: 3,
        name: "Linguine and Zucchini",
        price: 1200, 
        category: 'meals', 
        img: require('./images/linguine-and-zucchini.png'),
        stock: 10,
        description: 'linguine description'
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}