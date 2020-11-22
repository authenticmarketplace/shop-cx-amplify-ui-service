import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';
import { animate } from '../globals/styles.js';

export const Wrapper = styled.div`
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    height: auto;
    width: 100%;
    position: static;
    margin-top: 0px;
    bottom: 0;
    left: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const InnerView = styled.div`
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
    display: inline-block;
    vertical-align: bottom;
    background-color: #282828;
    width: 100%;
    padding: 20px 0px;
    opacity: 1;
    transition: .5s;
    cursor: pointer;
    margin: 20px 0px 0px 0px;
    border-radius: 12px;
    :hover {
        opacity: 1.0;
        background-color: #707070;
    }
    @media ${device.tablet} {
        width: 75%;
        margin: 20px 0px 0px 0px;
        border-radius: 12px;
    }
`;

export const LeftDiv = styled.div`
    padding-left: 20px;
    display: block;
    float: left;
    h4 {
        display: inline-block;
        margin: 0px;
        padding: 0px;
        color: white;
        padding-right: 6px;
        font-weight: 400;
    }
`;

export const RightDiv = styled(LeftDiv)`
    padding-left: 0px;
    padding-right: 10px;
    float: right;
`;