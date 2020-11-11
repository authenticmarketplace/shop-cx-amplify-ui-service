import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section, Container, animate } from '../../_parts/styles.js';
import { device, adjust } from '../../_parts/MediaQueries.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ItemWrapper = styled.div`
  width: 35%;
  h3 {
    font-size: 10px;
    text-align: center !important;
  }
  @media ${device.tablet} {
    width: 100%;
    h3 {
      font-size: 17px;
    }
  }
`;

const ItemDiv = styled.div`
  display: inline-block;
  ${'' /* margin: 5px 16px;  */}
  img {
    display: block;
    width: 100%;
    border-radius: 12px;
  }
  p {
      display: inline-block;
      color: white;
  }
  @media ${device.tablet} {
      img {
      width: 200px;
      border-radius: 50%;
      }
      p {
          display: inline-block;
          color: white;
      }
  }
`;

const TopSelections = (props) => {
    const settings = {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <ItemWrapper>
        <h2>Top Selections</h2>
        <Slider {...settings}>
        {props.items.map((item, i) => {
            return (
            <ItemDiv>
                <img src={item.images[0]} style={{display: 'inline-block'}}/>
                <div>
                    <p style={{paddingRight: '10px'}}>${item.price}</p>
                    <p>{item.brand.displayName}</p>
                </div>
            </ItemDiv>
            )
        })}
        </Slider>
        </ItemWrapper>
    )
}

export default TopSelections;