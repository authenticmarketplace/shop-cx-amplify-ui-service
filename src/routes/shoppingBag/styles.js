import styled from 'styled-components';
import { Section, Container, animate } from '../../components/globals/styles.js';
import { device } from '../../components/globals/media-breakpoints.js';

const StyledSection = styled(Section)`
  padding-top: 60px;
  margin: 0px;
  font-family: 'Poppins', sans-serif;
  -webkit-animation: ${animate.fadeIn} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.fadeIn} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  @media ${device.tablet} {
    padding-top: 115px;
  }
`;

const BagWrapper = styled(Container)`
    width: 75%;
    display: flex;
    flex-direction: column;
    -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    @media ${device.mobileS} {
        width: 90%;
    }
    @media ${device.tablet} {
        flex-direction: row;
        margin-left: 22%;
        margin-right: 32px;
        width: 75%;
    }
`;

const BagContent = styled.div`
    width: 100%;
    h2 {
        color: white;
        background-color: #282828;
        border-radius: 25px;
        display: inline-block;
        padding: 10px 20px;
    }
`;

const BagTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    div {
        color: white;
        align-self: center;
        h1 {
            font-size: 20px;
            margin-bottom: 0px;
        }
        h3 {
            color: grey;
            font-size: 15px;
            text-align: left;
            margin-top: 0px;
        }
    }
  @media ${device.tablet} {
    div {
        color: white;
        align-self: center;
        h1 {
            font-size: 25px;
            margin: 0px;
        }
        h3 {
            color: grey;
            font-size: 19px;
            text-align: left;
        }
    }
  }
  @media ${device.laptop} {
    div {
        h1 {
            font-size: 32px;
            margin: 0px;
        }
    }
  }
`;

const OrderContent = styled.div`
    width: 100%;
    text-align: right;
`;

const OrderCard = styled.div`
    display: inline-block;
    width: 80%;
    background-color: #303030;
    border-radius: 12px;
    height: 500px;
    text-align: left;
    padding: 0px 0px 50px 0px;
    h1 {
        padding-left: 35px;
        color: grey;
    }
    p {
        color: white;
    }
    div {
        display: flex;
        justify-content: space-between;
        padding: 0px 40px;
        h2 {
            color: white;
        }
        p {
            margin: 12px;
        }
    }
    @media ${device.mobileS} {
        width: 100%;
        height: auto;
        padding: 0px 0px 20px 0px;
        margin: 0px 0px 30px 0px;
    }
    @media ${device.tablet} {
        width: 80%;
        height: 500px;
        padding: 0px 0px 50px 0px;
        margin: 0px 0px 30px 0px;
    }
`;

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center !important;
    align-items: center;
    button {
        width: 220px;
        display: inline-block;
        background-color: #404040;
        border: none;
        margin: 8px 0px;
        padding: 10px;
        border-radius: 20px;
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 700;
    }
    button:first-child {
        background-color: #585858;
    }
`;

const Styles = {
    StyledSection,
    BagWrapper,
    BagContent,
    BagTitleWrapper,
    OrderContent,
    OrderCard,
    ButtonsDiv
}

export default Styles;