import React from 'react';
import Slider from "react-slick";
import { settings, contentList } from './utils'
import { ContentItemWrapper, BackgroundWrapper, ContentItem } from './styles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ContentLibraryView = () => {
    return (
      <BackgroundWrapper>
        <div>
         <h2>Content you might like</h2>
        </div>
        <Slider {...settings} style={{width: '96%', display: 'inline-block'}}>
          {contentList.map((item, i) => {
            return (
              <ContentItemWrapper key={i}>
                <ContentItem src={item.url} frameBorder="0" allowFullScreen></ContentItem>
                <h3 style={{paddingLeft: '25px'}}>{item.type}</h3>
              </ContentItemWrapper>
            )
          })}
        </Slider>
      </BackgroundWrapper>
    )
}

export default ContentLibraryView;