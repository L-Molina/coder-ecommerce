const products = [
    { 
        id: "1",
        name: "Spaghetti All'origano", 
        price: 1100, 
        category: 'pasta',
        img: require('./images/spaghetti-all-origano.png'),
        stock: 15,
        description: 'An all time Classic!'
    },
    { 
        id: "2", 
        name: "Macaroni", 
        price: 900, 
        category: 'pasta',
        img: require('./images/macaroni.png'),
        stock: 25,
        description: 'Macaroni with some vegetables on top.'
    },
    { 
        id: "3",
        name: "Gnocchi",
        price: 1000, 
        category: 'pasta',
        img: require('./images/gnocchi.png'),
        stock: 20,
        description: 'Great for the 29th!'
    },
    { 
        id: "4",
        name: "Linguine and Zucchini",
        price: 1200, 
        category: 'pasta',
        img: require('./images/linguine-and-zucchini.png'),
        stock: 10,
        description: 'A bit more of a spicy choice. (Cheese is optional)'
    },
    { 
        id: "5",
        name: "Ravioli di Granchio",
        price: 800, 
        category: 'pasta',
        img: require('./images/crab-ravioli.png'),
        stock: 25,
        description: 'Crab Ravioli. What a delight!'
    },
    { 
        id: "6",
        name: "Italian Pizza",
        price: 1500, 
        category: 'pizza', 
        img: require('./images/italian-pizza.png'),
        stock: 80,
        description: 'A regional staple! (Price is for full pizza)'
    },
    { 
        id: "7",
        name: "Milanese più Patatine Fritte",
        price: 1000, 
        category: 'kids', 
        img: require('./images/milanesa-con-papas.png'),
        stock: 20,
        description: 'Made for Kids to enjoy gracefully!'
    },
    { 
        id: "8",
        name: "Hamburger più Patatine",
        price: 1000, 
        category: 'kids', 
        img: require('./images/hamburguesa-papas.png'),
        stock: 20,
        description: 'Kids cannot go wrong with it!'
    },
    { 
        id: "9",
        name: "Water Glass",
        price: 200, 
        category: 'drink', 
        img: require('./images/water-glass.png'),
        stock: 40,
        description: 'For you who is looking for something fresh.'
    },
    { 
        id: "10",
        name: "Soft Drink (Coca-Cola Line)",
        price: 250, 
        category: 'drink', 
        img: require('./images/coca-cola.png'),
        stock: 40,
        description: 'Ideal for Kids!'
    },
    { 
        id: "11",
        name: "Red Wine (Geyser Peak)",
        price: 600, 
        category: 'drink', 
        img: require('./images/red-wine.png'),
        stock: 40,
        description: 'Elegant and ideal for a Saturday Night.'
    },
    { 
        id: "12",
        name: "Champagne",
        price: 720, 
        category: 'drink', 
        img: require('./images/champagne.png'),
        stock: 40,
        description: 'Real life Stars, great to enjoy alongside someone!'
    },
]

const categories = [
    {id: 'pasta', description: 'Pasta'},
    {id: 'pizza', description: 'Pizza'},
    {id: 'kids', description: 'Kids Menu'},
    {id: 'drink', description: 'Drinks'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 400)
    })
}

export const getProducts = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 400)
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 400)
    })
}