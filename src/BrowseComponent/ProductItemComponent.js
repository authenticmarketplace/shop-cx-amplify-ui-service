import React from 'react';
import styled from 'styled-components';
import { device } from '../_components/MediaQueries.js';

/* Product WRAPPER */
const ProductWrapper = styled.div`
    display: inline-block;
    border-radius: 17px;
    border-bottom-left-radius: 17px;
    background-color: white;
    margin: 10px 10px;
    width: auto;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12);
    @media ${device.mobileM} {
        width: auto;
    }
    @media ${device.tabletS} {
        width: 235px;
    }
    @media ${device.tablet} {
        width: 500px;
    }
    @media ${device.laptop} {
        width: 255px;
    }
`;
/* Product IMG WRAPPER */
const ProductImgWrapper = styled.div`
    display: inline-block;
`;
/* Product IMG */
const ProductImg = styled.img`
    height: auto;
    width: 100%;
    margin: 0px;
    padding: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;
/* Product CONTENT WRAPPER */
const ProductContentWrapper = styled.div`
    margin-top: -3px;
    background-color: #202020;
    padding: 10px 30px 50px 30px;
    text-align: left;
    display: block;
    color: white;
    font-family: 'Poppins', sans-serif;
    border: 8px solid #202020;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        background-color: white;
        margin-top: 6px;
        display: inline-block;
        padding: 15px 13px;
        border-radius: 50px;
        color: #404040;
        font-size: 13px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12);
    }
    h3 {
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 0px;

    }
    p {
        margin-top: 0px;
        margin-bottom: 7px;
        color: grey;
    }
`;

const ProductItemComponent = (props) => {
    return (
        <ProductWrapper>
            <ProductImgWrapper>
                <ProductImg src={props.item.images[0]} alt="product"/>
            </ProductImgWrapper>
            <ProductContentWrapper>
                <div style={{display: 'flex'}}>
                    <div>
                        <h2>${props.item.price}</h2>
                    </div>
                    <div style={{paddingLeft: '15px'}}>
                        {props.item.brand ? <h3>{props.item.brand.displayName}</h3> : <React.Fragment/>}
                        <p style={{fontSize: '14px'}}>{props.item.category}</p>
                    </div>
                </div>
            </ProductContentWrapper>
        </ProductWrapper>  
    );
}

export default ProductItemComponent;