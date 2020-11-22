import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
    ButtonWrapper,
    ButtonTab
} from './styles';

const scrollToTopButtonView = () => {
    const upArrow = <FontAwesomeIcon icon={faArrowUp} size="lg" />

    return (
        <ButtonWrapper>
            <ButtonTab to="/" onClick={() => scroll.scrollToTop()}>{upArrow}</ButtonTab>
        </ButtonWrapper>
    )
}

export default scrollToTopButtonView;