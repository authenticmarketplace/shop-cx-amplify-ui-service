import React from 'react';
import { ProductWrapper, ProductImgWrapper, ProductImg, ProductContentWrapper } from './styles';

const ProductDetailCardView = (props) => {
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

export default ProductDetailCardView;