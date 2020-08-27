import React from 'react';
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
        margin-top: 75px;
    }
`;

const HotItem = styled.img`
    height: 60px;
    border-radius: 70px;
    margin: 5px 0px;
    opacity: 0.7;
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
    margin-top: 35px;
`;

const SidebarButton = styled.a`
    display: block;
    color: #505050;
    font-family: 'Lato', sans-serif;
    padding: 17px 0px;
    font-weight: 700;
    font-size: 14px;
    transition: 0.2s;
    
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
    const hotitems = props.hotitems.slice(0, 3);

    return (
        <SideBarPanel>
            <StyledLogo><Img src={img.circlelogo} alt="logo"/></StyledLogo>
            <HotItemSection>
                <h4>Hot Items</h4>
                {hotitems.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={{
                                        pathname: `/product/${item.id}`,
                                        state: {
                                            item
                                        }
                                    }} key={item.id}>
                                <HotItem src={item.image} />
                            </Link>
                        </div>
                    )
                })}
            </HotItemSection>
            <SideBarButtonsSection>
                <SidebarButton>New Releases</SidebarButton>
                <SidebarButton>Pre-Orders</SidebarButton>
                <SidebarButton>Saved Brands</SidebarButton>
            </SideBarButtonsSection>
        </SideBarPanel>
    )
}

export default DesktopSidebar;