import React, { useContext, Fragment } from "react";
import CartContext, {
  useClearCart,
  useDeleteFromCart,
} from "../../Context/CartContext";
import { Row, Col, Container, ListGroup, Badge } from "react-bootstrap";
import { Greeting } from "../../components/Greeting/Greeting";
import './index.css'

const Cart = () => {
  const { cart} = useContext(CartContext);
  const deleteItem = useDeleteFromCart();
  const clear = useClearCart();

  return (
    <Fragment>
      <Row>
        <Col>
          <Container className="container-detail-main">
            <Greeting greeting="Carrito" />
            <Row xs={1} md={1} lg={1} className="g-4">
              {cart.map((item) => (
                <div key={item.id}>
                  <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <div className="ms-2 me-auto">
                        <img src={item.img} alt={item.img} width="90px" />
                        <b>Descripcion: </b> <span> {item.description}</span> |
                        <b> Cantidad: </b> <span>{item.cantidad} </span> 
                      </div>
                      <Badge variant="primary" bg="dark" pill>
                        {item.price}
                      </Badge>
                      <Badge variant="primary" bg="danger" pill className="ml-2">
                        <button className="delete-item" onClick={() => deleteItem(item)}>X</button>
                      </Badge>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              ))}
            </Row>
            <Row>
              <Col className="pt-4 d-flex justify-content-end">
                <button className="clear-cart" onClick={clear}>Vaciar Carrito</button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Cart;
