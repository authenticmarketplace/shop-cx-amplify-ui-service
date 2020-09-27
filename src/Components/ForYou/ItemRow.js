import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Section, Container, animate } from '../_parts/styles.js';
import { device, adjust } from '../_parts/MediaQueries.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SectionNoMargin = styled(Section)`
    margin: 0px;
`;

const Container100 = styled(Container)`
  width: 100%;
  text-align: initial;
  h3 {
    textAlign: left;
    color: white;
    fontFamily: 'Poppins', sans-serif;
    fontWeight: 800;
    -webkit-animation: ${animate.fadeIn} 430ms linear;
    animation: ${animate.fadeIn} 430ms linear;
  }
`;

const ItemDiv = styled.div`
    ${'' /* display: flex;
    flex-direction: column; */}
    display: inline-block;
    margin: 5px 16px; 
    img {
        width: 160px;
        border-radius: 12px;
    }
    p {
        display: inline-block;
        color: white;
    }
    @media ${device.tablet} {
        img {
        width: 200px;
        border-radius: 12px;
        }
        p {
            display: inline-block;
            color: white;
        }
    }
`;

const ItemRow = ({ title, items }) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <React.Fragment>
            <SectionNoMargin>
                <Container100>
                <h3>{title}</h3>
                    <Slider {...settings}>
                        {items.map((item, i) => {
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
                </Container100>
            </SectionNoMargin>
        </React.Fragment>
    )
}

export default ItemRow;



































// const ItemDiv = styled.div`
//     ${'' /* display: flex;
//     flex-direction: column; */}
//     display: inline-block;
//     margin: 5px 16px; 
//     img {
//         width: 160px;
//         border-radius: 12px;
//     }
//     p {
//         display: inline-block;
//     }
// `;

// const StretchDiv = styled.div`
//     overflow-x: scroll;
//     width: 500%;
//     text-align: initial;
// `;

// const ItemRow = ({ title, items }) => {
//     console.log(items)

//     return (
//         <React.Fragment>
//             <h3 style={{textAlign: 'left', color: 'white', fontFamily: 'Poppins', fontWeight: '600'}}>{title}</h3>
//             <StretchDiv styles={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
//             {items.map((item, i) => {
//                 return (
//                     <ItemDiv>
//                         <img src={item.images[0]} style={{display: 'inline-block'}}/>
//                         <div>
//                             <p style={{paddingRight: '10px', color: 'white'}}>${item.price}</p>
//                             <p style={{color: 'white'}}>{item.brand.displayName}</p>
//                         </div>
//                     </ItemDiv>
//                 )
//             })}
//             </StretchDiv>
//          </React.Fragment>
//     )
// }

// export default ItemRow;