import BarraNav from './components/NavBar/BarraNav.jsx';
import React from 'react';
import './index.css'
import ItemListContainer from '../src/components/Item/ItemListContainer';
import { ItemDetailContainer } from './components/Item/ItemDetailContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div id="particles-js">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
        <BarraNav />
        <ItemListContainer />
        <ItemDetailContainer />
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


