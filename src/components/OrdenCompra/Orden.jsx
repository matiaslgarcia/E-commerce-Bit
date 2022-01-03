import React, { Fragment } from "react";
import { useEffect, useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import Ticket from "./Ticket";
import { Greeting } from "../../components/Greeting/Greeting";
import "./index.css";

const Orden = () => {
  const [orden, setOrden] = useState([]);
  const { user } = useContext(CartContext);
  const { email } = user;
  useEffect(() => {
    const db = getFirestore();
    const ref = query(collection(db, "orden"), orderBy("date"));
    getDocs(ref).then((snapShot) => {
      const orden = snapShot.docs.map((doc) => {
        const data = doc.data();
        const { date } = data;
        const fecha = new Date(date.seconds * 1000);
        const normalizeDate = new Intl.DateTimeFormat("es-ES", {
          dateStyle: "long",
          timeStyle: "long",
        }).format(fecha);
        return {
          id: doc.id,
          ...data,
          date: normalizeDate,
        };
      });
      setOrden(orden.filter((x) => x.buyer.email === email));
    });
  }, [email]);
  return (
    <Fragment>
      {orden.length === 0 ? (
        <Greeting greeting="Aun No tienes Ordenes de Compras" />
      ) : (
        <Fragment>
          <Greeting greeting="Tus Tickets" />
          {orden.map((orden) => (
            <Ticket key={orden.id} ord={orden} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Orden;
