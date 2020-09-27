/* NPM Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useShoppingCart } from 'use-shopping-cart';
/* App Modules */
import { img } from '../../img/index.js';
import { device } from '../_parts/MediaQueries.js';

const Wrapper = styled.div`
    background-color: #1e1e1e;
    color: white;
    border-radius: 12px;
    padding: 0px;
    display: inline-block;
    transition: .2s;
    div {
        display: inline-block;
        img {
            width: 14px;
            display: inline-block;
            margin-right: 7px;
            vertical-align: text-bottom;
        }
        p {
            font-size: 10px; 
            border-radius: 20px;
            background-color: #2E8B57;
            padding: 2px 7px;
            display: inline-block;
            margin: 0px;
        }
        h5 {
            font-size: 11px;
            margin: 0px 0px 0px 7px;
            padding-left: 7px;
            border-left: 1px solid white;
        }
    }
    
    @media ${device.tablet} {
        margin-right: 30px;
        padding: 10px 13px;
        img {
            width: 17px;
        }
        p {
            font-size: 12px; 
        }
        h5 {
            font-size: 13px;
        }
        :hover {
            background-color: grey;
        }
    }
`;

const OptionsTab = (props) => {
    const { cartCount } = useShoppingCart()
    return (
        <React.Fragment>
        <Link to="/bag">
            <Wrapper>
                <div>
                    <img src={img.bag2}/>
                    <p>{cartCount}</p>
                </div>
                <div>
                    <h5>Dylan</h5>
                </div>
            </Wrapper>
            </Link>
        </React.Fragment>
    )
}

export default OptionsTab;