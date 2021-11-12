import { Fragment ,React} from "react";
import { Card, Button } from 'react-bootstrap';
import { ItemCount} from "../../components/ItemCount/ItemCount";

export const Item = ({product}) => {
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imag} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                        {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemCount stock={5} inicial={0} />
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

