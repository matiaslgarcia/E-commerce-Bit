import { Fragment, React } from "react";
import { Item } from "../../components/Item/Item";
import { CardGroup } from 'react-bootstrap';

export const ItemList = ({ items }) => {
    return (
        <Fragment>
            {
                items.map((product) => {
                    return (
                        <CardGroup>
                            <Item key={product.id} product={product}/>  
                        </CardGroup>
                    )
                })
            }
        </Fragment>
    )
}

