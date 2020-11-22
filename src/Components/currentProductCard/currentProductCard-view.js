import React from 'react';
import { img } from '../../images/index.js';
import { ProductRow, ImgWrapper, Img, ProductContentWrapper, ProductContent } from './styles';

const CurrentProductCardView = (props) => {
    return (
        <ProductRow>
            {props.transitions.map((t) => {
                return (
                <ImgWrapper style={t.props} onClick={props.onSliderClick} key={t.key}>
                    <Img src={props.item.images[t.item]} style={{display:'block'}} alt="product" />
                    <div style={{position: 'relative'}}>
                    <p style={{margin: '0px',padding: '0px', position: 'absolute', bottom: '0', left: '50%', fontSize: '10px', transform: 'translate(-50%, -50%)'}}>Tap for more</p>
                    </div>
                </ImgWrapper>
                )
            })}
            <ProductContentWrapper>
                <ProductContent>
                    <h2>${props.item.price}</h2>
                    <h3>{props.item.name}</h3>
                    <p>{props.item.productCaption}</p>
                    <button onClick={props.addProduct}><img src={img.bag} style={{width: '23%'}} alt="add to bag"/></button>
                </ProductContent>
            </ProductContentWrapper>
        </ProductRow>
    )
}

export default CurrentProductCardView;