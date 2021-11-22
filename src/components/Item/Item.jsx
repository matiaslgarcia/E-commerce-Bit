import { Fragment, React } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
    return (
        <Fragment>
            <Link to={`/catalogue/item/${product.id}`}>
                <Card >
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            $ {product.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Fragment>
    )
}

