import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification';

const App = () => {
  const title = "Molina's"

  return (
    <div className="App">
      <NotificationProvider>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar name={title}/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer /* setCart={setCart} cart={cart} *//>}/>
            <Route path='*' element={
            <div>
              <h1>THE PAGE DOESN'T EXIST (ERROR 404)</h1>
              <Link to='/'>
                <h3>Back to menu</h3>
              </Link>
            </div>
            } />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/form' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
