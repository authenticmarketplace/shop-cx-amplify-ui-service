import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { listProducts } from '../graphql/queries.js';
import HeaderMenu from '../_components/HeaderMenuComponent.js';
import ProductItem from './ProductItemComponent.js';
import ShoppingBag from '../ShoppingBag/index.js';
import DesktopSidebar from '../_components/DesktopSidebar.js';
import styled from 'styled-components';
import { device, adjust } from '../_components/MediaQueries.js';
import { Section, Container, animate } from '../_components/styles.js';
import collage from '../img/collage1.png';

const StyledSection = styled(Section)`
  padding-top: 80px;
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

const SectionNoMargin = styled(Section)`
-webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
margin: 0px;
`;

const Top = styled.div`
 -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
  height: 60vh;
  width: 100%;
  background-image: url(${collage});
  background-position: bottom -100px right;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  div {
    position: absolute;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: white;
    font-family: 'Baloo Tamma 2', sans-serif;
  }
`;

const initialState = {
  products: [],
  error: false,
  isLoading: true
}

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_PRODUCTS":
      return {...state, products: action.products, isLoading: false }
    case 'ERROR':
      return { ...state, error: true }
      default:
      return state
  }
}

const BrowseComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const request_products = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      dispatch({type: 'SET_PRODUCTS', products: JSON.parse(localStorage.allProducts)})
      localStorage.productRequestCount++;
      console.log("Set Products from Local Storage - Product Request Count is: " + localStorage.productRequestCount)
    }
    else {
      try {
        const products = await API.graphql({
          query: listProducts
        })
        console.log("Completed Products Request via API - Products Retrieved @ " + Date.now())
        dispatch({ type: 'SET_PRODUCTS', products: products.data.listProducts.items })
        localStorage.allProducts = JSON.stringify(products.data.listProducts.items)
        localStorage.productRequestCount = 1;
        console.log("Created Product Request Count in Local Storage")
      }
      catch(err) {
        console.log(err);
        dispatch({ type: 'ERROR' })
      }
    }
  }

  useEffect(() => {
    request_products()
  }, [])


    return (
      <React.Fragment>
        <DesktopSidebar hotitems={state.products}/>
        <HeaderMenu link="/" linktext="Menu"/>
        <SectionNoMargin>
            <Top>
            <div>
              <h1>Browse Feed</h1>
            </div>
            </Top>
          </SectionNoMargin>
        {state.isLoading ? <h1>Loading...</h1> : 
        <StyledSection>
          <BrowseContainer>
            <ProductRow>
              {state.products ? state.products.map((item) => {
                  return (
                    <div key={item.productID}>
                      <Link to={{
                          pathname: `/product/${item.productID}`,
                          state: {
                              item,
                              state: state.products
                          }
                      }}>
                        <ProductItem item={item} />
                      </Link>
                    </div>
                  )
              }) : request_products()}
            </ProductRow>
              {/* <div>
                  <h3 style={{backgroundColor: '#282828', display: 'inline-block', padding: '16px 18px', borderRadius: '20px', fontWeight: 'light'}}>End</h3>
              </div> */}
          </BrowseContainer>
          <ShoppingBag mode={'fixed'} />
        </StyledSection>
        }
      </React.Fragment>
    );
}

export default BrowseComponent;