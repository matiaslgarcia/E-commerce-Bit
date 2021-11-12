import { Fragment } from "react";
import './itemListContainer.css';
import { Container } from 'react-bootstrap';
import { Greeting } from "../../components/Greeting/Greeting";
import { ItemList } from "../../components/ItemList/ItemList";
import prod1 from './img/prod1.jpg';

const ItemListContainer = () => {
    const products = [
        {
            id: 1,
            img: prod1,
            title: 'Producto 1',
            description: 'Soy unos llaveritos',
            price: 150.0,
        },
        {
            id: 2,
            img: prod1,
            title: 'Producto 2',
            description: 'Soy unos llaveritos',
            price: 150.0,
        },
        {
            id: 3,
            img: prod1,
            title: 'Producto 3',
            description: 'Soy unos llaveritos',
            price: 150.0,
        }
    ]
    const promiseItems = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                    resolve(products)
                }, 2000);
            } else {
                reject('Algo salio mal');
            }
        })
    }
    promiseItems()
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

    return (
        <Fragment>
            <div id="particles-js">
                <Container className="container-main">
                    <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
                    <ItemList items={products} />
                </Container>
            </div>
        </Fragment>
    )
}

export default ItemListContainer;