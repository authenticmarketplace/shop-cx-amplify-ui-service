/* NPM Modules */
import React, { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import styled from 'styled-components';
/* App Modules */
import { Section, Container } from '../_parts/styles.js';
import { device } from '../_parts/MediaQueries.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar/index.js';
import ShoppingBagItems from './ShoppingBagItems.js';

const StyledSection = styled(Section)`
  padding-top: 90px;
  margin: 0px;
  font-family: 'Poppins', sans-serif;
  @media ${device.tablet} {
    padding-top: 115px;
  }
`;

const TestContainer = styled(Container)`
    ${'' /* background-color: blue; */}
    width: 100%;
    text-align: center;
`;

const HeadingDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    div {
        color: white;
        align-self: center;
        h3 {
            color: grey;
        }
    }
  @media ${device.mobileS} {
    div {
        h1 {
            font-size: 20px;
        }
        h3 {
            color: grey;
            font-size: 15px;
        }
    }
  }
`;

const ProductSection = styled(Section)``;

const BagComponent = () => {
   const { cartCount, totalPrice, cartDetails } = useShoppingCart()
   const [itemList, setItemList] = useState([])

   useEffect(() => {
       cartItems()
   }, [cartDetails])

   const cartItems = () => {
        const cart = []
        for (const sku in cartDetails) {
            const cartEntry = cartDetails[sku]
            cart.push(cartEntry)
        }
        setItemList(cart)
    }

    useEffect(() => {
        cartItems()
    }, [])

   return (
        <div>
            <TopNavigationBar columnmenu={true}/>
            <StyledSection>
                <TestContainer>
                    <HeadingDiv>
                        <div>
                            <h1>Shopping Bag</h1> 
                        </div>
                        <div>
                            <h3>{cartCount} Items</h3>
                        </div>
                    </HeadingDiv>
                </TestContainer>
            </StyledSection>
            <ProductSection>
                <TestContainer>
                {itemList.length > 0 ?
                <ShoppingBagItems itemList={itemList}/>
                : <h1>There are no items in your bag</h1>}
                </TestContainer>
            </ProductSection>
        </div>
    )
}

export default BagComponent;