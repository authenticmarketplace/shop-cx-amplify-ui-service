import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { tempImg } from '../../../img/index.js';
import { device, adjust } from '../../_parts/MediaQueries.js';

const Item = styled.div`
  background-image: url(${p => p.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 7px;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
    height: 100%;
    background: #134e5e;
    border-radius: 7px;
`;

const Curated = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <>
            <StyledSlider {...settings}>
                <Item bgImage=''>
                  <h4>Curated 1</h4>
                </Item>
            </StyledSlider>
        </>
    )
}

export default Curated;