import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';
import { Logo } from '../globals/styles.js';

export const SideBarPanel = styled.div`
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

export const SideBarButtonsSection = styled.div`
    width: 100%;
    border-bottom: 1px solid #1e1e1e;
    padding: 10px 0px;
`;

export const SidebarButton = styled(Link)`
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

export const StyledLogo = styled(Logo)`
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

export const Img = styled.img`
    height: 75px;
`;

export { Logo };