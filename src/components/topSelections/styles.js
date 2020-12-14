import styled from 'styled-components';
import { device } from '../globals/media-breakpoints.js';

export const ItemWrapper = styled.div`
  width: 100%;
  background-color: #282828;
  padding: 13px 0px 39px 0px;
  border-radius: 7px;
  h3 {
    font-size: 10px;
    text-align: center !important;
  }
  @media ${device.tablet} {
    margin: 30px 0px;
    width: 100%;
    h3 {
      font-size: 17px;
    }
  }
`;

export const ItemDiv = styled.div`
  display: inline-block;
  ${'' /* margin: 5px 16px;  */}
  img {
    display: block;
    width: 90%;
    border-radius: 50%;
  }
  p {
      display: inline-block;
      color: white;
  }
  @media ${device.tablet} {
      img {
      width: 200px;
      border-radius: 50%;
      }
      p {
          display: inline-block;
          color: white;
      }
  }
`;