import styled from 'styled-components';
import { Menu, Logo, animate } from '../../globals/styles.js';
import { device } from '../../globals/media-breakpoints.js';

export const StyledLogo = styled(Logo)`
    font-size: 13px;
    text-align: center;
`;

export const MobileMenu = styled(Menu)`
    background-color: #1e1e1e;
    padding-top: 10px;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    @media ${device.tablet} {
        display: none;
    }
`;

export const ColLeft = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0px;
    padding: 0px;
    h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    }
    img {
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
    height: 20px;
    display: inline-block;
    margin-right: 10px;
    }
`;

export const ColRight = styled.div`
    display: inline-block;
    align-self: center;
`;