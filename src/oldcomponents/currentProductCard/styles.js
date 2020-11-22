import styled from 'styled-components';
import { animated } from 'react-spring';
import { device } from '../globals/media-breakpoints.js';

export const ImgWrapper = styled(animated.div)`
  position: static;
  padding: 0px;
  margin: 0px;
  will-change: transform, opacity;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 300px; 
  height: 100%;
  border-top-left-radius: 12px; 
  border-top-right-radius: 12px;
  @media ${device.mobileM} {
    width: 360px;
  }
  @media ${device.tabletS} {
    width: 450px;
  }
  @media ${device.tablet} {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
    width: 290px;
  }
  @media ${device.laptop} {
    width: 380px;
  }
  @media ${device.laptopL} {
    width: 450px;
  }
`;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: normal;
  }
`;

export const ProductContentWrapper = styled.div`
  margin-top: -3px;
  width: 300px;
  display: inline-block;
  @media ${device.mobileM} {
    width: 360px;
  }
  @media ${device.tabletS} {
    width: 450px;
  }
  @media ${device.tablet} {
    width: auto;
  }
`;

export const ProductContent = styled.div`
    height: 100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px; 
    background-color: #282828;
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12);
    margin: 0px;
    padding: 12px 0px 40px 0px;
    h2 {
        font-weight: 600;
        background-color: white;
        margin-top: 6px;
        display: inline-block;
        padding: 16px 17px;
        border-radius: 40px;
        color: #404040;
        font-size: 16px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12);
    }
    h3 {
        margin: 0px;
    }
    p {
        margin-top: 0px;
        margin-bottom: 23px;
        padding: 0px 25px;
        text-align: center;
        color: white;
        font-size: 14px;
        font-family: 'Lato', sans-serif;
    }
    button {
      background-color: white;
      border: none;
      padding: 5px 0px;
      border-radius: 80px;
      width: auto;
      outline: none;
      cursor: pointer;
      :active {
        transform: scale(0.98);
      }
    }
    @media ${device.tablet} {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 12px;
      padding: 0px;
      width: 300px;
      h2 {
        margin-top: 45px;
        font-size: 14px;
        padding: 14px 11px;
      }
      h3 {
        font-size: 16px;
      }
    }
    @media ${device.laptop} {
      h2 {
        margin-top: 90px;
        padding: 16px 17px;
        font-size: 16px;
      }
      h3 {
        font-size: 18px;
      }
      width: 400px;
    }
    @media ${device.laptopL} {
      h2 {
        margin-top: 120px;
      }
    }
`;