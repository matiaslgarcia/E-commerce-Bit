import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import SpinnerCharge from "../Spinner/SpinnerCharge";
import { Greeting } from "../../components/Greeting/Greeting";
import ItemDetail from './ItemDetail';
import { products } from './items.js';
import './itemDetailContainer.css';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [goCart, setGoCart] = useState(false);
    const [unProd, setUnProd] = useState({});
   
    const onAdd = (cant) => {
       console.log({ ...unProd, quantify : cant});
       setGoCart(true);
    }
    useEffect(() => {
        const promiseProduct = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                }, 2000);
            })
        }
        setIsLoading(true)
        promiseProduct()
            .then((response) => {
                const producto = response.find(
                    (prod) => prod.id === parseInt(id)
                )
                setUnProd(producto)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])

    return isLoading ? (<SpinnerCharge />) : (
        <Fragment>
            <Row >
                <Col>
                    <Container className="container-detail-main">
                        <Greeting greeting="Detalle del Producto" />
                        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
                            <ItemDetail product={unProd} onAdd={onAdd} goCart={goCart}/>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Fragment>
    )
}
