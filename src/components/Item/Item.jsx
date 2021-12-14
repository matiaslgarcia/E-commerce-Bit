import { Fragment, React } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({  price, img, id, description, title }) => {
    return (
        <Fragment>
            <Link to={`/catalogue/item/${id}`}>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Fragment>
    )
}

