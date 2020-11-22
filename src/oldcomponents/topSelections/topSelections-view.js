import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useTopSelections } from './hooks';
import { settings } from './utils';
import { ItemWrapper, ItemDiv } from './styles';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const TopSelectionsView = () => {
    const { topSelections } = useTopSelections();

    return (
        <ItemWrapper>
          <h2>Top Selections</h2>
          <Slider {...settings}>
            {topSelections.map((item, i) => {
                return (
                <Link key={i} to={{
                                  pathname: `/product/${item.productID}`,
                                  state: {
                                      item
                                  }
                              }}>
                  <ItemDiv>
                      <img src={item.images[0]} style={{display: 'inline-block'}} alt={item.name} />
                  </ItemDiv>
                </Link>
                )
            })}
          </Slider>
        </ItemWrapper>
    )
}

export default TopSelectionsView;