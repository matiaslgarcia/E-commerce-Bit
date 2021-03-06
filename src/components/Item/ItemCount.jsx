import { Fragment, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./itemCount.css";

export const ItemCount = ({ stock, inicial, onAdd }) => {
  // HOOK
  const [number, setNumber] = useState(parseInt(inicial));

  //funciones onClick para cambiar valor al hacer click
  const onClickIncrementar = () => {
    number !== stock && setNumber(number + 1); // manera de hacer un if/else pero diferente con el operador &&
  };
  const onClickDecrementar = () => {
    number !== inicial && setNumber(number - 1); // manera de hacer un if/else pero diferente con el operador &&
  };

  return (
    <Fragment>
      <ButtonGroup className="mb-3">
        <Button onClick={onClickDecrementar} className="button-add">
          -
        </Button>
        <Button className="button-add">{number}</Button>
        <Button onClick={onClickIncrementar} className="button-add">
          +
        </Button>
      </ButtonGroup>
      <ButtonGroup className="mb-3 d-flex">
        <Button
          disabled={number === inicial}
          onClick={() => onAdd(number)}
          className="button-addCart"
        >
          Agregar al Carrito
        </Button>
      </ButtonGroup>
    </Fragment>
  );
};
