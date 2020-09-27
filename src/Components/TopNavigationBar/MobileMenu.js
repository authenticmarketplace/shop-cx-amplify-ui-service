/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* App Modules */
import { Menu, Logo, animate } from '../_parts/styles.js';
import { device } from '../_parts/MediaQueries.js';
import { img } from '../../img/index.js';
/* App Components */

const MobileMenu = styled(Menu)`
  z-index: 1;
  display: flex;
  justify-content: space-between;
    @media ${device.tablet} {
        display: none;
    }
`;

const ColLeft = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  padding: 0 12px;
  h1 {
    margin-top: 0px;
  }
  img {
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
    height: 25px;
    display: inline-block;
    margin-right: 10px;
  }
`;

const ColRight = styled.div`
  display: inline-block;
  align-self: center;
`;

const StyledLinkMobile = styled(Link)`
  color: white;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  padding-top: 5px;
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
`;

const MobileMenuComponent = (props) => {
    return (
    <React.Fragment>
        <MobileMenu>
            <ColLeft>
                <img src={img.circlelogo} alt="logo"/>
                <Link to="/"><Logo>Authentic.shop</Logo></Link>
            </ColLeft>
            <ColRight>
                <StyledLinkMobile to="/bag" style={{fontWeight: '300'}}>Dylan</StyledLinkMobile>
            </ColRight>
        </MobileMenu>
    </React.Fragment>
    )
}

export default MobileMenuComponent;