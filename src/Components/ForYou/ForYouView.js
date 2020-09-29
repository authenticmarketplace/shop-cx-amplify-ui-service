/* NPM Modules */
import React from 'react';
import styled from 'styled-components';
/* App Modules */
import { Section, Container, animate } from '../_parts/styles.js';
import { device, adjust } from '../_parts/MediaQueries.js';
import { tempImg } from '../../img/index.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar/index.js';
import ContentItem from './ContentItem.js';
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
  padding-top: 46px;
  h3 {
    color: white;
    font-family: 'Poppins', sans-serif;
    text-align: left;
  }
  @media ${device.tablet} {
    margin-left: 20%;
    padding-top: 60px;
  }
`;

const StyledSectionATW = styled(StyledSection)`
  padding-top: 0px;
  @media ${device.tablet} {
    padding-top: 0px;
  }
`;

const Top = styled.div`
-webkit-animation: ${animate.fadeIn} 230ms linear;
animation: ${animate.fadeIn} 230ms linear;
height: 60vh;
width: 100%;
background-image: url(${tempImg.jhene});
background-position: center center;
background-size: cover;
border-radius: 17px;
border: 5px solid white;
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
@media ${device.tablet} {
  margin-top: 40px;
  div {
    left: 57.5%;
  }
}
`;

const Container100 = styled(Container)`
  width: 100%;
`;

const AroundTheWeb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  iframe {
    border-radius: 12px;
    height: 500px;
    margin: 0px 0px 30px 0px;
    
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${device.tablet} {
    justify-content: space-around;
  }
`;

const ForYouView = (props) => {
    return (
        <React.Fragment>
            <DesktopSidebar />
            <TopNavigationBar />
            <BottomNavigationBar />
            {/* <StyledSection>
                <Top>
                    <div>
                        <h1>For You</h1>
                    </div>
                </Top>
            </StyledSection> */}
            {/* <StyledSection>
              <ContentWrapper>
                <ContentItem title="Trending" items={props.trending} />
                <ContentItem title="This week's deals" items={props.trending} />
              </ContentWrapper>
            </StyledSection> */}
            <StyledSection>
              <Container100>
                <h3>Around the web</h3>
                <AroundTheWeb>
                  <iframe src="https://miilkiina.com/" title="Miilkiina" />
                  <iframe style={{backgroundColor: 'white'}} src="https://paper-journal.com/" title="Paper Journal" />
                  <iframe style={{backgroundColor: 'white'}} src="https://flaunt.com/" title="Flaunt" />
                </AroundTheWeb>
              </Container100>
            </StyledSection>
        </React.Fragment>
    )
}

export default ForYouView;
