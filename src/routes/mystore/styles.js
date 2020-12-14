import styled from 'styled-components';
import { Section, Container, animate } from '../../components/globals/styles.js';
import { device } from '../../components/globals/media-breakpoints.js';

export const AccountSection = styled(Section)`
    padding-top: 75px;
    margin: 0px 16px;
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    h2 {
        margin: 0px;
        text-align: left;
        color: white;
        font-family: 'Rubik', sans-serif;
    }
    @media ${device.tablet} {
        margin-left: 18%;
    }
`;

export const OrdersSection = styled(AccountSection)`
    padding-top: 10px;
`;

export const Container100 = styled(Container)`
    width: 95%;
    @media ${device.tablet} {
        margin: 0px 28px;
    }
`;

export const AccountRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    div {
        align-self: center;
        h5 {
            background: #a73737;  /* fallback for old browsers */
            background: #485563;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            display: inline-block;
            border-radius: 50%;
            color: white;
            font-family: 'Rubik', sans-serif;
            font-weight: 700;
            padding: 16px 20px;
            font-size: 17px;
        }
        p {
            color: #D3D3D3;
            font-family: 'Rubik', sans-serif;
            font-weight: 500;
            font-size: 12px;
            margin-bottom: 25px;
            border-radius: 12px;
        }
    }
`;

export const OrdersWrapper = styled.div`
    background-color: #282828;
    padding: 23px 0px 39px 0px;
    border-radius: 7px;
    margin-top: 10px;
    color: white;
    p {
        font-family: 'Rubik', sans-serif;
    }
`;

export const ComingSoonSection = styled(OrdersSection)`
    h4 {
        color: white;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
    }
`;

export const ComingSoonWrapper = styled(OrdersWrapper)`
    background: #4b6cb7; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4b6cb7, #182848); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4b6cb7, #182848); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 150px;
    overflow-y: scroll;
    div {
        font-family: 'Rubik', sans-serif;
        padding: 5px 0px 14px 0px;
        border-bottom: 1px dashed white;
        margin: 0px 24px 6px 24px;
        h5 {
            text-align: left;
            margin: 0px;
        }
        p {
            text-align: left;
            margin: 0px;
            
        }
    }
`;

