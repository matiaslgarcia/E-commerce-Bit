import BarraNav from './components/NavBar/BarraNav.jsx';
import { Fragment } from 'react';
import './index.css'
import ItemListCointainer from './components/ItemListContainer/ItemListContainer.jsx';
const App = () => {
  return (
    <Fragment>
      <BarraNav />
      <ItemListCointainer/>
    </Fragment>
  );
}
export default App;

//JSX ,es un modelo que permite la combinacion de codigo JS con HTML
//JSX --> Javascript XML 

// class --> className

//Componente sirven para la logica de nuestra
// lading page , es decir, Logica --> JS
// Visual --> HTML/CSS


