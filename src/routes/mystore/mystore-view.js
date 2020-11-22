import React from 'react';
import Slider from "react-slick";
import { settings } from './utils';
import { DesktopSidebar } from '../../components/desktopSidebar';
import { TopNavigationBar } from '../../components/topNavigationBar';
import { MobileTabBar } from '../../components/mobileTabBar';
import { ScrollToTopButton } from '../../components/scrollToTopButton';
import { AccountSection, OrdersSection, Container100, AccountRow, OrdersWrapper, ComingSoonSection, ComingSoonWrapper } from './styles';

const MyStoreView = (props) => {
    return (
        <>
            <DesktopSidebar />
            <TopNavigationBar />
            <MobileTabBar />
            <ScrollToTopButton />
            <AccountSection>
                <Container100>
                    <h2>My Store</h2>
                    <AccountRow>
                        <div>
                            <h5>D</h5>
                        </div>
                        <div>
                            <p>Add Shipping</p>
                            <p>Add Payment</p>
                        </div>
                        <div>
                            <p>Edit Email</p>
                            <p>Edit Phone</p>
                        </div>
                    </AccountRow>
                </Container100>
            </AccountSection>
            <OrdersSection>
                <Container100>
                    <h2>Orders</h2>
                    <OrdersWrapper>
                    {props.orders ? 
                        <Slider {...settings}>  
                        </Slider> 
                    : <p>You haven't placed an order yet.</p>}
                    </OrdersWrapper>
                </Container100>
            </OrdersSection>
            {/* <ComingSoonSection>
                <Container100>
                    <h4>Coming Soon to Authentic Marketplace</h4>
                    <ComingSoonWrapper>
                        <div>
                            <h5>Feature</h5>
                            <p>Personalize your browsing experience with shopping settings</p>
                        </div>
                        <div>
                            <h5>Feature</h5>
                            <p>Personalize your browsing experience with shopping settings</p>
                        </div>
                        <div>
                            <h5>Brand</h5>
                            <p>Some Indie Label - Women's Fashion</p>
                        </div><div>
                            <h5>Brand</h5>
                            <p>Some Indie Brand - Unisex Fashion</p>
                        </div><div>
                            <h5>Brand</h5>
                            <p>Brand Name - Unisex Sportswear</p>
                        </div><div>
                            <h5>Brand</h5>
                            <p>Brand Name - Sustainable Homegoods</p>
                        </div>
                    </ComingSoonWrapper>
                </Container100>
            </ComingSoonSection> */}
        </>
    )
}

export default MyStoreView;