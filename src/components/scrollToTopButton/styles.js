import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';

export const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0px 23px 25px 0px;
    display: none;
    @media ${device.tablet} {
        display: inline-block;
    }
`;

export const ButtonTab = styled.button`
    text-decoration: none;
    color: white;
    background-color: #282828;
    border: 0px;
    border-radius: 50%;
    padding: 12px 14px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
        background-color: grey;
    }
`;