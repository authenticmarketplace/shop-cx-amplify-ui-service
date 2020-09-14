import React from 'react';
import styled from 'styled-components';
import { device, adjust } from '../_components/MediaQueries.js';
import { animate } from '../_components/styles.js';

const Wrapper = styled.div`
 -webkit-animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation: ${animate.slideUp} 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    height: auto;
    width: 100%;
    position: ${props => props.mode.position};
    margin-top: ${props => props.mode.marginTop};
    bottom: 0;
    left: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
   
`;

const InnerView = styled.div`
-webkit-animation: ${animate.fadeIn} 230ms linear;
  animation: ${animate.fadeIn} 230ms linear;
 display: inline-block;
 vertical-align: bottom;
 background-color: #282828;
 width: ${props => props.mode.innerView.width};
 padding: 20px 0px;
 opacity: ${props => props.mode.innerView.opacity};
 transition: ${props => props.mode.innerView.transition};
 cursor: pointer;
 margin: ${props => props.mode.innerView.margin};
 border-radius: ${props => props.mode.innerView.borderRadius};
 
 :hover {
     opacity: 1.0;
     background-color: #707070;
 }

@media ${device.tablet} {
    width: ${props => props.mode.innerView.tablet.width};
    margin: ${props => props.mode.innerView.tablet.margin};
    border-radius: ${props => props.mode.innerView.tablet.borderRadius};
}
`;

const LeftDiv = styled.div`
    padding-left: 20px;
    display: block;
    float: left;
    h4 {
        display: inline-block;
        margin: 0px;
        padding: 0px;
        color: white;
        padding-right: 6px;
        font-weight: 400;
    }
`;

const RightDiv = styled(LeftDiv)`
    padding-left: 0px;
    padding-right: 10px;
    float: right;
`;

const styles = {
    fixed: {
        position: 'fixed',
        marginTop: '0px',
        innerView: {
            width: '100%',
            opacity: '.7',
            transition: '.2s',
            margin: '0px',
            borderRadius: '17px 17px 0px 0px',
            tablet: {
                width: '59%',
                margin: '0px 0px 20px 16%',
                borderRadius: '17px'
            }
        }
    },
    static: {
        position: 'static',
        marginTop: '0px',
        innerView: {
            width: '100%',
            opacity: '1',
            transition: '.5s',
            margin: '20px 0px 0px 0px',
            borderRadius: '12px',
            tablet: {
                width: '75%',
                margin: '20px 0px 0px 0px',
                borderRadius: '12px'
            }
        }
    }
}

const ShoppingBag = (props) => {
    const mode = props.mode && props.mode === 'fixed' ? styles.fixed : styles.static;
    console.log(mode.innerView.margin)
    return (
        <Wrapper mode={mode}>
            <InnerView mode={mode}>
                <LeftDiv>
                    <h4>Bag</h4>
                    <h4>(3)</h4>
                </LeftDiv>
                <RightDiv>
                    <h4>Place Order</h4>
                    <h4>&#62;</h4>
                </RightDiv>
            </InnerView>
        </Wrapper>
    )
}

export default ShoppingBag;
