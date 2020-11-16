import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { tempImg } from '../../../img/index.js';
import { device, adjust } from '../../_parts/MediaQueries.js';

const Item = styled.div`
  text-align: center;
  height: 100%;
  img {
    height: 180px;
    display: inline-block;
  }
  @media ${device.mobileM} {
    img {
       height: 225px;
    }
  }
  @media ${device.mobileM} {
    img {
       height: 225px;
    }
  }
  @media ${device.tablet} {
    width: 40%;
    margin: 0px;
    img {
       height: 160px;
    }
  }
  @media ${device.laptop} {
    img {
       height: 225px;
    }
  }
  @media ${device.laptopL} {
    img {
       height: 250px;
    }
  }
`;

const StyledSlider = styled(Slider)`
    height: 100%;
    background: #134e5e;
    border-radius: 4px;
`;

const Curated = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
    };
    return (
        <>
            <StyledSlider {...settings}>
                <Item>
                    <h4>Curated 1</h4>
                </Item>
                <Item>
                    <h4>Curated 2</h4>
                </Item>
                <Item>
                    <h4>Curated 3</h4>
                </Item>
            </StyledSlider>
        </>
    )
}

export default Curated;