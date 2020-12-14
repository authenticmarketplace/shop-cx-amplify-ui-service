import styled from 'styled-components';
import { device, adjust } from '../../components/globals/media-breakpoints.js';
import { Section, Container, animate } from '../../components/globals/styles.js';
import { tempImg } from '../../images/index.js';

export const StyledSection = styled(Section)`
    padding-top: 55px;
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    @media ${device.tablet} {
        margin-left: 20%;
        padding-top: 40px;
    }
`;

export const ProductSection = styled(Section)`
    padding-top: 25px;
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    @media ${device.tablet} {
        margin-left: 20%;
        padding-top: 40px;
    }
`;

export const BrowseContainer = styled(Container)`
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
    h5 {
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
    }
`;

export const ProductRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media ${adjust('1067px')} {
        justify-content: flex-start;
    }
`;

export const Top = styled.div`
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
    height: 12vh;
    width: 100%;
    background-image: url(${tempImg.collage});
    ${'' /* background-position: bottom -100px right; */}
    background-size: cover;
    border-radius: 12px;
    margin-left: auto;
    margin-right: auto;
    div {
        position: absolute;
        top: 14%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: white;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        h1 {
            -webkit-animation: ${animate.fadeIn} 1230ms linear;
            animation: ${animate.fadeIn} 1230ms linear;
        }
    }
    @media ${device.tablet} {
        margin-top: 40px;
        height: 30vh;
        div {
            left: 57.5%;
            top: 25%;
        }
    }
`;