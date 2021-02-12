import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavigationBar } from '../../components/topNavigationBar';
import { ProductDisplayCard } from '../../components/productDisplayCard';
import { DesktopSidebar } from '../../components/desktopSidebar';
import { MobileTabBar } from '../../components/mobileTabBar/';
import { ScrollToTopButton } from '../../components/scrollToTopButton';
import { WelcomeScreen } from '../../components/welcomeScreen';
import {
  StyledSection,
  ProductSection,
  BrowseContainer,
  ProductRow,
  Top
} from './styles'

const BrowseView = (props) => {

    return (
        <>
        {
            props.welcome && (
                <WelcomeScreen setWelcome={props.setWelcome}/>
            )
        }
        {
            !props.welcome && (
            <>
                <DesktopSidebar />
                <TopNavigationBar />
                <MobileTabBar />
                <ScrollToTopButton />
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
                                        <ProductDisplayCard item={item} />
                                    </Link>
                                    </div>
                                )
                            }) : props.request_products()}
                            </ProductRow>
                        </BrowseContainer>
                    </ProductSection>
                }
            </>
            )
        }
        </>
    )
}

export default BrowseView;