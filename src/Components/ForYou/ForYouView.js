/* NPM Modules */
import React from 'react';
import styled from 'styled-components';
/* App Modules */
import { Section, Container, animate } from '../_parts/styles.js';
import { device, adjust } from '../_parts/MediaQueries.js';
import { tempImg } from '../../img/index.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar/index.js';
import ContentLibrary from './ContentLibrary/ContentLibrary.js';
import DesktopSidebar from '../DesktopSidebar/';
import BottomNavigationBar from '../BottomNavigationBar/index.js';
import TopSelections from './TopSelections'
import Curated from './Curated/index.js';

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
  padding-top: 17px;
  h3 {
    color: white;
    font-family: 'Poppins', sans-serif;
    text-align: left;
  }
  @media ${device.tablet} {
    margin-left: 20%;
    padding-top: 30px;
  }
`;

const StyledSectionATW = styled(StyledSection)`
  padding-top: 0px;
  @media ${device.tablet} {
    padding-top: 0px;
  }
`;

const StyledSection2 = styled(StyledSection)`
  background: #24C6DC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #514A9D, #24C6DC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #514A9D, #24C6DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: #3d7eaa; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3d7eaa, #ffe47a); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3d7eaa, #ffe47a);
  margin: 0px;
  height: 25vh;
  color: white;
  font-family: 'Rubik', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  padding-top: 46px;
  h1 {
    padding-top: 70px;
  }
  @media ${device.tablet} {
    margin-left: 18%;
    height: 30vh;

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
  h2 {
    font-family: 'Rubik', sans-serif;
    text-align: center;
    color: white;
    font-size: 20px;
    margin: 15px 0px;
  }
  @media ${device.tablet} {
    h2 {
      text-align: left;
      padding-left: 50px;
    }
  }
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
  flex-direction: column;
  @media ${device.tablet} {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const FeaturedBrand = styled.div`
  background-color: #282828;
  width: auto;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  padding: 0px 0px 20px 0px;
  margin-bottom: 20px;
  h4 {
    margin: 12px 19px;
    text-align: center;
    font-size: 15px;
    color: white;
  }
  img {
    height: 180px;
  }
  button {
    background-color: #e1b300;
    border: 0px;
    color: white;
    border-radius: 8px;
    padding: 6px 16px;
    font-weight: 800;
    font-weight: 'Rubik', sans-serif;
  }
  @media ${device.mobileM} {
    img {
       height: 225px;
    }
  }
  @media ${device.mobileM} {
    img {
       height: 225px;
    }
  }
  @media ${device.tablet} {
    width: 40%;
    margin: 0px;
    img {
       height: 160px;
    }
  }
  @media ${device.laptop} {
    img {
       height: 225px;
    }
  }
  @media ${device.laptopL} {
    img {
       height: 250px;
    }
  }
`;

const CuratedSlider = styled.div`
  background-color: #282828;
  width: 100%;
  border-radius: 2px;
  h4 {
    margin: 12px 19px;
    text-align: center;
    font-size: 15px;
    color: white;

  }
  @media ${device.tablet} {
    width: 50%;
  }
`;


const ForYouView = (props) => {
    return (
        <React.Fragment>
            <DesktopSidebar />
            <TopNavigationBar />
            <BottomNavigationBar />
            <StyledSection2>
              <h1>Discovery</h1>
              <Container100>
              </Container100>
            </StyledSection2>
            <StyledSection>
              <Container100>
                <ContentWrapper>
                    <FeaturedBrand>
                      <h4>Featured</h4>
                      <img src={tempImg.bw00} />
                      <div>
                        <p>Places + Faces</p>
                        <button>Discover</button>
                      </div>
                    </FeaturedBrand>
                    <CuratedSlider>
                      <Curated />
                    </CuratedSlider>
                  </ContentWrapper>
                  <TopSelections items={props.trending}/>
                  <ContentLibrary />
              </Container100>
            </StyledSection>
        </React.Fragment>
    )
}

export default ForYouView;



// <h3>Around the web</h3>
// <AroundTheWeb>
//   <iframe src="https://miilkiina.com/" title="Miilkiina" />
//   <iframe style={{backgroundColor: 'white'}} src="https://paper-journal.com/" title="Paper Journal" />
//   <iframe style={{backgroundColor: 'white'}} src="https://flaunt.com/" title="Flaunt" />
// </AroundTheWeb>