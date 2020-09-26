import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../_components/MediaQueries.js';
import { Link } from 'react-router-dom'
import { img } from '../img/index.js';
import { Logo } from './styles.js';

const SideBarPanel = styled.div`
    overflow-y: scroll;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
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

const HotItemSection = styled.div`
    margin-top: 40px;
    @media ${device.laptopL} {
        margin-top: 40px;
        margin-bottom: 60px;
    }
    h4 {
        margin-top: 0px;
    }
`;

const HotItem = styled.img`
    height: 60px;
    border-radius: 70px;
    margin: 5px 0px;
    opacity: 1.0;
    background-color: white;
    padding: 10px;
    transition: 0.3s;
    :hover {
        opacity: 1.0;
        cursor: pointer;
    }
`;

const SideBarButtonsSection = styled.div`
    width: 100%;
    border-bottom: 1px solid #1e1e1e;
    padding: 25px 0px;
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

const DesktopSidebar = (props) => {
    // const [hotitems, setHotItems] = useState([]);

    // useEffect(() => {
    //     setHotItems(props.hotitems.slice(9, 12))
    // }, [props])

    return (
        <SideBarPanel>
            <StyledLogo><Img src={img.circlelogo} alt="logo"/></StyledLogo>
            <div style={{marginTop: '10px'}}>
            <SideBarButtonsSection>
                <h4 style={{fontSize: '13px'}}>Explore</h4>
                <SidebarButton to="/browse">Browse</SidebarButton>
                <SidebarButton to="/foryou">For You</SidebarButton>
                <SidebarButton to="/mystore">My Store</SidebarButton>
            </SideBarButtonsSection>
            </div>
            <SideBarButtonsSection>
                <h4 style={{fontSize: '13px'}}>More</h4>
                <SidebarButton>New Releases</SidebarButton>
                <SidebarButton>Recently Viewed</SidebarButton>
                <SidebarButton>Favorite Brands</SidebarButton>
            </SideBarButtonsSection>
            {/* <HotItemSection>
            <h4>VIP</h4>
            {hotitems.length > 0 ? 
                <React.Fragment>
                    {hotitems.map((item) => {
                        return (
                            <div data-testid="hotproduct" key={item.productID}>
                                <Link to={{
                                            pathname: `/product/${item.productID}`,
                                            state: {
                                                item
                                            }
                                        }} key={item.productID} data-testid="Hot Item Link">
                                    <HotItem src={item.images[0]} alt="Hot Item" />
                                </Link>
                            </div>
                        )
                    })}
                </React.Fragment> :
                <React.Fragment />
            }
            </HotItemSection> */}
            {/* <div style={{backgroundColor: '#282828'}}>
            <h3 style={{margin: '0px', padding: '30px 0px', color: '#383838', fontWeight: '300'}}>Help</h3>
            </div> */}
        </SideBarPanel>
    )
}

export default DesktopSidebar;