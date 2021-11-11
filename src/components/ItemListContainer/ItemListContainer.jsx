import { Fragment } from "react";
import './itemListContainer.css';
import {Container } from 'react-bootstrap';
import {Greeting } from "../../components/Greeting/Greeting";
import {ItemCount } from "../../components/ItemCount/ItemCount";
const ItemListContainer = (props) =>{
    return(
        <Fragment>
            <div id="particles-js">
                <Container className="container-main">
                    <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
                    <ItemCount stock={5} inicial={0} />
                </Container>  
            </div>
        </Fragment>
    )
}

export default ItemListContainer;