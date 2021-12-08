import React, { useContext, Fragment } from "react";
import CartContext, {
  useClearCart,
  useDeleteFromCart,
} from "../../Context/CartContext";
import {
  Row,
  Col,
  Container,
  ListGroup,
  Badge,
  Nav,
  Button,
} from "react-bootstrap";
import { Greeting } from "../../components/Greeting/Greeting";
import { Link } from "react-router-dom";
import "./index.css";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  const deleteItem = useDeleteFromCart();
  const clear = useClearCart();

  if (total() === 0) {
    return (
      <Row>
        <Col>
          <Container className="container-detail-main2">
            <Greeting greeting="Carrito Vacio" />
            <Row>
              <Col className="pt-4 d-flex justify-content-center col-12">
                <h3>
                  No ha escogido aun ningun producto. Inspeccione nuestro
                  catalogo
                </h3>
              </Col>
              <Col className="pt-4 d-flex justify-content-center">
                <Button size="lg">
                  <Nav.Link as={Link} to="/catalogue">
                    Ver Catalogo
                  </Nav.Link>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  } else {
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
                          <b> Descripcion: </b> <span> {item.description}</span>{" | "}
                          <b> Cantidad: </b> <span>{item.quantity} </span>{" | "}
                          <b> Precio Unitario: </b><span>{item.price} </span>
                        </div>
                        <Badge variant="primary" bg="dark" pill>
                        $ {item.price * item.quantity}
                        </Badge>
                        <Badge
                          variant="primary"
                          bg="danger"
                          pill
                          className="ml-2"
                        >
                          <button
                            className="delete-item"
                            onClick={() => deleteItem(item)}
                          >
                            X
                          </button>
                        </Badge>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
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
      </Fragment>
    );
  }
};

export default Cart;
