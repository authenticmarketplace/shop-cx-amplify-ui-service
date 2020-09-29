/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* App Modules */
import { device, adjust } from '../_parts/MediaQueries.js';
import { Section, Container, animate } from '../_parts/styles.js';
import { tempImg } from '../../img/index.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar';
import ProductDetailCard from '../ProductDetails/ProductDetailCard';
import DesktopSidebar from '../DesktopSidebar';
import BottomNavigationBar from '../BottomNavigationBar/index.js';

const StyledSection = styled(Section)`
padding-top: 65px;
-webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
@media ${device.tablet} {
  margin-left: 20%;
  padding-top: 40px;
}
`;

const ProductSection = styled(Section)`
padding-top: 25px;
-webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
@media ${device.tablet} {
  margin-left: 20%;
  padding-top: 40px;
}
`;

const BrowseContainer = styled(Container)`
-webkit-animation: ${animate.fadeIn} 230ms linear;
animation: ${animate.fadeIn} 230ms linear;
h5 {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
}
`;

const ProductRow = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

@media ${adjust('1067px')} {
  justify-content: flex-start;
}
`;

const Top = styled.div`
-webkit-animation: ${animate.fadeIn} 230ms linear;
animation: ${animate.fadeIn} 230ms linear;
height: 40vh;
width: 100%;
background-image: url(${tempImg.collage});
${'' /* background-position: bottom -100px right; */}
background-size: cover;
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
@media ${device.tablet} {
  margin-top: 40px;
  div {
    left: 57.5%;
  }
}
`;

/* Component */
const BrowsePage = (props) => {
    return (
        <React.Fragment>
            <DesktopSidebar />
            <TopNavigationBar />
            <BottomNavigationBar />
            <StyledSection>
                <Top>
                    <div>
                        <h1>Browse</h1>
                    </div>
                </Top>
            </StyledSection>
            {props.isLoading ? <h1>Loading...</h1> : 
            <ProductSection>
                <BrowseContainer>
                    <ProductRow>
                    {props.products ? props.products.map((item) => {
                        return (
                            <div key={item.productID}>
                            <Link to={{
                                pathname: `/product/${item.productID}`,
                                state: {
                                    item,
                                    state: props.products
                                }
                            }}>
                                <ProductDetailCard item={item} />
                            </Link>
                            </div>
                        )
                    }) : props.request_products()}
                    </ProductRow>
                </BrowseContainer>
            </ProductSection>
            }
        </React.Fragment>
    )
}

export default BrowsePage;

// Check: Why are we passing in state to Link??