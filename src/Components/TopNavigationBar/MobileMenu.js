/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* App Modules */
import { Menu, Logo, animate } from '../_parts/styles.js';
import { device } from '../_parts/MediaQueries.js';
import { img } from '../../img/index.js';
/* App Components */
import OptionsTab from './OptionsTab.js';

const StyledLogo = styled(Logo)`
  font-size: 13px;
  text-align: center;
`;

const MobileMenu = styled(Menu)`
  background-color: #1e1e1e;
  padding-top: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-around;
    @media ${device.tablet} {
        display: none;
    }
`;

const ColLeft = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  padding: 0px;
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  img {
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
    height: 20px;
    display: inline-block;
    margin-right: 10px;
  }
`;

const ColRight = styled.div`
  display: inline-block;
  align-self: center;
`;

const MobileMenuComponent = (props) => {
    return (
    <React.Fragment>
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
                <OptionsTab />
            </ColRight>
        </MobileMenu>
    </React.Fragment>
    )
}

export default MobileMenuComponent;