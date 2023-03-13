import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="No disponible por el momento"/>
    </div>
  );
}

export default App;
