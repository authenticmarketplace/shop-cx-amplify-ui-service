import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { byDesignation, byIdentityOrientation, listProducts } from '../graphql/queries.js';
import styled from 'styled-components';
import HeaderMenu from '../HeaderMenu/index.js';
import { Section, Container, animate } from '../_components/styles.js';
import { tempImg } from '../img/index.js';
import ItemRow from './ItemRow.js';
import ShoppingBag from '../ShoppingBag/index.js';
import DesktopSidebar from '../_components/DesktopSidebar.js';
import { device, adjust } from '../_components/MediaQueries.js';

const SectionNoMargin = styled(Section)`
-webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  margin: 0px;
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

const ForYouComponent = () => {
  const [trending, setTrending] = useState([]);
  const [deals, setDeals] = useState([]);

  const getTrending = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      setTrending(JSON.parse(localStorage.byIdentityOrientation))
      localStorage.productRequestCount++;
      console.log("Set Products from Local Storage - Product Request Count is: " + localStorage.productRequestCount)
    }
    else {
      try {
        const productData = await API.graphql({
          query: byIdentityOrientation,
          variables: { identityOrientation: 'Unisex', limit: 8 }
        })
        setTrending(productData.data.byIdentityOrientation.items)
        localStorage.byIdentityOrientation = JSON.stringify(productData.data.byIdentityOrientation.items)
        localStorage.productRequestCount = 1;
      }
      catch(err) {
        console.log(err)
      }
    }
  }

  const getDeals = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      setDeals(JSON.parse(localStorage.byDesignation))
      localStorage.productRequestCount++;
      console.log("Set Products from Local Storage - Product Request Count is: " + localStorage.productRequestCount)
    }
    else {
      try {
        const productData = await API.graphql({
          query: byDesignation,
          variables: { designation: 'Black-owned', limit: 8 }
        })
        console.log(productData)
        setDeals(productData.data.byDesignation.items)
        localStorage.byDesignation = JSON.stringify(productData.data.byDesignation.items)
        localStorage.productRequestCount = 1;
      }
      catch(err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getTrending()
    getDeals()
  }, [])
    return (
        <React.Fragment>
        <DesktopSidebar />
          <HeaderMenu link="/" linktext="Menu" />
          <SectionNoMargin>
            <Top>
            <div />
            </Top>
          </SectionNoMargin>
          <StyledSection>
            <Container100>
            
              <ItemRow title="Trending on Authentic.shop" items={trending} />
              <ItemRow title="This Week's Deals" items={trending} />
              {/* <ItemRow title="This week's deals" items={deals} /> */}
            </Container100>
          <ShoppingBag mode={'fixed'} />
          </StyledSection>
        </React.Fragment>
    );
}

export default ForYouComponent;