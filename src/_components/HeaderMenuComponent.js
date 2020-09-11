import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, MenuWrapper, Logo, animate } from './styles.js';
import { device } from './MediaQueries.js';
import { img } from '../img/index.js';

const DesktopMenu = styled(Menu)`
  display: none;
  padding-bottom: 26px;
  @media ${device.tablet} {
    display: block;
    z-index: ${props => props.bringToTop}
  }
`;

const MobileMenu = styled(Menu)`
  z-index: 1;
  display: flex;
  justify-content: space-around;
  @media ${device.tablet} {
        display: none;
    }
`;

const ColLeft = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  h1 {
    margin-top: 0px;
  }
  img {
    -webkit-animation: ${animate.fadeIn} 230ms linear;
    animation: ${animate.fadeIn} 230ms linear;
  }
`;

const ColRight = styled.div`
  display: inline-block;
  align-self: center;
`;

const StyledLinkDesktop = styled(Link)`
  color: white;
  ${'' /* text-transform: uppercase; */}
  font-weight: 800;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  margin-right: 80px;
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
`;

const StyledLinkMobile = styled(Link)`
  color: white;
  ${'' /* text-transform: uppercase; */}
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  padding-top: 5px;
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
`;

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

const HeaderMenuComponent = (props) => {
  const displaylogo = props.columnmenu ? 'flex' : 'none';
  const bringToTop = props.columnmenu ? 1 : '';
    return (
    <MenuWrapper>
        <MobileMenu>
          <ColLeft>
            <img style={{height: '25px', display: 'inline-block', marginRight: '10px'}} src={img.circlelogo} alt="logo"/>
            <Link to="/"><Logo>Authentic.shop</Logo></Link>
          </ColLeft>
          <ColRight>
            <StyledLinkMobile to={props.link}>{props.linktext}</StyledLinkMobile>
          </ColRight>
        </MobileMenu>
        <DesktopMenu bringToTop={bringToTop}>
          <LogoDiv displaylogo={displaylogo}>
            <img style={{height: '25px', display: 'inline-block', marginRight: '10px'}} src={img.circlelogo} alt="logo"/>
            <Link to="/"><Logo>Authentic.shop</Logo></Link>
          </LogoDiv>
          <StyledLinkDesktop to={props.link}>{props.linktext}</StyledLinkDesktop>
        </DesktopMenu>
    </MenuWrapper>
    )
}

export default HeaderMenuComponent;