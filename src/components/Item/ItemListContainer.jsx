import React, { Fragment, useState, useEffect } from "react";
import "./itemListContainer.css";
import { Row, Col, Container, Nav } from "react-bootstrap";
import { Greeting } from "../../components/Greeting/Greeting";
import SpinnerCharge from "../Spinner/SpinnerCharge";
import { ItemList } from "./ItemList";
// import { products } from "./items.js";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const ref = collection(db, "products");
    getDocs(ref)
      .then((snapShot) => {
        const product = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        const filtrar = product.filter((prod) => prod.categoryId === `${id}`);
        id === undefined ? setItems(product) : setItems(filtrar);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return isLoading ? (
    <SpinnerCharge />
  ) : (
    <Fragment>
      <Row>
        <Col>
          <Container className="container-main">
            <Nav fill variant="tabs" defaultActiveKey="/" className="nav-style">
              <Nav.Item>
                <Nav.Link as={Link} to="/catalogue/category/llaveros">
                  Llaveros
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/catalogue/category/muniecos">
                  Muñecos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/catalogue/category/macetas">
                  Macetas
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
            <Row xs={1} md={2} lg={4} className="g-4">
              <ItemList items={items} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ItemListContainer;
