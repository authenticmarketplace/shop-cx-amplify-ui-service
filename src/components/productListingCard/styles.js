import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';

export const ProductWrapper = styled.div`
    display: inline-block;
    ${'' /* border-radius: 17px; */}
    ${'' /* border-bottom-left-radius: 17px; */}
    ${'' /* background-color: white; */}
    margin: 10px 10px;
    width: auto;
    ${'' /* box-shadow: 0 1px 1px rgba(0,0,0,0.12),
            0 1px 1px rgba(0,0,0,0.12), 
            0 2px 2px rgba(0,0,0,0.12), 
            0 4px 4px rgba(0,0,0,0.12); */}
    transition: 0.3s;
    @media ${device.mobileM} {
        width: auto;
    }
    @media ${device.tabletS} {
        width: 235px;
    }
    @media ${device.tablet} {
        width: 500px;
    }
    @media ${device.laptop} {
        width: 255px;
    }
    :hover {
        transform: translateY(-10px);
    }
`;

export const ProductImgWrapper = styled.div`
    display: block;
`;

export const ProductImg = styled.img`
    display: block;
    height: auto;
    width: 100%;
    margin: 0px;
    padding: 0px;
    border-radius: 12px;
`;

export const ProductContentWrapper = styled.div`
    ${'' /* margin-top: -3px; */}
    ${'' /* background-color: red; */}
    padding: 10px 30px 10px 30px;
    text-align: left;
    display: block;
    color: white;
    font-family: 'Poppins', sans-serif;
    ${'' /* border: 8px solid #202020; */}
    ${'' /* border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px; */}
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        ${'' /* background-color: white; */}
        margin-top: 6px;
        display: inline-block;
        padding: 2px 13px;
        border-radius: 7px;
        color: #404040;
        font-size: 13px;
        background-color: white;
        ${'' /* box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
            0 2px 2px rgba(0,0,0,0.12), 
            0 4px 4px rgba(0,0,0,0.12); */}
    }
    h3 {
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 0px;

    }
    p {
        margin-top: 0px;
        margin-bottom: 7px;
        color: grey;
    }
`;