import React from 'react';
import { Link } from 'react-router-dom';
import { img, tempImg } from '../../img/index.js';

const PopupDisplayView = () => {
    return (
        <WrapperRound bgimage={tempImg.jhene}>
            <AppMenuWrapper>
                <img style={{height: '85px'}} src={img.circlelogo} alt="logo"/>
                <h1>AUTHENTIC.SHOP</h1>
                <h1>THANKS FOR SHOPPING WITH US</h1>
                <div>
                    <ul>
                      <li><Link to='/' className="active">Browse</Link></li>
                      <li><Link to='/foryou'>For You</Link></li>
                      <li><Link to='/mystore'>My Store</Link></li>
                    </ul>
                </div>
            </AppMenuWrapper>
      </WrapperRound>
    )
}

export default PopupDisplayView;