import React, { Fragment } from "react";
import { Row, Col, Container, ListGroup, InputGroup } from "react-bootstrap";
import "./index.css";

const Ticket = ({ ord }) => {
  const productName = ord.items.map((i) => i.title);
  return (
    <Fragment>
      <Container className="container-detail-orden2">
        <Row className="m-2 ">
          <Col className="p-2">
            <ListGroup>
              <InputGroup>
                <InputGroup.Text>
                  <b>ID Compra:</b>{" "}
                </InputGroup.Text>
                <ListGroup.Item>{ord.id}</ListGroup.Item>
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>
                  <b>Fecha de Compra:</b>
                </InputGroup.Text>
                <ListGroup.Item>{ord.date}</ListGroup.Item>
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>
                  <b>Nombre del Producto:</b>
                </InputGroup.Text>
                <ListGroup.Item> {productName}</ListGroup.Item>
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>
                  <b>Email:</b>
                </InputGroup.Text>
                <ListGroup.Item>{ord.buyer.email}</ListGroup.Item>
              </InputGroup>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Ticket;
