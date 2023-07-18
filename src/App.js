import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import IconTitle from './components/Icon&Title/IconTitle';

function App() {
  return (
    <div className="App">
      <IconTitle />
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
