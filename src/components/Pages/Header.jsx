import React from 'react';

import welcomeLogo from '../../img/welcomeLogo.png';
import sprayLogo from '../../img/sprayLogo.png';

import ThemeMenu from './Nav/ThemeMenu';

import '../Pages/Nav/DropDown.css';
import './Header.css';

const Header = ({ thisLocation }) => {
  return (
    <div className="sticky">
      <div className="headerWrapper">
        <header id="header" style={{ visibility: `visible` }}>
          <div className="logo">
            <img id="welcomeImg" src={welcomeLogo} alt="Welcome" />
            <img id="sprayLogo" src={sprayLogo} alt="Spray Logo" />
          </div>
          <div className="mainNav" id="headerSize">
            <div className="location">{thisLocation}</div>
            <div id="themeMenu">
              <ThemeMenu />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
