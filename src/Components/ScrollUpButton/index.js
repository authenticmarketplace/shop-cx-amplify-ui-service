/* NPM Modules */
/* NPM Modules */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
/* App Modules */
import { device } from '../_parts/MediaQueries.js';
/* App Components */

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0px 23px 25px 0px;
    display: none;
    @media ${device.tablet} {
        display inline-block;
    }
`;

const ButtonTab = styled.button`
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

const ScrollUpButton = () => {
    const upArrow = <FontAwesomeIcon icon={faArrowUp} size="lg" />

    return (
        <ButtonWrapper>
            <ButtonTab to="/" onClick={() => scroll.scrollToTop()}>{upArrow}</ButtonTab>
        </ButtonWrapper>
    )
}

export default ScrollUpButton;