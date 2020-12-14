import styled from 'styled-components';
import { Section, Container, animate } from '../../components/globals/styles.js';
import { device, adjust } from '../../components/globals/media-breakpoints.js';

export const StyledSection = styled(Section)`
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    padding-top: 17px;
    h3 {
        color: white;
        font-family: 'Poppins', sans-serif;
        text-align: left;
    }
    @media ${device.tablet} {
        margin-left: 20%;
        padding-top: 30px;
    }
`;

export const StyledSection2 = styled(StyledSection)`
    background: #24C6DC;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #514A9D, #24C6DC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #514A9D, #24C6DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: #3d7eaa; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3d7eaa, #ffe47a); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3d7eaa, #ffe47a);
    margin: 0px;
    height: 25vh;
    color: white;
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    padding-top: 46px;
    h1 {
        padding-top: 70px;
    }
    @media ${device.tablet} {
        margin-left: 18%;
        height: 30vh;
    }
`;

export const Container100 = styled(Container)`
    width: 100%;
    h2 {
        font-family: 'Rubik', sans-serif;
        text-align: center;
        color: white;
        font-size: 20px;
        margin: 15px 0px;
    }
    @media ${device.tablet} {
        h2 {
            text-align: left;
            padding-left: 50px;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    align-items: center;
    @media ${adjust('645px')} {
        justify-content: space-around;
        flex-direction: row;
    }
    @media ${device.tablet} {
        justify-content: space-around;
        flex-direction: row;
    }
`;