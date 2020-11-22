import React from 'react';
import { goToTop } from './utils'
import {
    OuterWrapper,
    InnerWrapper,
    ButtonTab
} from './styles';

const MobileTabBarView = () => {
    return (
        <>
            <OuterWrapper>
                <InnerWrapper>
                    <ButtonTab to="/" onClick={(e) => goToTop(e)}>Browse</ButtonTab>
                    <ButtonTab to="/discovery" onClick={(e) => goToTop(e)}>Discovery</ButtonTab>
                    <ButtonTab to="mystore" onClick={(e) => goToTop(e)}>My Store</ButtonTab>
                </InnerWrapper>
            </OuterWrapper>
        </>
    )
}

export default MobileTabBarView;