import BarraNav from './components/NavBar/BarraNav.jsx';
import Cart from './components/NavBar/Cart.jsx';
import React from 'react';
import './index.css'
import ItemListContainer from '../src/components/Item/ItemListContainer';
import { ItemDetailContainer } from './components/Item/ItemDetailContainer.jsx';
import { Catalogo } from './components/Catalogo/Catalogo.jsx';
import { BrowserRouter, Route, Routes,  Navigate} from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    
    <div id="particles-js">
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/catalogue" element={<ItemListContainer />} />
          <Route path="/catalogue/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/catalogue/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

//JSX ,es un modelo que permite la combinacion de codigo JS con HTML
//JSX --> Javascript XML 

// class --> className

//Componente sirven para la logica de nuestra
// lading page , es decir, Logica --> JS
// Visual --> HTML/CSS


