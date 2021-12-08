import { useContext, Fragment } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import { BsFillCartFill } from "react-icons/bs";
import "./cartWidget.css";

export const CartWidget = () => {
  const { itemsCartWidget } = useContext(CartContext);

  return (
    <Fragment>
      <Button className="btn">
        <BsFillCartFill className="img" size="18px" />
      </Button>
      {itemsCartWidget() === 0 ? (
        <span></span>
      ) : (
        <span className="itemCartWidget"> {itemsCartWidget()} </span>
      )}
    </Fragment>
  );
};
