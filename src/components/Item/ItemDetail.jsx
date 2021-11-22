import React, {Fragment} from 'react'
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ product }) => {
    return (
        <Fragment>
            <Card >
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemCount stock ={product.stock} inicial={0} />
                </Card.Footer>
                <Card.Footer>
                    <Button className="button-add">
                        Agregar al Carrito
                    </Button>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ItemDetail
