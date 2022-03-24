import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  const title = "Molina's"

  return (
    
    <>
      <div className="App">
        <NavBar name={title}/>
        <Header />
        <ItemListContainer greeting="Our full list of meals will be available soon!" />
      </div>
    </>
  );
}

export default App;
