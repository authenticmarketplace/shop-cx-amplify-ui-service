/* NPM Modules */
import React from 'react';
import { useShoppingBag } from './hooks';
import { ShoppingBagList } from '../../components/shoppingBagList';
import { TopNavigationBar } from '../../components/topNavigationBar/index.js';
import { DesktopSidebar } from '../../components/desktopSidebar';
import { MobileBackButton } from '../../components/mobileBackButton';
import Styles from './styles';

const ShoppingBagView = () => {
    const { cartCount, itemList, totalPrice } = useShoppingBag();

    return (
        <React.Fragment>
            <TopNavigationBar />
            <MobileBackButton />
            <DesktopSidebar />
            <Styles.StyledSection>
                <Styles.BagWrapper>
                    <Styles.BagContent>
                        <Styles.BagTitleWrapper>
                            <div>
                                <h1>Your Order</h1>
                                <h3>Review Items</h3>
                            </div>
                        </Styles.BagTitleWrapper>
                        {itemList.length > 0 ?
                        <ShoppingBagList itemList={itemList}/>
                        : <h2>Your order is empty</h2>}
                    </Styles.BagContent>
                    <Styles.OrderContent>
                        <Styles.OrderCard>
                            <h1>Order Summary</h1>
                            <div>
                                <p>Items ({cartCount})</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div>
                                <p>Shipping & Handling</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div style={{margin: '0px 35px', width: 'auto', height: '1px', backgroundColor: 'grey'}}></div>
                            <div>
                                <p>Subtotal</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div>
                                <p>Tax</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <h2>${totalPrice}</h2>
                            </div>
                            <Styles.ButtonsDiv>
                                <button>Enter Shipping</button>
                                <button>Select Payment</button>
                                <button>Place Order</button>
                            </Styles.ButtonsDiv>
                        </Styles.OrderCard>
                    </Styles.OrderContent>
                </Styles.BagWrapper>
            </Styles.StyledSection>
        </React.Fragment>
    )
}

export default ShoppingBagView;