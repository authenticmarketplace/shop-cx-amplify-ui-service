import React from 'react';
import styled from 'styled-components';
import { useShoppingCart } from 'use-shopping-cart';
import { device } from '../_components/MediaQueries.js';

const ProductItem = styled.div`
    font-family: 'Lato', sans-serif;
    display: inline-block;
    width: 60%;
    display: flex;
    margin: 10px auto 40px auto;
    justify-content: space-between;
    border-bottom: 1px solid #282828;
    div {
        color: white;
        align-self: center;
        h3 {
            text-align: left;
            margin-top: 0px;
        }
        button {
            outline: none;
            background-color: inherit;
            border: 0px solid red;
            border-radius: 20px;
            color: red;
            padding: 3px 7px;
            font-size: 11px;
            margin-bottom: 12px;
            cursor: pointer;
        }
        img {
            height: 150px;
            border-radius: 17px;
            display: block;
        }
    }
    @media ${device.mobileS} {
        width: 100%;
        div {
            img {
                height: 100px;
            }
            h3 {
            text-align: left;
            margin-top: 0px;
            font-size: 12px;
            }
        }
    }
`;

const BagItem = ({ itemList }) => {
    const { removeItem, } = useShoppingCart()

    return (
        <React.Fragment>
            {itemList.map((item) => {
                console.log(item.description)
            return (
            <ProductItem>
                <div>
                    <img src={item.image} />
                    <button onClick={() => removeItem(item.sku)}>Remove</button>
                </div>
                <div>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>
                </div>
                <div>
                    <h3>${item.value}</h3>
                </div>
            </ProductItem>
                )
            })}
        </React.Fragment>
    )
}

export default BagItem;