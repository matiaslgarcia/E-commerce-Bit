import React, { useState, useContext, Fragment } from "react";
import CartContext, { useClearCart } from "../../Context/CartContext";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { Greeting } from "../../components/Greeting/Greeting";
import "./index.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CartDetail from "./CartDetail";
import Orden from "../../components/OrdenCompra/Orden";
// import CarritoVacio from "./CarritoVacio";

const Cart = () => {
  const { cart, total, getUser, user } = useContext(CartContext);

  const clear = useClearCart();
  const [ticket, setTicket] = useState(true);
  const [form, getForm] = useState({
    nombreCompleto: "",
    celular: "",
    email: "",
  });

  const llenarForm = (e) => {
    const { name, value } = e.target;
    getForm({
      ...form,
      [name]: value,
    });
    console.log(e.value);
  };

  const date = new Date();
  const finalizar = () => {
    getUser(form);
    const db = getFirestore();
    const ref = collection(db, "orden");
    const newOrden = {
      buyer: form.email,
      // buyer: user,
      items: cart,
      date: date,
      total: total(),
    };
    addDoc(ref, newOrden);
    setTicket(false);
    clear();
  };

  // if (total() === 0) {
  //   return <CarritoVacio />;
  // } else {
  return (
    <Fragment>
      {ticket ? (
        <Fragment>
          <Row>
            <Col>
              <Container className="container-detail-main">
                <Greeting greeting="Carrito" />
                <Row xs={1} md={1} lg={1} className="g-4">
                  {cart.map((item) => (
                    <CartDetail key={item.id} item={item} />
                  ))}
                </Row>
                <Row className="mb-2">
                  <Col className="pt-4 d-flex justify-content-between">
                    <h3>Total General: ${total()}</h3>
                    <button className="clear-cart" onClick={clear}>
                      Vaciar Carrito
                    </button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Container className="container-detail-orden">
            <Row className="mb-2">
              <Col className="pt-4">
                <Form method="POST" onSubmit={finalizar}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombreCompleto"
                      placeholder="Ingrese Su Nombre y Apellido"
                      onChange={llenarForm}
                    />
                    <Form.Group className="mb-3">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control
                        type="text"
                        name="celular"
                        placeholder="Ingrese Sucelular"
                        onChange={llenarForm}
                      />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ingrese su E-mail"
                      onChange={llenarForm}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="clear-cart"
                    disabled={
                      cart?.length === 0 ||
                      form.nombreCompleto === "" ||
                      form.email === ""
                    }
                  >
                    Finalizar Compra
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <Orden />
        </Fragment>
      )}
    </Fragment>
  );
};
// };

export default Cart;
