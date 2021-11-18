import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import SpinnerCharge from "../Spinner/SpinnerCharge";
import { Greeting } from "../../components/Greeting/Greeting";
import ItemDetail from './ItemDetail';
import './itemDetailContainer.css';

export const ItemDetailContainer = () => {

    const product = {
        id: 1,
        img: 'img/prod1.jpg',
        title: 'Llavero Cheto',
        description: 'Soy unos llaveritos',
        price: 150.0,
    }
    const [isLoading, setIsLoading] = useState(true)
    const [unProd, setUnProd] = useState([]);

    const promiseProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            }, 2000);
        })
    }

    useEffect(() => {
        setIsLoading(true)
        promiseProduct()
            .then((response) => setUnProd(response))
            .catch((error) => console.log(error))
            .finally(() => {
                setIsLoading(false)
            })
            // eslint-disable-next-line
    }, [])
    
    return (
        <Fragment>
            <Row >
                <Col>
                    <Container className="container-detail-main">
                        <Greeting greeting="Detalle del Producto" />
                        {isLoading ? (<SpinnerCharge />) : (
                            <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
                                <ItemDetail product={unProd} />
                            </Row>
                        )}
                    </Container>
                </Col>
            </Row>
        </Fragment>
    )
}
