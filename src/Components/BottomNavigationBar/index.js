/* NPM Modules */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* App Modules */
import { device } from '../_parts/MediaQueries.js';
/* App Components */

const OuterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    @media ${device.tablet} {
        display: none;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 12px;
    background-color: #282828;
    padding: 20px 0px;
    width: 80%;
    margin: 0px 10% 7px 10%;
`;

const ButtonTab = styled(Link)`
    text-decoration: none;
    color: grey;
    background-color: #282828;
    border: 0px;
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
`;

const BottomNavigationBar = () => {
    return (
        <React.Fragment>
            <OuterWrapper>
                <InnerWrapper>
                    <ButtonTab to="/">Browse</ButtonTab>
                    <ButtonTab to="/foryou">For You</ButtonTab>
                    <ButtonTab to="mystore">My Store</ButtonTab>
                </InnerWrapper>
            </OuterWrapper>
        </React.Fragment>
    )
}

export default BottomNavigationBar;