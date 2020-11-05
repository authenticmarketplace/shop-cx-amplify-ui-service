/* NPM Modules */
import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
/* App Modules */
import { device } from '../_parts/MediaQueries.js';
/* App Components */

const OuterWrapper = styled.div`
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

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 12px;
    background-color: #505050;
    padding: 20px 0px;
    width: 80%;
    margin: 0px 10% 7px 10%;
`;

const ButtonTab = styled.button`
    text-decoration: none;
    color: white;
    background-color: #505050;
    border: 0px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
`;

const MobileBackButton = (props) => {
    const backArrow = <FontAwesomeIcon icon={faAngleLeft} size="lg" />
    const history = useHistory()
    const [transformState, setTransformState] = useState('translateY(75px)')

    const updateTransform = () =>  {
        if(window.scrollY > 10) {
            setTransformState('translateY(0px)') 
        } else {
            setTransformState('translateY(75px)')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateTransform)
        return () => {
            window.removeEventListener('scroll', updateTransform)
        }
    })

    return (
        <React.Fragment>
            <OuterWrapper t={transformState}>
                <InnerWrapper>
                    <ButtonTab onClick={() => history.goBack()}>{backArrow} Back</ButtonTab>
                </InnerWrapper>
            </OuterWrapper>
        </React.Fragment>
    )
}

export default MobileBackButton;