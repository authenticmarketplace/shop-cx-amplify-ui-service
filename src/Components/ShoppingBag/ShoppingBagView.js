/* NPM Modules */
import React from 'react';
import styled from 'styled-components';
/* App Modules */
import { Section, Container, animate } from '../_parts/styles.js';
import { device } from '../_parts/MediaQueries.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar/index.js';
import ShoppingBagItems from './ShoppingBagItems.js';
import DesktopSidebar from '../DesktopSidebar/';
import BottomNavigationBar from '../BottomNavigationBar/index.js';
import DesktopSidebarView from '../DesktopSidebar/DesktopSidebarView.js';
import MobileBackButton from '../MobileBackButton/index.js';

const StyledSection = styled(Section)`
  padding-top: 60px;
  margin: 0px;
  font-family: 'Poppins', sans-serif;
  -webkit-animation: ${animate.fadeIn} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.fadeIn} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  @media ${device.tablet} {
    padding-top: 115px;
  }
`;

const BagWrapper = styled(Container)`
    width: 75%;
    display: flex;
    flex-direction: column;
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    @media ${device.mobileS} {
        width: 90%;
    }
    @media ${device.tablet} {
        flex-direction: row;
        margin-left: 22%;
        margin-right: 32px;
        width: 75%;
    }
`;

const BagContent = styled.div`
    width: 100%;
`;

const BagTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    div {
        color: white;
        align-self: center;
        h1 {
            font-size: 20px;
            margin-bottom: 0px;
        }
        h3 {
            color: grey;
            font-size: 15px;
            text-align: left;
            margin-top: 0px;
        }
    }
  @media ${device.tablet} {
    div {
        color: white;
        align-self: center;
        h1 {
            font-size: 25px;
            margin: 0px;
        }
        h3 {
            color: grey;
            font-size: 19px;
            text-align: left;
        }
    }
  }
  @media ${device.laptop} {
    div {
        h1 {
            font-size: 32px;
            margin: 0px;
        }
    }
  }
`;

const OrderContent = styled.div`
    width: 100%;
    text-align: right;
`;

const OrderCard = styled.div`
    display: inline-block;
    width: 80%;
    background-color: #303030;
    border-radius: 12px;
    height: 500px;
    text-align: left;
    padding: 0px 0px 50px 0px;
    h1 {
        padding-left: 35px;
        color: grey;
    }
    p {
        color: white;
    }
    div {
        display: flex;
        justify-content: space-between;
        padding: 0px 40px;
        h2 {
            color: white;
        }
        p {
            margin: 12px;
        }
    }
    @media ${device.mobileS} {
        width: 100%;
        height: auto;
        padding: 0px 0px 20px 0px;
        margin: 0px 0px 30px 0px;
    }
    @media ${device.tablet} {
        width: 80%;
        height: 500px;
        padding: 0px 0px 50px 0px;
        margin: 0px 0px 30px 0px;
    }
`;

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center !important;
    align-items: center;
    button {
        width: 220px;
        display: inline-block;
        background-color: #404040;
        border: none;
        margin: 8px 0px;
        padding: 10px;
        border-radius: 20px;
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 700;
    }
    button:first-child {
        background-color: #585858;
    }
`;

const ShoppingBagView = (props) => {
    return (
        <React.Fragment>
            <TopNavigationBar />
            <MobileBackButton />
            <DesktopSidebar />
            <StyledSection>
                <BagWrapper>
                    <BagContent>
                        <BagTitleWrapper>
                            <div>
                                <h1>Your Order</h1>
                                <h3>Review Items</h3>
                            </div>
                        </BagTitleWrapper>
                        {props.itemList.length > 0 ?
                        <ShoppingBagItems itemList={props.itemList}/>
                        : <h1>There are no items in your bag</h1>}
                    </BagContent>
                    <OrderContent>
                        <OrderCard>
                            <h1>Order Summary</h1>
                            <div>
                                <p>Items ({props.cartCount})</p>
                                <p>${props.totalPrice}</p>
                            </div>
                            <div>
                                <p>Shipping & Handling</p>
                                <p>${props.totalPrice}</p>
                            </div>
                            <div style={{margin: '0px 35px', width: 'auto', height: '1px', backgroundColor: 'grey'}}></div>
                            <div>
                                <p>Subtotal</p>
                                <p>${props.totalPrice}</p>
                            </div>
                            <div>
                                <p>Tax</p>
                                <p>${props.totalPrice}</p>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <h2>${props.totalPrice}</h2>
                            </div>
                            <ButtonsDiv>
                                <button>Enter Shipping</button>
                                <button>Select Payment</button>
                                <button>Place Order</button>
                            </ButtonsDiv>
                        </OrderCard>
                    </OrderContent>
                </BagWrapper>
            </StyledSection>
        </React.Fragment>
    )
}

export default ShoppingBagView;