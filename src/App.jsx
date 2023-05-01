
import './App.css';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import NavB from './components/NavB/NavB';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <NavB/>  
    <ItemListContainer greeting="Clothing"/>
    <ProductCard/>
    
    </div>
  )
}

export default App;
