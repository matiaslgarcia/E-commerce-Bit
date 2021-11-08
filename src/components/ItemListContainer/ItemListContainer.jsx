import { Fragment } from "react";
import './itemListContainer.css';
import {Container } from 'react-bootstrap';
import {Greeting } from "../../components/Greeting/Greeting";

const ItemListCointainer = (props) =>{
    return(
        <Fragment>
            <div id="particles-js">
                <Container className="container-main">
                    <Greeting greeting="Bienvenidos a mi E-Commerce"> </Greeting>
                </Container>  
            </div>
        </Fragment>
    )
}

export default ItemListCointainer;