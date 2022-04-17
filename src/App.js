import './App.css';
import NavBar from './components/NavBar/NavBar';
/* import Header from './components/Header/Header'; */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route, /* Link */ } from 'react-router-dom'


const App = () => {
  const title = "Molina's"

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <NavBar name={title}/>
        {/* <Link to='/form'>Form</Link> */}
          <Routes>
            {/* <Route path='/' element={<Header />}/> */}
            <Route path='/' element={<ItemListContainer greeting="Here you have our full menu. Enjoy!" />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Select what you want to order!" />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>THE PAGE DOESN'T EXIST (ERROR 404)</h1>} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
