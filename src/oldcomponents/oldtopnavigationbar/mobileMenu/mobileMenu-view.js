/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import { img } from '../../../images/index.js';
import { MenuOptionsTab } from '../../menuOptionsTab';
import { MobileMenu, ColLeft, ColRight, StyledLogo } from './styles';

const MobileMenuView = (props) => {
    return (
    <>
        <MobileMenu>
            <ColLeft>
                <div>
                  <img style={{paddingTop: '6px'}} src={img.circlelogo} alt="logo"/>
                </div>
                <div>
                  <Link to="/"><StyledLogo>Authentic Marketplace</StyledLogo></Link>
                </div>
            </ColLeft>
            <ColRight>
                <MenuOptionsTab />
            </ColRight>
        </MobileMenu>
    </>
    )
}

export default MobileMenuView;