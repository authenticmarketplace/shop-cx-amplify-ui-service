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
    @media ${device.tablet} {
        flex-direction: row;
        margin-left: 22%;
        margin-right: 32px;
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
        }
        h3 {
            color: grey;
            font-size: 15px;
            text-align: left;
        }
    }
  @media ${device.tablet} {
    div {
        color: white;
        align-self: center;
        h1 {
            font-size: 32px;
            margin: 0px;
        }
        h3 {
            color: grey;
            font-size: 19px;
            text-align: left;
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
    h1 {
        padding-left: 35px;
        color: grey;
    }
`;

const ShoppingBagView = (props) => {
    return (
        <React.Fragment>
            <TopNavigationBar />
            <BottomNavigationBar />
            <DesktopSidebar />
            <StyledSection>
                <BagWrapper>
                    <BagContent>
                        <BagTitleWrapper>
                            <div>
                                <h1>Shopping Bag</h1>
                                <h3>Review Order</h3>
                            </div>
                            <div>
                                <h3>{props.cartCount} Items</h3>
                            </div>
                        </BagTitleWrapper>
                        {props.itemList.length > 0 ?
                        <ShoppingBagItems itemList={props.itemList}/>
                        : <h1>There are no items in your bag</h1>}
                    </BagContent>
                    <OrderContent>
                        <OrderCard>
                            <h1>Place Order</h1>
                        </OrderCard>
                    </OrderContent>
                </BagWrapper>
            </StyledSection>
        </React.Fragment>
    )
}

export default ShoppingBagView;