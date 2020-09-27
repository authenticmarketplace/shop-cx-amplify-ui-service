/* NPM Modules */
import React from 'react';
import {useShoppingCart} from 'use-shopping-cart'
/* App Modules */
import { MenuWrapper } from '../_parts/styles.js';
/* App Components */
import DesktopMenu from './DesktopMenu.js';
import MobileMenu from './MobileMenu.js';

const HeaderMenuComponent = (props) => {
  const displaylogo = props.columnmenu ? 'flex' : 'none';
  const bringToTop = props.columnmenu ? 1 : '';
  const { cartCount } = useShoppingCart()

    return (
      <MenuWrapper>
        <DesktopMenu displaylogo={displaylogo} bringToTop={bringToTop} cartCount={cartCount} />
        <MobileMenu />
      </MenuWrapper>
    )
}

export default HeaderMenuComponent;

{/* <img src={img.bag2} style={{height: '22px'}}/> */}

// {props.linktext}