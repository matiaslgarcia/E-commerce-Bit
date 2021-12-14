import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SpinnerCharge from "../Spinner/SpinnerCharge";
import { Greeting } from "../../components/Greeting/Greeting";
import ItemDetail from "./ItemDetail";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { useAddToCart } from "../../Context/CartContext";
import { getFirestore, collection, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [goCart, setGoCart] = useState(false);
  const [unProd, setUnProd] = useState({});

  const addToCart = useAddToCart();

  const onAdd = (cant) => {
    addToCart(unProd, cant);
    setGoCart(true);
  };

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const ref = collection(db, "products", id);
    getDoc(ref)
      .then((snapShot) => {
        if (snapShot.exists()) {
          setUnProd({
            id: snapShot.id,
            ...snapShot.data(),
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  // .then((response) => {
  //     const producto = response.find(
  //         (prod) => prod.id === parseInt(id)
  //     )
  //     setUnProd(producto)
  // })

  return isLoading ? (
    <SpinnerCharge />
  ) : (
    <Fragment>
      <Row>
        <Col>
          <Container className="container-detail-main">
            <Greeting greeting="Detalle del Producto" />
            <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
              <ItemDetail product={unProd} onAdd={onAdd} goCart={goCart} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Fragment>
  );
};
