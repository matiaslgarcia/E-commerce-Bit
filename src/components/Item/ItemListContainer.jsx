import React, { Fragment, useState, useEffect } from "react";
import './itemListContainer.css';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { Greeting } from "../../components/Greeting/Greeting";
import SpinnerCharge from "../Spinner/SpinnerCharge";
import { ItemList } from "./ItemList";
import { products } from './items.js';
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const promiseItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                }, 2000);
            })
        }
        setIsLoading(true)
        promiseItems()
            .then((response) => {
                const filtrar = response.filter((product) => product.categoryId === `${categoryId}`);
                categoryId === undefined ? setItems(response) : setItems(filtrar);
            })
            .catch((error) => console.log())
            .finally(() => {
                setIsLoading(false)
            })
    }, [categoryId])

    return isLoading ? (<SpinnerCharge />) : (
        <Fragment>
            <Row>
                <Col>
                    <Container className="container-main">
                        <Nav fill variant="tabs" defaultActiveKey="/" className="nav-style">
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/catalogue/category/llaveros">Llaveros</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/catalogue/category/muniecos">Muñecos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/catalogue/category/macetas">Macetas</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
                        <Row xs={1} md={2} lg={4} className="g-4" >
                            <ItemList items={items} />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ItemListContainer;