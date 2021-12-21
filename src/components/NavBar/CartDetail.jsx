import React, { Fragment } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { useDeleteFromCart } from "../../Context/CartContext";
const CartDetail = ({ item }) => {
  const deleteItem = useDeleteFromCart();

  return (
    <Fragment>
      <div key={item.id}>
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="ms-2 me-auto">
              <img src={item.img} alt={item.img} width="90px" />
              <b> Descripcion: </b> <span> {item.description}</span>
              {" | "}
              <b> Cantidad: </b> <span>{item.quantity} </span>
              {" | "}
              <b> Precio Unitario: </b>
              <span>{item.price} </span>
            </div>
            <Badge variant="primary" bg="dark" pill>
              $ {item.price * item.quantity}
            </Badge>
            <Badge variant="primary" bg="danger" pill className="ml-2">
              <button className="delete-item" onClick={() => deleteItem(item)}>
                X
              </button>
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Fragment>
  );
};

export default CartDetail;
