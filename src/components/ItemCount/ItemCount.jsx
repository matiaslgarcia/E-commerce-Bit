import { Fragment, useState } from "react";
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import './itemCount.css';
import prod1 from './img/prod1.jpg';
export const ItemCount = ({stock, inicial}) => {
    // HOOK
    const [number, setNumber] = useState(parseInt(inicial)); 

    //funciones onClick para cambiar valor al hacer click
    const onClickIncrementar = () => {
        number !== stock && setNumber(number + 1); // manera de hacer un if/else pero diferente con el operador && 
    }
    const onClickDecrementar = () => { 
        number !== inicial && setNumber(number - 1); // manera de hacer un if/else pero diferente con el operador &&
    }
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod1} />
                <Card.Body>
                    <Card.Title>Producto Prueba 1</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nobis obcaecati accusantium facere expedita autem voluptates, tempora fugiat blanditiis recusandae vel, laboriosam maiores voluptatibus illo quasi laudantium corrupti tempore numquam.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup className="mb-3">
                        <Button onClick={onClickDecrementar} className="button-add">-</Button>
                        <Button className="button-add" disable>{`${number}`} </Button>
                        <Button onClick={onClickIncrementar} className="button-add">+</Button>
                    </ButtonGroup>
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