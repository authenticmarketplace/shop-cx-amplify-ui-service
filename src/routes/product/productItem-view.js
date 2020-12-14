import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentProductCard } from '../../components/currentProductCard';
import { TopNavigationBar } from '../../components/topNavigationBar';
import { ReviewOrderBar } from '../../components/reviewOrderBar';
import { DesktopSidebar } from '../../components/desktopSidebar';
import { MobileBackButton } from '../../components/mobileBackButton';
import { ScrollToTopButton } from '../../components/scrollToTopButton';
import NotificationSpring from '../../components/bagConfirmationSpring';
import Styles from './styles';

const ProductItemView = (props) => {
  return (
    <div style={{fontFamily: 'Poppins, sans-serif'}}>
      <TopNavigationBar />
      <MobileBackButton />
      <DesktopSidebar />
      <ScrollToTopButton />
      <NotificationSpring children={add => (props.aref.current = add)} />
      {props.isLoading ? <h1>Loading...</h1> :
      <> 
        <Styles.StyledSection>
          <Styles.Container>
            <div style={{textAlign: 'left', marginBottom: '10px'}}>
              <CurrentProductCard 
                transitions={props.transitions}
                item={props.item}
                addProduct={props.addProduct}
                onSliderClick={props.onSliderClick} />
            </div>
            <ReviewOrderBar />
          </Styles.Container>
        </Styles.StyledSection>
        <Styles.StyledSection2>
          <Styles.ProductContainer>
            <Styles.MoreDetailsWrapper>
            <Styles.ColumnWrapper2>             
              <Styles.BrandDetails>
              {/* <span style={{cursor: 'pointer',fontSize: '12px', fontWeight: '500', borderRadius: '16px', border: '1px solid white', padding: '0px 5px'}}>+</span> */}
                <h3>{props.item.brand.displayName}</h3>
                <div>
                  <h4>{props.item.brand.designation}</h4>
                  <h5>Ships from {props.item.brand.locale}</h5>
                </div>
                <p>{props.item.brand.bio}</p>
              </Styles.BrandDetails>
              <Styles.MoreProducts>
                  <h4>Other products from {props.item.brand.brandID}</h4>
                  {props.moreByBrand.map((product) => {
                  return (
                    <React.Fragment key={product.productID}>
                    <Link to={{
                      pathname: `/product/${product.productID}`,
                      state: {
                          item: product
                          }
                      }} onClick={() => props.dispatch({ type: 'SET_ITEM', item: product })} style={{textDecoration: 'none'}}>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={product.images[0]} alt={product.name} />
                        <p style={{textDecoration: 'none'}}>{product.name} <br/> <span style={{fontWeight: '600'}}>{product.brand.displayName}</span></p>
                      </div>
                    </Link>
                    </React.Fragment>
                  )
                })}
              </Styles.MoreProducts>               
            </Styles.ColumnWrapper2>
            <Styles.ColumnWrapper>      
              <Styles.MoreProducts>
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
                      }} style={{textDecoration: 'none'}}>
                        <div style={{display: 'flex', flexDirection: 'column' }}>
                          <img src={product.images[0]} alt={product.name} />
                          <p style={{textDecoration: 'none'}}>{product.name} <br/> <span style={{fontWeight: '600'}}>{product.brand.displayName}</span></p>
                        </div>
                    </Link>
                    </React.Fragment>
                  )
                })}
              </Styles.MoreProducts>
            </Styles.ColumnWrapper>                
            </Styles.MoreDetailsWrapper>
          </Styles.ProductContainer>
        </Styles.StyledSection2>
      </>
      }
      </div>
  )
}

export default ProductItemView;