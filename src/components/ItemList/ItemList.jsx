import { Fragment, React } from "react";
import { Item } from "../../components/Item/Item";
import { Col, CardGroup } from 'react-bootstrap';

export const ItemList = ({ items }) => {
    return (
        <Fragment>
            {
                items.map((product) => {
                    return (
                        <Col>
                            <CardGroup>
                                <Item key={product.id} product={product} />
                            </CardGroup>
                        </Col>
                    )
                })
            }
        </Fragment>
    )
}

