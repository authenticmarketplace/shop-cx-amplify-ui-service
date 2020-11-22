import styled from 'styled-components';
import { device } from '../../globals/media-breakpoints.js';

export const ProductItem = styled.div`
    font-family: 'Lato', sans-serif;
    display: inline-block;
    width: 60%;
    display: flex;
    margin: 10px auto 40px auto;
    justify-content: space-around;
    border-bottom: 1px solid #282828;
    div {
        color: white;
        h3 {
            text-align: left;
            margin-top: 0px;
        }
        button {
            outline: none;
            background-color: inherit;
            border: 0px solid red;
            border-radius: 20px;
            color: red;
            padding: 3px 7px;
            font-size: 11px;
            margin-bottom: 12px;
            cursor: pointer;
        }
        img {
            height: 150px;
            border-radius: 17px;
            display: block;
        }
    }
    @media ${device.mobileS} {
        width: 100%;
        div {
            img {
                height: 140px;
            }
            h3 {
            text-align: left;
            margin-top: 0px;
            font-size: 12px;
            }
        }
    }
    @media ${device.mobileM} {
        div {
            img {
                height: 165px;
            }
        }
    }
    @media ${device.mobileL} {
        div {
            img {
                height: 200px;
            }
        }
    }
    @media ${device.tablet} {
        div {
            img {
                height: 180px;
            }
        }
    }
    @media ${device.laptop} {
        div {
            img {
                height: 280px;
            }
        }
    }
`;