import styled, { keyframes } from 'styled-components';
// import { device } from '../_components/MediaQueries.js';

const slideUp = keyframes`
  0% {
      opacity: 1;
      transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const animate = {
  slideUp,
  fadeIn
}

export const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 17px;
  text-transform: uppercase;
  color: white;
  display: inline-block;
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
`;

export const Section = styled.div`
  margin: 0px 28px;
  text-align: center;
`;

export const Container = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MenuWrapper = styled.div`
  height: 100%;
`;

export const Menu = styled.div`
  width: 100%;
  padding-top: 0px;
  background-color: #151515;
  position: fixed;
  padding-bottom: 10px;
  text-align: right;
`;
