import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';

export const ContentItemWrapper = styled.div`
    margin: 0px 0px;
    h3 {
    font-size: 14px;
    }
    @media ${device.tablet} {
    margin: 0px 20px;
    }
`;

export const BackgroundWrapper = styled.div`
    margin-top: 20px;
    background-color: #282828;
    padding: 13px 12px 15px 12px;
    border-radius: 7px;
    margin-bottom: 75px;
`;

export const ContentItem = styled.iframe`
    width: 100%;
    height: 150px;
    border-radius: 20px;
    @media ${device.mobileM} {
        height: 175px;
    }
    @media ${device.mobileL} {
        height: 190px;
    }
    @media ${device.tablet} {
        width: 90%;
        height: 215px;
        border-radius: 20px;
    }
`;