# Welcome to Molina's

# # Getting started:

# # # Installing:

There are two ways to setup the program from Github: 
via using git clone https://github.com/L-Molina/coder-ecommerce.git,
or via downloading the ZIP file
Then, in a terminal placed in the directory where the file package.json is locates, you simply type npm install, and then npm start. Boom! Now Molina's is up and running!

# # # How it works, 1 component at a time:

- Cart:

Depending on the length of the cart, it will either show a button to get back to the menu, or the items that are present in the cart, as well as give you the option to remove individual items, create a new order, or clean up your cart to start again.

Create new order: Create the order with the information of the products in the cart, as well as the user (hardcoded in for now)

Verify, for each product, that the units in the order are equal to/do not exceed the current stock, in which case it will update the stock accordingly.

Remove item, Clean Cart: both are taken from CartContext, so they will be explained there.

- CartWidget:

Depending on the quantity taken from CartContext's getQuantity (which determines the total number of units in the cart), it will either show nothing, or the cart widget: an object with an icon that will show the amount of units in the cart, NOT the number of different products.

Example: If I add 3 pizzas and 2 water bottles to my cart, CartWidget would show that I have 5 items in my cart, instead of 2.

- Item:

Builds the iten that wil later be utilized by itemList, which will render it depending on the amount of existing products in the database.
The item has: a Name, an Image, a designated Price, and a button that will link you to the detail of the product in question.

- ItemDetail:

It first starts by creating a Count Component, whose total amount possible depends on two factors: if it's lower than 0, or if it's lower than the stock for the given product.
After that, it will return the detail of the item itself, which will show the user the following: Name, Image, Category, Description, Price, as well as the aforementioned Count, if the product isn't in the cart already. In case it is, it will show a button that will send the user to the cart.

- ItemDetailContainer:

It starts by showing a loading screen, after which, the output will depend on if the product in question is defined in the database or not, using a useEffect to define the product as it is in the firestoreDb.

If it doesn't exist, it will show an error screen which will make the user have to go back to the menu and select a different product
If it does exist, it will show the previously mentioned ItemDetail, with the information of the product, like the Name and the Price, matching with what is shown in the database.

- ItemList:

It will basically return Item, with the props of the product in question mapped onto their respective fields, AKA their Name, Price and Image.
This will be exported and utilized in...

- ItemListContainer:

It has a few different returns, depending on diferent factors:

If no items are on the database (for whatever reason), it will display a message that indicates that there are no products available at the moment

If the state Loading is set to True (so, when it gets to the UseEffect, basically), it will display a simple loading screen.

If none of these are the case, it will show the ItemList discussed beforehand, only in between some white lines for the more "stylish" effect. This works as the main menu.

- NavBar: 

You know that red bar at the top of the screen? Yea, that's the NavBar.
It has the following options:

Click the handmade logo to get to the Menu.
Click the four options on the right (Pasta, Pizza, Kids Menu, and Drinks) to see the products of their respective Categories.
Once you have added a product to the cart, click on the CartWidget to get to your Cart.

- Notification:

A neat component that sets up a notification wherever it's used. This notification is be used to, for example, tell the user that a certain amount of products were added to the cart, or that there was an error when confirming their mail.

- CartContext:

CartContext has some important functionality related to Cart, consisting of the following functions:

addItem: Used in ItemDetail, it does as it says, it adds said item to the cart

getQuantity: Tells you the total amount of products in your cart

isInCart: Tells you if any amount of a certain product is in the cart

clearCart: Used in Cart, it completely removes every element from your cart.

removeItem: Completely removes an item you added to your cart, from said cart

getTotalPrice: Gives you the total price of your order

- Form: 

Here is where you go when you wanna create your order, after you are done adding stuff to your cart. Here we are gona need certain data from the buyer to finish the order: Username, Phone Number and Email adress (twice).
When you submit we will give you the identification code of your order, to help you know which one it is.

# # # Currently unused components:

- Header: This was originally meant to be the main menu you would go to instead of ItemListContainer, but was unused on account of the criteria for the project not allopwing it's use.

- Counter: The Counter property in ItemDetail was originally planned to be used on a separate component, but turned out to be unnecessary

Now, let's talk for a second about what exactly is a product for our platform.
The answer lies in Firestore

# # Firebase / Firestore: What is a product?

Firestore's database for Molina's has 3 collections, products, orders and categories. Let's go over them 1 by 1:

Products: Here we have 12 different products with different Names, Descriptions, Prices, among other things
Worth mentioning is that all of the documents in the collection have automatically generated Ids.
                                   
|    Field    |  Type  |      Value       |
| ----------- | ------ | ---------------- |
| category    | string | category name    |
| description | string | description      |
| img         | string | image route      |
| name        | string | product name     |
| order       | number | order in Menu    |
| price       | number | individual price |
| stock       | number | amount of stock  |

Orders: Lists the information for each order that successfully gets created.

| Field |   Type    |              Value                  |
| ----- | --------- | ----------------------------------- |
| buyer | map       | email | name | phone                |
| date  | timestamp | order date                          |
| items | array     | elements: id, name, price, quantity | 

Categories: Shows off the different categories of products.

|    Field    |  Type  |      Value      |
| ----------- | ------ | --------------- |
| description | string | description     |
| order       | number | order in NavBar |

Here's a highlight of how it looks like to navigate the platform!

![Molina's GIF](https://github.com/L-Molina/coder-ecommerce/blob/dfcd0c249559064cc7033af3b0c51ac3cd2b1182/public/React-gif.gif "Molina's GIF")
