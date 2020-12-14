import React from 'react';
import { TopNavigationBar} from '../../components/topNavigationBar/index.js';
import { DesktopSidebar } from '../../components/desktopSidebar';
import { MobileTabBar } from '../../components/mobileTabBar';
import { ContentLibrary } from '../../components/contentLibrary';
import { TopSelections } from '../../components/topSelections'
import { FeaturedItemCard } from '../../components/featuredItemCard';
import { StyledSection, StyledSection2, Container100, ContentWrapper } from './styles';
import { tempImg } from '../../images/index.js';

const DiscoveryView = () => {
    return (
        <React.Fragment>
            <DesktopSidebar />
            <TopNavigationBar />
            <MobileTabBar />
            <StyledSection2>
              <h1>Discovery</h1>
            </StyledSection2>
            <StyledSection>
              <Container100>
                <ContentWrapper>
                    <FeaturedItemCard 
                      heading="For her" 
                      image={tempImg.purse} 
                      title="Curated Holiday Gifts She'll Love" 
                      linkText="See More" 
                      link="#"
                    />
                    <FeaturedItemCard 
                      heading="Trending Items" 
                      image={tempImg.overdoz} 
                      title="New heat for your next order" 
                      linkText="Shop Trending" 
                      link="#"
                    />
                    <FeaturedItemCard 
                      heading="Featured Brand" 
                      image={tempImg.bw00} 
                      title="Places + Faces" 
                      linkText="Discover" 
                      link="#"
                    />
                </ContentWrapper>
                <TopSelections />
                <ContentLibrary />
            </Container100>
            </StyledSection>
        </React.Fragment>
    )
}

export default DiscoveryView;



// <h3>Around the web</h3>
// <AroundTheWeb>
//   <iframe src="https://miilkiina.com/" title="Miilkiina" />
//   <iframe style={{backgroundColor: 'white'}} src="https://paper-journal.com/" title="Paper Journal" />
//   <iframe style={{backgroundColor: 'white'}} src="https://flaunt.com/" title="Flaunt" />
// </AroundTheWeb>