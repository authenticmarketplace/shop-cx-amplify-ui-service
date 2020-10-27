/* NPM Modules */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
/* App Modules */
import { img } from '../../img/index.js';
import { device } from '../_parts/MediaQueries.js';
import { Section, Container } from '../_parts/styles.js';
/* App Components */
import TopNavigationBar from '../TopNavigationBar';
import BottomNavigationBar from '../BottomNavigationBar';
import ShoppingBag from '../ShoppingBag/ShoppingBagBar';
import DesktopSidebar from '../DesktopSidebar';

const StyledSection = styled(Section)`
  padding-top: 60px;
  margin: 0px;
  @media ${device.tablet} {
    padding-top: 95px;
    margin-left: 18%;
  }
`;

const ProductContainer = styled(Container)`
  @media ${device.tablet} {
    max-width: 760px;
  }
  @media ${device.laptop} {
    max-width: 1024px;
  }
`;

const StyledSection2 = styled(Section)`
padding-top: 0px;
margin: 0px;
@media ${device.tablet} {
    margin-left: 18%;
  }
`;

const ImgWrapper = styled(animated.div)`
position: static;
  padding: 0px;
  margin: 0px;
  will-change: transform, opacity;
`;

const Img = styled.img`
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

const ProductRow = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: normal;
  }
`;

const ProductContentWrapper = styled.div`
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

const ProductContent = styled.div`
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

const MoreDetailsWrapper = styled.div`
  margin-top: 30px;
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between; 
    margin-top: 35px;
  }
`;

const BrandDetails = styled.div`
  font-family: 'Poppins', sans-serif;
  color: white;
  background-color: #202020;
  padding: 5px 15px;
  width: 235px;
  display: inline-block;
  border-radius: 12px;
  height: fit-content;
  h3 {
    ${'' /* text-decoration: underline; */}
  }
  h4 {
    font-weight: 700;
    margin: 0px;
    margin-bottom: 5px;
    color: white;
  }
  h5 {
    font-weight: 300;
    margin: 0px;
  }
  p {
    font-family: 'Lato', sans-serif;
    text-align: center;
    padding: 0px 5px;
    line-height: 1.4;
  }
  div {
    border: 1px solid #585858;
    border-radius: 50%;
    padding: 16px;
  }
  @media ${device.mobileM} {
    width: 330px;
    div {
      margin: 0px 25px;
      padding: 12px;
    }   
  }
  @media ${device.tablet} {
    width: 450px;
    div {
      margin: 0px 50px;
    }  
  }
  @media ${device.laptop} {
    width: 400px;
    div {
      margin: 0px 50px;
    }  
  }
  @media ${device.laptopL} {
    width: 450px;
    div {
      margin: 0px 50px;
    }  
  }
`;

const MoreProducts = styled.div`
  display: inline-block;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;
  color: white;
  text-align: center;
  width: auto;
  div {
    display: inline-block;
    margin: 0px 20px;
    transition: 0.2s;
    :hover {
      transform: translateY(-5px);
    }
    img {
      width: 100%;
      border-radius: 12px;
    }
    p {
      padding: 10px 0px;
      margin-top: -7px;
      margin-bottom: 15px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      color: white;
      text-decoration: none;
    }
  }
  h4 {
    margin-top: 0px;
  }
  p {
    display: inline-block;
  }
  @media ${device.mobileM} {
    width: auto;
    div {
      margin: 0px 35px;
    }
  }
  @media ${device.tabletS} {
    width: 400px;
  }
  @media ${device.tablet} {
    margin-top: 0px;
    div {
      margin: 0px 10px;
    }
  }
  @media ${device.laptop} {
    div {
      align-items: center;
      img {
        width: 70%
      }
    }
  }
  @media ${device.laptopL} {
    div {
      img {
        width: 100%
      }
    }
  }
`;

const ColumnWrapper = styled.div`
  @media ${device.laptopL} {
    display: inline-block;
  }
`;

const ColumnWrapper2 = styled.div`
  @media ${device.laptopL} {
    display: inline-block;
    width: 50%;
  }
`;

const MoreProducts2 = styled(MoreProducts)`
  display: inline-block;
`;

const MoreByBrand = styled.div`
  color: white;
`;

const ProductDetailsView = (props) => {
  return (
    <div style={{fontFamily: 'Poppins, sans-serif'}}>
      <TopNavigationBar />
      {/* <BottomNavigationBar /> */}
      <DesktopSidebar />
      {props.isLoading ? <h1>Loading...</h1> :
      <React.Fragment> 
        <StyledSection>
          <Container>
          <div style={{textAlign: 'left', marginBottom: '10px'}}>
          </div>
            <ProductRow>
            {props.transitions.map((t) => {
              return (
                <ImgWrapper style={t.props} onClick={props.onSliderClick} key={t.key}>
                  <Img src={props.item.images[t.item]} style={{display:'block'}} alt="product" />
                  <div style={{position: 'relative'}}>
                    <p style={{margin: '0px',padding: '0px', position: 'absolute', bottom: '0', left: '50%', fontSize: '10px', transform: 'translate(-50%, -50%)'}}>Tap for more</p>
                  </div>
                </ImgWrapper>
              )
            })}
              <ProductContentWrapper>
                <ProductContent>
                  <h2>${props.item.price}</h2>
                  <h3>{props.item.name}</h3>
                  <p>{props.item.productCaption}</p>
                  <button onClick={props.addProductToBag}><img src={img.bag} style={{width: '23%'}} alt="add to bag"/></button>
                </ProductContent>
              </ProductContentWrapper>
            </ProductRow>
            <ShoppingBag mode={'static'}/>
          </Container>
        </StyledSection>
        <StyledSection2>
          <ProductContainer>
            <MoreDetailsWrapper>
            <ColumnWrapper2>             
              <BrandDetails>
              {/* <span style={{cursor: 'pointer',fontSize: '12px', fontWeight: '500', borderRadius: '16px', border: '1px solid white', padding: '0px 5px'}}>+</span> */}
                <h3>{props.item.brand.displayName}</h3>
                <div>
                  <h4>{props.item.brand.designation}</h4>
                  <h5>Ships from {props.item.brand.locale}</h5>
                </div>
                <p>{props.item.brand.bio}</p>
              </BrandDetails>
              <MoreProducts>
                  <h4>Other products from {props.item.brand.brandID}</h4>
                  {props.moreByBrand.map((product) => {
                  return (
                    <React.Fragment key={product.productID}>
                    <Link to={{
                      pathname: `/product/${product.productID}`,
                      state: {
                          item: product
                          }
                      }} onClick={() => props.dispatch({ type: 'SET_ITEM', item: product })} style={{textDecoration: 'none'}} key={product.productID}>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={product.images[0]} alt={product.name} />
                        <p style={{textDecoration: 'none'}}>{product.name} <br/> <span style={{fontWeight: '600'}}>{product.brand.displayName}</span></p>
                      </div>
                    </Link>
                    </React.Fragment>
                  )
                })}
              </MoreProducts>               
            </ColumnWrapper2>
            <ColumnWrapper>      
              <MoreProducts>
                <h4>Similar Items</h4>
                {props.more_products.map((product) => {
                  return (
                    <React.Fragment key={product.productID}>
                    <Link to={{
                      pathname: `/product/${product.productID}`,
                      state: {
                          item: product
                          }
                      }} onClick={() => {
                        return props.dispatch({ type: 'SET_ITEM', item: product });
                      }} style={{textDecoration: 'none'}} key={product.productID}>
                        <div style={{display: 'flex', flexDirection: 'column', }}>
                          <img src={product.images[0]} alt={product.name} />
                          <p style={{textDecoration: 'none'}}>{product.name} <br/> <span style={{fontWeight: '600'}}>{product.brand.displayName}</span></p>
                        </div>
                    </Link>
                    </React.Fragment>
                  )
                })}
              </MoreProducts>
            </ColumnWrapper>                
            </MoreDetailsWrapper>
          </ProductContainer>
        </StyledSection2>
      </React.Fragment>
      }
      </div>
  )
}

export default ProductDetailsView;