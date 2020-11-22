import styled from 'styled-components';
import { Menu, Logo, animate } from '../../globals/styles.js';
import { device } from '../../globals/media-breakpoints.js';

export { Logo };

export const LogoDiv = styled.div`
  display: none;
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

export const DesktopMenu = styled(Menu)`
  display: none;
  padding-bottom: 26px;
  @media ${device.tablet} {
    display: block;
    margin-left: 18%;
    width: 82%;
    z-index: ''
  }
`;