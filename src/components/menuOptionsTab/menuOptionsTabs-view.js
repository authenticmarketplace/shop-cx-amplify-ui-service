import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';
import { img } from '../../images/index.js';
import { Wrapper } from './styles';

const MenuOptionsTab = () => {
    const { cartCount } = useShoppingCart()
    return (
    <>
    <Link to="/bag">
        <Wrapper>
            <div>
                <img src={img.bag2} alt={'Shopping Bag'}/>
                <p>{cartCount}</p>
            </div>
            <div>
                <h5>Dylan</h5>
            </div>
        </Wrapper>
    </Link>
    </>
    )
}

export default MenuOptionsTab;