import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getFirestore, collection , addDoc} from "firebase/firestore";

// import {items} from '../src/components/Item/items.js'
const firebaseConfig = {
  apiKey: "AIzaSyDYkcoW2YJuX0-7Y5XsBw5V4Jtpiy9v7ws",
  authDomain: "bit-3d.firebaseapp.com",
  projectId: "bit-3d",
  storageBucket: "bit-3d.appspot.com",
  messagingSenderId: "285731224037",
  appId: "1:285731224037:web:3d5065c7e8e058c578970c"
};

initializeApp(firebaseConfig);
// const data = [
//   {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588711/Bit%203D/llavero3_kyesvg.png',
//     title: 'Llavero Rana',
//     description: 'Llavero con diseño a ranas',
//     price: 150.0,
//     stock: 10,
//     categoryId: 'llaveros',
//     cartCount: 0,
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588711/Bit%203D/llavero1_qpzxvx.png',
//     title: 'Llavero Dinosaurio',
//     description: 'Llavero blanco con diseño a dinosaurio',
//     price: 250.0,
//     stock: 20,
//     categoryId: 'llaveros',
//     cartCount: 0,
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588712/Bit%203D/llavero4_vr1lxc.png',
//     title: 'Llavero Nene',
//     description: 'Llavero con diseño a un nene',
//     stock: 20,
//     price: 100.0,
//     categoryId: 'llaveros',
//     cartCount: 0,
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588712/Bit%203D/llavero2_adijmx.png',
//     title: 'LLaveros Varios',
//     description: 'LLaveritos con diseños variados',
//     stock: 50,
//     price: 100.0,
//     categoryId: 'llaveros',
//     cartCount: 0,
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588714/Bit%203D/mu%C3%B1eco4_wc20ng.png',
//     title: 'Muñecos Chibis Personalizados',
//     description: 'Muñecos Chibi Personalizables',
//     stock: 5,
//     price: 300.0,
//     categoryId: 'muniecos',
//     cartCount: 0,
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588714/Bit%203D/mu%C3%B1eco2_n3vwlx.png',
//     title: 'Muñeco Chibi Capitan America',
//     description: 'Muñeco Chibi Capitan America, para coleccion',
//     stock: 10,
//     price: 500.0,
//     categoryId: 'muniecos',
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588714/Bit%203D/mu%C3%B1eco3_ghcbac.png',
//     title: 'Muñeco Naruto',
//     description: 'Muñeco Naruto Shipodden personalizable',
//     stock: 5,
//     price: 500.0,
//     categoryId: 'muniecos',
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588713/Bit%203D/mu%C3%B1eco1_wf8lnv.png',
//     title: 'Muñeco Chibi Thor',
//     description: 'Muñeco Chibi Thor, para coleccion',
//     stock: 20,
//     price: 500.0,
//     categoryId: 'muniecos',
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588713/Bit%203D/maceta3_fdatti.png',
//     title: 'Macena La Ferina',
//     description: 'Maceta Modelo La Ferina para decorar tu casa',
//     stock: 10,
//     price: 800.0,
//     categoryId: 'macetas',
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588712/Bit%203D/maceta1_h8a29y.png',
//     title: 'Maceta Deco Perrito',
//     description: 'Maceta Deco perrito para decorar tu casa',
//     stock: 5,
//     price: 700.0,
//     categoryId: 'macetas',
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588712/Bit%203D/maceta2_oahpts.png',
//     title: 'Maceta Deco Perrito',
//     description: 'Maceta Deco perrito para decorar tu casa',
//     stock: 15,
//     price: 700.0,
//     categoryId: 'macetas',
// },
// {
//     img: 'https://res.cloudinary.com/dzrb2apcj/image/upload/v1637588713/Bit%203D/maceta4_lh0yew.png',
//     title: 'Maceta Buda',
//     description: 'Maceta Buda, para decorar tu casa',
//     stock: 10,
//     price: 1500.0,
//     categoryId: 'macetas',
// },
// ]
//Manera de subir informacion a firesbase

// const db = getFirestore()
// const ref = collection(db, 'products')

// data.map((item) => addDoc(ref, item))
//inicializador  de firebase


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render() recibe dos cosas:
//1. Recibe nuestro elemento de react 
//2. Recibe la ruta del elemento donde se va a renderizar

// ReactDOM.render(elemento , rutaARenderizar)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
