import React from 'react';
import { Link } from 'react-router-dom';
import { img } from '../../../images/index.js';
import { MenuNavButtons } from '../../menuNavButtons';
import { MenuOptionsTab } from '../../menuOptionsTab';
import { DesktopMenu, LogoDiv, Logo } from './styles';

const DesktopMenuComponent = () => {
    return (
    <>
      <DesktopMenu >
        <LogoDiv>
          <img style={{height: '25px', display: 'inline-block', marginRight: '10px'}} src={img.circlelogo} alt="logo"/>
          <Link to="/"><Logo>Authentic.shop</Logo></Link>
        </LogoDiv>
        <div style={{marginTop: '20px'}}>
          <MenuNavButtons />
          <MenuOptionsTab />
        </div>
      </DesktopMenu>
    </>
    )
}

export default DesktopMenuComponent;