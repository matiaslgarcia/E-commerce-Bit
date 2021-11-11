import { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";
import './cartWidget.css'

export const CartWidget = () =>{
    return (
        <Fragment>
            <Button className="btn">
                <BsFillCartFill  className="img" size="18px"/>
            </Button>
        </Fragment>
    )
}