import React from 'react';
import { ShoppingBagItem } from './shoppingBagItem';

const ShoppingBagList = ({ itemList }) => {
    return (
        <>
        {itemList.map((item, i) => {
            return ( <ShoppingBagItem item={item} key={i} /> )
        })}
        </>
    )
}

export default ShoppingBagList;