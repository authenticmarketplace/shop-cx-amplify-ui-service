import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart'
import { Wrapper, InnerView, LeftDiv, RightDiv } from './styles';

const ReviewOrderBarView = () => {
    const { cartCount } = useShoppingCart()

    return (
        <Wrapper>
            <Link to="/bag">
                <InnerView>
                    <LeftDiv>
                        <h4>Bag</h4>
                        <h4>({cartCount})</h4>
                    </LeftDiv>
                    <RightDiv>
                        <h4>Review Order</h4>
                        <h4>&#62;</h4>
                    </RightDiv>
                </InnerView>
            </Link>
        </Wrapper>
    )
}

export default ReviewOrderBarView;
