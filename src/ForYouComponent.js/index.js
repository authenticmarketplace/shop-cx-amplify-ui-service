import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const IntroSection = styled.div`
//     padding-top: 75px;
//     height: 80vh;
//     position: relative;
//     text-align: center;
//     h3 {
//         font-family: 'Poppins', sans-serif;
//         letter-spacing: .5px;
//         position: absolute;
//         display: inline-block;
//         top: 50%;
//         transform: translateY(-50%);
//         color: white;
//     }
// `;

const H3 = styled.h3`
    font-family: 'Poppins', sans-serif;
    letter-spacing: .5px;
    position: absolute;
    display: inline;
    top: 25%;
    transform: translateY(-50%);
    color: white;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  background-color: #151515;
  position: fixed;
  opacity: 0.9;
`;

const MenuWrapper = styled.div`
  height: 100%;
`;

const ColLeft = styled.div`
  display: inline-block;
`;

const ColRight = styled.div`
  display: inline-block;
  padding-top: 18px;
`;

const StyledLink = styled(Link)`
  color: white;
  ${'' /* text-transform: uppercase; */}
  font-weight: 800;
  text-decoration: none;
  margin-top: 50px;
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
`;

const ForYouComponent = () => {
    return (
        <div className="container">
        <MenuWrapper>
            <Menu>
              <ColLeft>
                <Logo>Authentic.shop</Logo>
              </ColLeft>
              <ColRight>
                <StyledLink to="/">Menu</StyledLink>
              </ColRight>
            </Menu>
          </MenuWrapper>
        <div style={{border: '2px solid red'}}>
            <H3>*Curated For You</H3>
        </div>
        </div>
    );
}

export default ForYouComponent;