/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
/* App Modules */
import { device } from '../_parts/MediaQueries.js';
import { img } from '../../img/index.js';
import { Logo } from '../_parts/styles.js';
/* App Components */

const SideBarPanel = styled.div`
    overflow-y: scroll;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 18%;
    background-color: #151515;
    z-index: 1;
    color: white;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }

    h4 {
        text-transform: uppercase;
    }
    @media ${device.tablet} {
        display: block;
    }
`;

const SideBarButtonsSection = styled.div`
    width: 100%;
    border-bottom: 1px solid #1e1e1e;
    padding: 10px 0px;
`;

const SidebarButton = styled(Link)`
    display: block;
    color: #505050;
    font-family: 'Lato', sans-serif;
    padding: 17px 0px;
    font-weight: 700;
    font-size: 14px;
    transition: 0.2s;
    text-decoration: none;
    
    :hover {
        background-color: #404040;
        color: white;
        cursor: pointer;
    }
`;

const StyledLogo = styled(Logo)`
    margin-top: 25px;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: white;
    height: 30px;
    @media ${device.laptopL} {
        margin-top: 45px;
    }
`;

const Img = styled.img`
    height: 75px;
`;

const DesktopSidebarView = (props) => {
    return (
        <SideBarPanel>
            <Link to="/thanksforshopping"><StyledLogo><Img src={img.circlelogo} alt="logo"/></StyledLogo></Link>
            <br />
            <Logo style={{marginTop: '25px', fontSize: '17px'}}>Authentic <br/>Marketplace</Logo>
            <div style={{marginTop: '10px'}}>
            <SideBarButtonsSection>
                <h4 style={{fontSize: '13px'}}>Explore</h4>
                <SidebarButton to="/">Browse</SidebarButton>
                <SidebarButton to="/foryou">For You</SidebarButton>
                <SidebarButton to="/mystore">My Store</SidebarButton>
            </SideBarButtonsSection>
            </div>
            <SideBarButtonsSection>
                <h4 style={{fontSize: '13px'}}>More</h4>
                <SidebarButton>New Releases</SidebarButton>
                <SidebarButton>Favorite Brands</SidebarButton>
                <SidebarButton>Recently Viewed</SidebarButton>
            </SideBarButtonsSection>
            
            {/* <div style={{backgroundColor: '#282828'}}>
                <h3 style={{margin: '0px', padding: '30px 0px', color: '#383838', fontWeight: '300'}}>Help</h3>
            </div> */}
        </SideBarPanel>
    )
}

export default DesktopSidebarView;