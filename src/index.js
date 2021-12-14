import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYkcoW2YJuX0-7Y5XsBw5V4Jtpiy9v7ws",
  authDomain: "bit-3d.firebaseapp.com",
  projectId: "bit-3d",
  storageBucket: "bit-3d.appspot.com",
  messagingSenderId: "285731224037",
  appId: "1:285731224037:web:3d5065c7e8e058c578970c"
};

//inicializador  de firebase
initializeApp(firebaseConfig);

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
