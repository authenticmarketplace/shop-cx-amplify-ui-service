import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { img } from '../img/index.js';
import { device } from '../_components/MediaQueries.js';
import { Section, Container } from '../_components/styles.js';
import HeaderMenu from '../_components/HeaderMenuComponent.js';

const StyledSection = styled(Section)`
  padding-top: 90px;
  margin: 0px;
  @media ${device.tablet} {
    padding-top: 115px;
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
padding-top: 20px;
margin: 0px;
`;

const Img = styled.img`
  width: 300px; 
  height: auto;
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
    font-family: 'Baloo Tamma 2', sans-serif;
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
    }
    button {
      background-color: white;
      border: none;
      padding: 5px 0px;
      border-radius: 80px;
      width: auto;
    }
    @media ${device.tablet} {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 12px;
      padding: 0px;
      width: 300px;
      h2 {
        margin-top: 120px;
      }
    }
    @media ${device.laptop} {
      width: 400px;
    }
`;

const MoreDetailsWrapper = styled.div`
  margin-top: 30px;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around; 
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
  @media ${device.mobileM} {
    width: 360px;
  }
  @media ${device.tablet} {
    width: 450px;
  }
`;

const MoreProducts = styled.div`
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;
  color: white;
  text-align: center;
  width: auto;
  div {
    display: inline-block;
    margin: 0px 20px;
    img {
      width: 100%;
      border-radius: 12px;
    }
    p {
      padding: 10px 0px;
      margin-top: -7px;
      margin-bottom: 15px;
      background-color: #282828;
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
  }
`;

const ProductInfoComponent = (props) => {
    const { item } = props.location.state;
    return (
        <div style={{fontFamily: 'Baloo Tamma 2, sans-serif'}}>
        <HeaderMenu link="/browse" linktext="Browse" columnmenu={true} />
            <StyledSection>
              <Container>
                <ProductRow>
                    <Img src={item.images[0]} alt="product" />
                    <ProductContentWrapper>
                      <ProductContent>
                        <h2>${item.price}</h2>
                        <h3>{item.name}</h3>
                        <p>{item.productCaption}</p>
                        <button><img src={img.bag} style={{width: '23%'}} alt="add to bag"/></button>
                      </ProductContent>
                    </ProductContentWrapper>
                </ProductRow>
              </Container>
            </StyledSection>
            <StyledSection2>
              <ProductContainer>
                <MoreDetailsWrapper>                   
                  <BrandDetails>
                  {/* <span style={{cursor: 'pointer',fontSize: '12px', fontWeight: '500', borderRadius: '16px', border: '1px solid white', padding: '0px 5px'}}>+</span> */}
                    <h3>{item.brand.displayName}</h3>
                    <p><img src={img.tag} style={{width: '13px', height: 'auto'}} alt="tag" /> {item.brand.designation}</p>
                    <p><img src={img.location} style={{width: '13px', height: 'auto'}} alt="location" /> {item.brand.locale}</p>
                    <p>{item.brand.bio}</p>
                  </BrandDetails>                    
                  <MoreProducts>
                    <h4>More Like This</h4>
                    {/* {item.brand.products.map((product, i) => {
                      return (
                        <React.Fragment>
                        <Link to={{
                          pathname: `/product/${product.id}`,
                          state: {
                              item: item
                              }
                          }} key={product.id}>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                          </div>
                        </Link>
                        </React.Fragment>
                      )
                    })} */}
                  </MoreProducts>                  
                </MoreDetailsWrapper>
              </ProductContainer>
            </StyledSection2>
        </div>
    );
}

export default ProductInfoComponent;