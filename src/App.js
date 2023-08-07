import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import IconTitle from './components/Icon&Title/IconTitle';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageError from './components/PageError/PageError';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IconTitle />
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
