/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* App Modules */
import { Menu, Logo, animate } from '../_parts/styles.js';
import { device } from '../_parts/MediaQueries.js';
import { img } from '../../img/index.js';
/* App Components */
import NavButtons from './NavButtons.js';
import OptionsTab from './OptionsTab.js';

const LogoDiv = styled.div`
  display: ${props => props.displaylogo};
  align-items: flex-start;
  margin-top: 26px;
  margin-left: 80px;
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
  h1 {
    margin: 0px;
  }
  float: left;
`;

const DesktopMenu = styled(Menu)`
  display: none;
  padding-bottom: 26px;
  @media ${device.tablet} {
    display: block;
    margin-left: 18%;
    width: 82%;
    z-index: ${props => props.bringToTop}
  }
`;



const DesktopMenuComponent = (props) => {
    return (
    <React.Fragment>
        <DesktopMenu bringToTop={props.bringToTop}>
          {/* <LogoDiv displaylogo={props.displaylogo}>
            <img style={{height: '25px', display: 'inline-block', marginRight: '10px'}} src={img.circlelogo} alt="logo"/>
            <Link to="/"><Logo>Authentic.shop</Logo></Link>
          </LogoDiv> */}
          <div style={{marginTop: '20px'}}>
            <NavButtons />
            <OptionsTab />
          </div>
        </DesktopMenu>
    </React.Fragment>
    )
}

export default DesktopMenuComponent;