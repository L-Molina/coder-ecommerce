import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  const title = "Molina's"

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <NavBar name={title}/>
          <Routes>
            <Route path='/' element={<Header />}/>
            <Route path='/list' element={<ItemListContainer greeting="Here you have our full menu. Enjoy!" />}/>
            <Route path='/detail' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>THE PAGE DOESN'T EXIST (ERROR 404)</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
