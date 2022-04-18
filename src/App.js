import './App.css';
import NavBar from './components/NavBar/NavBar';
/* import Header from './components/Header/Header'; */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createContext, /* useState */ } from 'react';
import { CartContextProvider } from './context/CartContext';

export const Context = createContext()

const App = () => {
  const title = "Molina's"
  /* const [cart, setCart] = useState([])

  console.log(cart) */

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar name={title}/>
        {/* <Link to='/form'>Form</Link> */}
          <Routes>
            {/* <Route path='/' element={<Header />}/> */}
            <Route path='/' element={<ItemListContainer greeting="Here you have our full menu. Enjoy!" />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Select what you want to order!" />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer /* setCart={setCart} cart={cart} *//>}/>
            <Route path='*' element={<div>
              <h1>THE PAGE DOESN'T EXIST (ERROR 404)</h1>
              <Link to='/'>
                <h3>Back to menu</h3>
              </Link>
            </div>
            } />
            <Route path='/form' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
