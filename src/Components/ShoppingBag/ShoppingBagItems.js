import React from 'react';
import styled from 'styled-components';
import { useShoppingCart } from 'use-shopping-cart';
import { device } from '../_parts/MediaQueries.js';

const ProductItem = styled.div`
    font-family: 'Lato', sans-serif;
    display: inline-block;
    width: 60%;
    display: flex;
    margin: 10px auto 40px auto;
    justify-content: space-around;
    border-bottom: 1px solid #282828;
    div {
        color: white;
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
                height: 140px;
            }
            h3 {
            text-align: left;
            margin-top: 0px;
            font-size: 12px;
            }
        }
    }
    @media ${device.mobileM} {
        div {
            img {
                height: 165px;
            }
        }
    }
    @media ${device.mobileL} {
        div {
            img {
                height: 200px;
            }
        }
    }
    @media ${device.tablet} {
        div {
            img {
                height: 180px;
            }
        }
    }
    @media ${device.laptop} {
        div {
            img {
                height: 280px;
            }
        }
    }
`;

const BagItem = ({ itemList }) => {
    const { removeItem, incrementItem, decrementItem } = useShoppingCart()

    return (
        <React.Fragment>
            {itemList.map((item) => {
                console.log(item)
            return (
            <ProductItem>
                <div>
                    <img src={item.image} />
                    <button onClick={() => removeItem(item.sku)}>Remove</button>
                    <div style={{textAlign: 'center'}}>
                        <h3 style={{display: 'inline-block', padding: '9px 25px', margin: '0px 0px 20px 0px', fontSize: '10px', fontWeight: '700', backgroundColor: '#303030', borderRadius: '14px', textAlign: 'center'}}>Quick View</h3>
                    </div>
                    {/* <h3 style={{fontFamily: 'Poppins'}}>{item.description}</h3> */}
                </div>
                {/* <div>
                    
                </div> */}
                <div>
                    <h3 style={{fontSize: '14px', fontWeight: '700', fontFamily: 'Poppins', textAlign: 'center', borderRadius: '15px', padding: '8px 8px', backgroundColor: '#696969'}}>${item.value}</h3>
                    <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#303030', borderRadius: '17px', padding: '3px 15px', alignSelf: 'baseline'}}>
                        <button onClick={() => decrementItem(item.sku)} style={{fontSize: '15px', color: 'white', margin: '0px'}}>-</button>
                        <p style={{fontSize: '12px', padding: '5px 0px', color: 'white', margin: '0px', fontWeight: '700'}}>{item.quantity}</p>
                        <button onClick={() => incrementItem(item.sku)} style={{fontSize: '15px', color: 'white', margin: '0px'}}>+</button>
                    </div>
                </div>
            </ProductItem>
                )
            })}
        </React.Fragment>
    )
}

export default BagItem;