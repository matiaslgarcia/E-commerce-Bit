import React, { Fragment } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, onAdd, goCart }) => {
  return (
    <Fragment>
      <Card>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {goCart ? (
            <Fragment>
              <Link to="/cart">
                <ButtonGroup className="mb-3 d-flex">
                  <Button className="button-add justify-content">
                    Finalizar Compra
                  </Button>
                </ButtonGroup>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <ItemCount stock={product.stock} inicial={0} onAdd={onAdd} />
            </Fragment>
          )}
          <Fragment>
            <Link to="/catalogue">
              <ButtonGroup className="mb-3 d-flex">
                <Button className="button-add justify-content">
                  Volver al Catalogo
                </Button>
              </ButtonGroup>
            </Link>
          </Fragment>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default ItemDetail;
