/* NPM Modules */
import React from 'react';
import styled from 'styled-components';
/* App Modules */
import { Section, Container, animate } from '../_parts/styles.js';
import { device, adjust } from '../_parts/MediaQueries.js';
import { tempImg } from '../../img/index.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar/index.js';
import ItemRow from './ItemRow.js';
import ShoppingBag from '../ShoppingBag/ShoppingBagBar.js';
import DesktopSidebar from '../DesktopSidebar/';
import BottomNavigationBar from '../BottomNavigationBar/index.js';

const ImgWrapper = styled(Section)`
  -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-size: 15px;
    padding-top: 0px;
    margin-top: 0px;
  }
  @media ${device.tablet} {
      margin-left: 20%;
      margin-right: 30px;
      padding-top: 60px;
      text-align: left;
    }
`;

const StyledSection = styled(Section)`
  -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  @media ${device.tablet} {
    margin-left: 20%;
  }
`;

const Top = styled.div`
 -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
  height: 90vh;
  width: 100%;
  background-image: url(${tempImg.jhene});
  background-position: bottom -100px center;
  border-radius: 17px;
  div {
    position: absolute;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: white;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
  }
`;

const Container100 = styled(Container)`
  width: 100%;
  
`;

const ForYouView = (props) => {
    return (
        <React.Fragment>
            <DesktopSidebar />
            <TopNavigationBar />
            <BottomNavigationBar />
            <ImgWrapper>
                <Top>
                <div />
                </Top>
            </ImgWrapper>
            <StyledSection>
                <Container100>
                  <ItemRow title="Trending on Authentic.shop" items={props.trending} />
                  <ItemRow title="This Week's Deals" items={props.trending} />
                  {/* <ItemRow title="This week's deals" items={deals} /> */}
                </Container100>
            </StyledSection>
        </React.Fragment>
    )
}

export default ForYouView;