import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from '../_components/HeaderMenuComponent.js';
import ProductItem from './ProductItemComponent.js';
import DesktopSidebar from '../_components/DesktopSidebar.js';
import styled from 'styled-components';
import { tempImg } from '../img/index.js';
import { device, adjust } from '../_components/MediaQueries.js';
import { Section, Container, animate } from '../_components/styles.js';

const StyledSection = styled(Section)`
  padding-top: 80px;
  -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  @media ${device.tablet} {
    margin-left: 20%;
    padding-top: 100px;
  }
`;

const BrowseContainer = styled(Container)`
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
  h5 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
  }
`;

const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${adjust('1067px')} {
    justify-content: flex-start;
  }
`;

const ProductList = [
  {
    id: "5ef963fa96c59e56195d026a",
    image: tempImg.jfg1,
    title: "New Balance 992",
    price: "200",
    description: "No emotions are emotions",
    brand: {
      accountId: "mingobydomingo",
      name: "Joe Fresh Goods",
      logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
      label: "Black-owned",
      about: "A creative power house built by three distinctively different visionaries",
      locale: "The DMV",
      products: [
        {
          id: "5ef963fa96c59e56195d026a",
          image: "https://images.squarespace-cdn.com/content/v1/59136862ebbd1af9b15bf428/1576301261481-5LVT5AWD9Y4KOTR54FOB/ke17ZwdGBToddI8pDm48kO-Z6zWMyP-okejPJG_uV7N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZhRKR-yK5k3ZNQlbLEKQcEnu0RPHBEAsj-Neg72TWypckN8YfsLXRIlXOtOxTMY9Q/000045990016.jpg?format=2500w",
          title: "Product 1",
          price: "25"
        },
        {
          id: "5ef96445d68a125623b3eab9",
          image: "https://images.squarespace-cdn.com/content/v1/59136862ebbd1af9b15bf428/1576301261481-5LVT5AWD9Y4KOTR54FOB/ke17ZwdGBToddI8pDm48kO-Z6zWMyP-okejPJG_uV7N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZhRKR-yK5k3ZNQlbLEKQcEnu0RPHBEAsj-Neg72TWypckN8YfsLXRIlXOtOxTMY9Q/000045990016.jpg?format=2500w",
          title: "Product 2",
          price: "30"
        }
      ]
    }
  },
  {
    id: "5ef963fa96c59e56195d026b",
    image: "https://cdn.shopify.com/s/files/1/0075/1409/5674/products/MRE-25s_1512x.jpg?v=1574367414",
    title: "Balance T-shirt",
    price: "50",
    description: "A comfortable and fly t-shirt",
    brand: {
      accountId: "bricksandwoods",
      name: "Bricks & Woods",
      logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
      label: "Black-owned",
      about: "A creative power house built by three distinctively different visionaries",
      locale: "Atlanta, GA",
      products: [
        {
          id: "5ef963fa96c59e56195d026a",
          image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
          title: "Product 1",
          price: "25"
        },
        {
          id: "5ef96445d68a125623b3eab9",
          image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
          title: "Product 2",
          price: "30"
        }
      ]
    }
  },
  {
      id: "5ef963fa96c59e56195d026c",
      image: tempImg.bw1,
      title: "Blue Sneakers",
      price: "75",
      description: "A pair of sneakers that are cool and a nice color",
      brand: {
        accountId: "saucony",
        name: "Saucony",
        logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
        label: "",
        about: "A shoe brand that sells shoes and other stuff probably",
        locale: "Los Angeles, CA",
        products: [
          {
            id: "5ef963fa96c59e56195d026a",
            image: "https://sneakers-magazine.com/wp-content/uploads/2018/05/sneaker-photography-ryustyler-saucony.jpg",
            title: "Product 1",
            price: "25"
          },
          {
            id: "5ef96445d68a125623b3eab9",
            image: "https://sneakers-magazine.com/wp-content/uploads/2018/05/sneaker-photography-ryustyler-saucony.jpg",
            title: "Product 2",
            price: "30"
          }
        ]
      }
    },
    {
      id: "5ef963fa96c59e56195d026d",
      image: tempImg.bw4,
      title: "Botanique Body Oil",
      price: "40",
      description: "A body oil that smells really nice and makes your body feel good",
      brand: {
        accountId: "ninabailey",
        name: "Nina Bailey",
        logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
        label: "Black-owned",
        about: "A creative power house built by three distinctively different visionaries",
        locale: "New York City, NY",
        products: [
          {
            id: "5ef963fa96c59e56195d026a",
            image: "https://www.perthproductphotography.com.au/wp-content/uploads/2019/09/190712-Nina-Bailey-046.jpg",
            title: "Product 1",
            price: "25"
          },
          {
            id: "5ef96445d68a125623b3eab9",
            image: "https://www.perthproductphotography.com.au/wp-content/uploads/2019/09/190712-Nina-Bailey-046.jpg",
            title: "Product 2",
            price: "30"
          }
        ]
      }
    },
    {
      id: "5ef963fa96c59e56195d026e",
      image: tempImg.fenty1,
      title: "Multi Beanie",
      price: "60",
      description: "A beanie thats comfortable ans fly in a dope colorway",
      brand: {
        accountId: "bricksandwoods",
        name: "Bricks & Woods",
        logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
        label: "Black-owned",
        about: "A creative power house built by three distinctively different visionaries",
        locale: "Los Angeles, CA",
        products: [
          {
            id: "5ef963fa96c59e56195d026a",
            image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
            title: "Product 1",
            price: "25"
          },
          {
            id: "5ef96445d68a125623b3eab9",
            image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
            title: "Product 2",
            price: "30"
          }
        ]
      }
    },
    {
      id: "5ef963fa96c59e56195d026f",
      image: tempImg.saintivory1,
      title: "Balance T-shirt",
      price: "35",
      description: "A comfortable and fly t-shirt",
      brand: {
        accountId: "mingobydomingo",
        name: "Mingo by Domingo",
        logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
        label: "Black-owned",
        about: "A creative power house built by three distinctively different visionaries",
        locale: "The DMV",
        products: [
          {
            id: "5ef963fa96c59e56195d026a",
            image: "https://images.squarespace-cdn.com/content/v1/59136862ebbd1af9b15bf428/1576301261481-5LVT5AWD9Y4KOTR54FOB/ke17ZwdGBToddI8pDm48kO-Z6zWMyP-okejPJG_uV7N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZhRKR-yK5k3ZNQlbLEKQcEnu0RPHBEAsj-Neg72TWypckN8YfsLXRIlXOtOxTMY9Q/000045990016.jpg?format=2500w",
            title: "Product 1",
            price: "25"
          },
          {
            id: "5ef96445d68a125623b3eab9",
            image: "https://images.squarespace-cdn.com/content/v1/59136862ebbd1af9b15bf428/1576301261481-5LVT5AWD9Y4KOTR54FOB/ke17ZwdGBToddI8pDm48kO-Z6zWMyP-okejPJG_uV7N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZhRKR-yK5k3ZNQlbLEKQcEnu0RPHBEAsj-Neg72TWypckN8YfsLXRIlXOtOxTMY9Q/000045990016.jpg?format=2500w",
            title: "Product 2",
            price: "30"
          }
        ]
      }
    },
    {
      id: "5ef963fa96c59e56195d026g",
      image: tempImg.bw5,
      title: "Balance T-shirt",
      price: "50",
      description: "A comfortable and fly t-shirt",
      brand: {
        accountId: "bricksandwoods",
        name: "Bricks & Woods",
        logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
        label: "Black-owned",
        about: "A creative power house built by three distinctively different visionaries",
        locale: "Atlanta, GA",
        products: [
          {
            id: "5ef963fa96c59e56195d026a",
            image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
            title: "Product 1",
            price: "25"
          },
          {
            id: "5ef96445d68a125623b3eab9",
            image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
            title: "Product 2",
            price: "30"
          }
        ]
      }
    },
    {
        id: "5ef963fa96c59e56195d026h",
        image: tempImg.saucony1,
        title: "Blue Sneakers",
        price: "75",
        description: "A pair of sneakers that are cool and a nice color",
        brand: {
          accountId: "saucony",
          name: "Saucony",
          logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
          label: "",
          about: "A shoe brand that sells shoes and other stuff probably",
          locale: "Los Angeles, CA",
          products: [
            {
              id: "5ef963fa96c59e56195d026a",
              image: "https://sneakers-magazine.com/wp-content/uploads/2018/05/sneaker-photography-ryustyler-saucony.jpg",
              title: "Product 1",
              price: "25"
            },
            {
              id: "5ef96445d68a125623b3eab9",
              image: "https://sneakers-magazine.com/wp-content/uploads/2018/05/sneaker-photography-ryustyler-saucony.jpg",
              title: "Product 2",
              price: "30"
            }
          ]
        }
      },
      {
        id: "5ef963fa96c59e56195d026i",
        image: tempImg.ninabailey1,
        title: "Botanique Body Oil",
        price: "40",
        description: "A body oil that smells really nice and makes your body feel good",
        brand: {
          accountId: "ninabailey",
          name: "Nina Bailey",
          logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
          label: "Black-owned",
          about: "A creative power house built by three distinctively different visionaries",
          locale: "New York City, NY",
          products: [
            {
              id: "5ef963fa96c59e56195d026a",
              image: "https://www.perthproductphotography.com.au/wp-content/uploads/2019/09/190712-Nina-Bailey-046.jpg",
              title: "Product 1",
              price: "25"
            },
            {
              id: "5ef96445d68a125623b3eab9",
              image: "https://www.perthproductphotography.com.au/wp-content/uploads/2019/09/190712-Nina-Bailey-046.jpg",
              title: "Product 2",
              price: "30"
            }
          ]
        }
      },
      {
        id: "5ef963fa96c59e56195d026j",
        image: tempImg.bw3,
        title: "Multi Beanie",
        price: "60",
        description: "A beanie thats comfortable ans fly in a dope colorway",
        brand: {
          accountId: "bricksandwoods",
          name: "Bricks & Woods",
          logo: "https://lh3.googleusercontent.com/proxy/9PFPwnqNp9Pg7vXJXYYytaZjqbIyvlNV7irjTDGHld4vafRqArtEDLLurLS4kIa2VxjDwYEHh12xCjuolPQLeaguOJdvLosZPmd0KDFol_ZwUWOI9PJOww",
          label: "Black-owned",
          about: "A creative power house built by three distinctively different visionaries",
          locale: "Los Angeles, CA",
          products: [
            {
              id: "5ef963fa96c59e56195d026a",
              image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
              title: "Product 1",
              price: "25"
            },
            {
              id: "5ef96445d68a125623b3eab9",
              image: "https://www.kaufmannstatic.com/sc_images/Images/qUINT/Brandbilleder/AW19/Bricks-and-wood/qUINT-brandspot-bricks-wood-image.jpg?w=840",
              title: "Product 2",
              price: "30"
            }
          ]
        }
      }
]


const BrowseComponent = () => {
    return (
      <React.Fragment>
        <DesktopSidebar hotitems={ProductList}/>
        <HeaderMenu link="/" linktext="Menu"/>
        <StyledSection>
          <BrowseContainer>
            <ProductRow>
              {ProductList.map((item, i) => {
                  return (
                    <div key={item.id}>
                      <Link to={{
                          pathname: `/product/${item.id}`,
                          state: {
                              item,
                              ProductList
                          }
                      }}>
                        <ProductItem item={item} />
                      </Link>
                    </div>
                  )
              })}
            </ProductRow>
              {/* <div>
                  <h3 style={{backgroundColor: '#282828', display: 'inline-block', padding: '16px 18px', borderRadius: '20px', fontWeight: 'light'}}>End</h3>
              </div> */}
          </BrowseContainer>
        </StyledSection>
      </React.Fragment>
    );
}

export default BrowseComponent;