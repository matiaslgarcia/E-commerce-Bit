import React, { Fragment, useState } from "react";
import './itemListContainer.css';
import { Row, Container } from 'react-bootstrap';
import { Greeting } from "../../components/Greeting/Greeting";
import { ItemList } from "../../components/ItemList/ItemList";
import { products } from './items.js';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const promiseItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
    }
    promiseItems()
        .then((response) => setItems(response))
        .catch((error) => console.log(error))

    return (
        <Fragment>
            <div id="particles-js">
                <Container className="container-main">
                    <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <ItemList items={items} />
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default ItemListContainer;