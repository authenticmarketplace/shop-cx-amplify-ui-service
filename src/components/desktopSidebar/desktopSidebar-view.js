import React from 'react';
import { Link } from 'react-router-dom'
import { img } from '../../images/index.js';
import {
    SideBarPanel,
    SideBarButtonsSection,
    SidebarButton,
    StyledLogo,
    Img,
    Logo
} from './styles';

const DesktopSidebarView = () => {
    return (
    <SideBarPanel>
        <Link to="/thanksforshopping">
            <StyledLogo>
                <Img src={img.circlelogo} alt="logo"/>
            </StyledLogo>
        </Link>
        <br />
        <Logo style={{marginTop: '25px', fontSize: '17px'}}>Authentic <br/>Marketplace</Logo>
        <div style={{marginTop: '10px'}}>
        <SideBarButtonsSection>
            <h4 style={{fontSize: '13px'}}>Explore</h4>
            <SidebarButton to="/">Browse</SidebarButton>
            <SidebarButton to="/discovery">Discovery</SidebarButton>
            <SidebarButton to="/mystore">My Store</SidebarButton>
        </SideBarButtonsSection>
        </div>
        <SideBarButtonsSection>
            <h4 style={{fontSize: '13px'}}>More</h4>
            <SidebarButton to="#">Bookmarks</SidebarButton>
            <SidebarButton to="#">New Releases</SidebarButton>
            <SidebarButton to="#">Favorite Brands</SidebarButton>
        </SideBarButtonsSection> 
    </SideBarPanel>
    )
}

export default DesktopSidebarView;