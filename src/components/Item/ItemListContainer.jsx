import React, { Fragment, useState, useEffect } from "react";
import './itemListContainer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Greeting } from "../../components/Greeting/Greeting";
import SpinnerCharge from "../Spinner/SpinnerCharge";
import { ItemList } from "./ItemList";
import { products } from './items.js';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const promiseItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
    }

    useEffect(() => {
        setIsLoading(true)
        promiseItems()
            .then((response) => setItems(response))
            .catch((error) => console.log(error))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <Fragment>
            <Row>
                <Col >
                    <Container className="container-main">
                        <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
                        {isLoading ? (<SpinnerCharge />) : (
                            <Row xs={1} md={2} lg={4} className="g-4">
                                <ItemList items={items} />
                            </Row>
                        )}
                    </Container>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ItemListContainer;