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
      width: 250px;
      border-radius: 12px;
      }
      p {
          display: inline-block;
          color: white;
      }
  }
`;

const ContentItemWrapper = styled.div`
  margin: 0px 0px;
  @media ${device.tablet} {
    margin: 0px 20px;
  }
`;

const ContentItem = styled.iframe`
    width: 100%;
    height: 515px;
    border-radius: 20px;
  @media ${device.tablet} {
    width: 90%;
    height: 215px;
    border-radius: 20px;
  }
`;

const ContentLibrary = (props) => {
  const contentList = ["https://www.youtube.com/embed/pwDr7yfuErE", "https://www.youtube.com/embed/UqrW0-OUExc", "https://www.youtube.com/embed/fwmrAgmfVk8", "https://www.youtube.com/embed/UOrv5ZSbTIY"];
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
      <div>
        <div>
         <h2>Suggested Content</h2>
        </div>
        <Slider {...settings}>
          {contentList.map((item, i) => {
            return (
              <ContentItemWrapper>
                <ContentItem src={item} frameBorder="0" allowFullScreen></ContentItem>
              </ContentItemWrapper>
            )
          })}
        </Slider>
      </div>
    )
}

export default ContentLibrary;

{/* <ContentWrapper>
  <ContentLibrary items={props.trending} />
</ContentWrapper>
<ItemWrapper>
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
</ItemWrapper> */}



// <SectionNoMargin>
// <Container100>
// <h3>{title}</h3>
//     
// </Container100>
// </SectionNoMargin>






















// const SectionNoMargin = styled(Section)`
//     margin: 0px;
//     display: inline-block;
//     text-align: left;
//     width: auto;
// `;

// const Container100 = styled(Container)`
//   width: 47%;
//   text-align: initial;
//   h3 {
//     textAlign: left;
//     color: white;
//     fontFamily: 'Poppins', sans-serif;
//     fontWeight: 800;
//     -webkit-animation: ${animate.fadeIn} 430ms linear;
//     animation: ${animate.fadeIn} 430ms linear;
//   }
// `;

// const ItemDiv = styled.div`
//     ${'' /* display: flex;
//     flex-direction: column; */}
    // display: inline-block;
    // margin: 5px 16px; 
    // img {
    //     width: 160px;
    //     border-radius: 12px;
    // }
    // p {
    //     display: inline-block;
    //     color: white;
    // }
    // @media ${device.tablet} {
    //     img {
    //     width: 100px;
    //     border-radius: 12px;
    //     }
    //     p {
    //         display: inline-block;
    //         color: white;
    //     }
    // }
// `;








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


// <img src={item.images[0]} style={{display: 'inline-block'}}/>
//                 <div>
//                     <p style={{paddingRight: '10px'}}>${item.price}</p>
//                     <p>{item.brand.displayName}</p>
//                 </div>