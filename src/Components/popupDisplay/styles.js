import styled from 'styled-components';
import { adjust } from '../_parts/MediaQueries.js';
import { animate } from '../_parts/styles.js';

const WrapperRound = styled.div`
  overflow: hidden;
  background-color: #101010;
  position: fixed;
  border-radius: 25px;
  background-color: #202020;
  margin: 1.9em 1em;
  height: 90%;
  width: 90%;
  background-image: url(${props => props.bgimage || ''});
  background-size: cover;
  background-position: center;
  -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);

  @media ${adjust('348px')} {
    margin: 1.9em 1.2em;
  }

  @media ${adjust('462px')} {
    margin: 1.9em 1.5em;
  }

  @media ${adjust('568px')} {
    margin: 1.9em 2.0em;
  }

  @media ${adjust('678px')} {
    margin: 1.9em 2.2em;
  }

  @media ${adjust('800px')} {
    margin: 1.9em 2.8em;
  }

  @media ${adjust('1024px')} {
    margin: 1.9em 3.5em;
  }

  @media ${adjust('1068px')} {
    margin: 1.9em 4.3em;
  }
  @media ${adjust('1503px')} {
    margin: 1.9em 5.0em;
  }
  @media ${adjust('1806px')} {
    margin: 1.9em 5.8em;
  }
  @media ${adjust('2002px')} {
    margin: 1.9em 6.3em;
  }
`;

const AppMenuWrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 0;
    color: white;
  }
  div {
    float: left;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 15px;
    ul {
      clear: left;
      float: left;
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      left: 50%;
    }
    li {
      list-style: none;
      display:block;
      list-style: none;
      margin: 15px;
      position: relative;
      right: 50%;
      a {
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        color: white;
        text-decoration: none;
        padding-bottom: 7px;
        :hover {
          transition: 0.3s;
          border-bottom: 1px solid white;
          padding-bottom: 3px;
        }
      }
      a.active {}
    }
    li:first-child {
      margin-top: 10px;
    }
  }
  -webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
`;