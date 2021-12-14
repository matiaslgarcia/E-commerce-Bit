import { Fragment, React } from "react";
import { Item } from "./Item";
import { Col, CardGroup } from 'react-bootstrap';

export const ItemList = ({ items }) => {
    return (
        <Fragment>
            {
                items.map((product) => {
                    return (
                        <Col>
                            <CardGroup>
                                <Item key={product.id} {...product} />
                            </CardGroup>
                        </Col>
                    )
                })
            }
        </Fragment>
    )
}

