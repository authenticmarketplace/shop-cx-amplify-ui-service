import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Logo, animate } from '../_components/styles.js';
import { device } from '../_components/MediaQueries.js';
import { img } from '../img/index.js';
import NavButtons from '../_components/NavButtons.js';

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

const StyledLinkDesktop = styled(Link)`
  color: white;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  margin-right: 50px;
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
  background-color: #1e1e1e;
  border-radius: 12px;
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
            <StyledLinkDesktop to="/bag" style={{fontWeight: '300', padding: '10px 13px'}}>
                <img style={{width: '17px'}} src={img.bag2}/>
                <span style={{fontSize: '12px', borderRadius: '20px', backgroundColor: '#2E8B57', padding: '2px 7px'}}>{props.cartCount}</span>
                <span style={{marginLeft: '7px', paddingLeft: '7px', borderLeft: '1px solid white'}}>Dylan</span>
            </StyledLinkDesktop>
          </div>
        </DesktopMenu>
    </React.Fragment>
    )
}

export default DesktopMenuComponent;