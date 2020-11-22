import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';
import { ProductItem } from './styles';

export default function ShoppingBagItem({ item }) {
    const { removeItem, incrementItem, decrementItem } = useShoppingCart()
    return (
    <ProductItem>
        <div>
            <img src={item.image} alt={item.name}/>
            <button onClick={() => removeItem(item.sku)}>Remove</button>
            <div style={{textAlign: 'center'}}>
                <Link to={`/product/${item.sku}`} style={{color: 'white'}}>
                <h3 style={{
                    display: 'inline-block',
                    padding: '9px 25px', 
                    margin: '0px 0px 20px 0px', 
                    fontSize: '10px', 
                    fontWeight: '700',
                    backgroundColor: '#303030',
                    borderRadius: '14px',
                    textAlign: 'center'}}>View
                </h3>
                </Link>
            </div>
        </div>
        <div>
            <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                fontFamily: 'Poppins',
                textAlign: 'center',
                borderRadius: '15px',
                padding: '8px 8px',
                backgroundColor: '#696969'}}>${item.value}
            </h3>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: '#303030',
                borderRadius: '17px',
                padding: '3px 15px',
                alignSelf: 'baseline'}}>
                <button 
                    onClick={() => decrementItem(item.sku)} 
                    style={{
                        fontSize: '15px',
                        color: 'white',
                        margin: '0px'}}>-
                </button>
                <p style={{
                    fontSize: '12px',
                    padding: '5px 0px',
                    color: 'white',
                    margin: '0px',
                    fontWeight: '700'}}>{item.quantity}
                </p>
                <button 
                    onClick={() => incrementItem(item.sku)}
                    style={{
                        fontSize: '15px',
                        color: 'white',
                        margin: '0px'}}>+
                </button>
            </div>
        </div>
    </ProductItem>
    )
}