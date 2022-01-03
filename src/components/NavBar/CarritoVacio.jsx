import React, { Fragment } from "react";
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import { Greeting } from "../../components/Greeting/Greeting";
import "./index.css";
import { Link } from "react-router-dom";

const CarritoVacio = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CarritoVacio;
