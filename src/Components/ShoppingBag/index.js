/* NPM Modules */
import React, { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
/* App Modules */
/* App Components */
import ShoppingBagView from './ShoppingBagView.js';

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
        <React.Fragment>
            <ShoppingBagView cartCount={cartCount} itemList={itemList} totalPrice={totalPrice} />
        </React.Fragment>
    )
}

export default BagComponent;

// const StyledSection = styled(Section)`
//   padding-top: 90px;
//   margin: 0px;
//   font-family: 'Poppins', sans-serif;
//   @media ${device.tablet} {
//     padding-top: 115px;
//   }
// `;

// const Container100 = styled(Container)`
//     width: 100%;
//     text-align: center;
// `;

// const BagTitleWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     width: 100%;
//     div {
//         color: white;
//         align-self: center;
//         h3 {
//             color: grey;
//         }
//     }
//   @media ${device.mobileS} {
//     div {
//         h1 {
//             font-size: 20px;
//         }
//         h3 {
//             color: grey;
//             font-size: 15px;
//         }
//     }
//   }
// `;

// const ProductSection = styled(Section)``;

{/* <StyledSection>
    <Container100>
        <HeadingDiv>
            <div>
                <h1>Shopping Bag</h1> 
            </div>
            <div>
                <h3>{cartCount} Items</h3>
            </div>
        </HeadingDiv>
    </Container100>
</StyledSection>
<ProductSection>
    <Container100>
    {itemList.length > 0 ?
    <ShoppingBagItems itemList={itemList}/>
    : <h1>There are no items in your bag</h1>}
    </Container100>
</ProductSection> */}
