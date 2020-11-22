import styled from 'styled-components';
import { device, adjust } from '../globals/media-breakpoints.js';

export const FeaturedItemWrapper = styled.div`
    background-color: #282828;
    width: auto;
    border-radius: 4px;
    color: white;
    font-weight: 700;
    padding: 5px 0px 28px 0px;
    margin-bottom: 20px;
    text-align: left;
    h4 {
        margin: 12px 19px;
        font-size: 15px;
        color: white;
        margin-bottom: 18px;
    }
    div {
        padding-left: 20px;
    }
    img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }
    a {
        background-color: transparent;
        color: lightblue;
        border: 0px;
        border-radius: 8px;
        padding: 6px 0px;
        font-weight: 400;
        font-weight: 'Rubik', sans-serif;
        cursor: pointer;
        text-decoration: none;
        font-size: 14px;
        transition: .3s;
        :hover {
            color: white;
        }
    }
    @media ${device.mobileM} {
        img {
            height: 225px;
        }
    }
    @media ${adjust('376px')} {
        width: 320px;
    }
    @media ${adjust('645px')} {
        width: 185px;
        img {
            height: auto;
        }
    }
    @media ${device.tablet} {
        width: 40%;
        margin: 0px 10px;
        img {
            height: auto;
        }
    }
    @media ${device.laptop} {
        img {
            height: 225px;
        }
    }
    @media ${device.laptopL} {
        img {
            height: 250px;
        }
    }
`;