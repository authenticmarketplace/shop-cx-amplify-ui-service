import React from 'react';
import { MenuWrapper } from '../globals/styles.js';
import DesktopMenu from './desktopMenu/desktopMenu-view.js';
import MobileMenu from './mobileMenu/mobileMenu-view.js';

const TopNavigationBarView = () => {
    return (
      <MenuWrapper>
        <DesktopMenu />
        <MobileMenu />
      </MenuWrapper>
    )
}

export default TopNavigationBarView;