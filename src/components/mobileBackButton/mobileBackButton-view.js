import React from 'react';
import useMobileBackButton from './hooks'
import { OuterWrapper, InnerWrapper, ButtonTab } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const MobileBackButtonView = () => {
    const { history, transformState } = useMobileBackButton()
    const backArrow = <FontAwesomeIcon icon={faAngleLeft} size="lg" />

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

export default MobileBackButtonView;