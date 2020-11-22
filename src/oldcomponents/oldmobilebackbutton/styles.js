import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';

export const OuterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    transform: ${props => props.t};
    transition: 0.2s;
    @media ${device.tablet} {
        display: none;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 12px;
    background-color: #505050;
    padding: 20px 0px;
    width: 80%;
    margin: 0px 10% 7px 10%;
`;

export const ButtonTab = styled.button`
    text-decoration: none;
    color: white;
    background-color: #505050;
    border: 0px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
`;