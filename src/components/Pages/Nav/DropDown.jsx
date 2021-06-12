import React, { useState } from 'react';
import useBrowserWindowSize from 'usebrowserwindowsize';

import './DropDown.css';

import DDButton from './DDButton';

import home_icon from '../../../img/SVG/icons/Home.svg';
import characters_icon from '../../../img/SVG/icons/Characters.svg';
import comics_icon from '../../../img/SVG/icons/Comics.svg';
import games_icon from '../../../img/SVG/icons/Games.svg';
import videos_icon from '../../../img/SVG/icons/Videos.svg';
import crafts_icon from '../../../img/SVG/icons/Crafts.svg';
import store_icon from '../../../img/SVG/icons/store2.svg';
import downloads_icon from '../../../img/SVG/icons/Downloads.svg';

const DropDown = () => {
  const [thisMenu, setMenu] = useState('up');
  const [buttonText, setBT] = useState('Show Menu');
  const [windowWidth] = useBrowserWindowSize();

  function showMenu() {
    if (thisMenu === 'up') {
      setMenu('down');
      setBT('Hide Menu');
      document.getElementById('menuIconsOver').style.top = '90px';
    } else {
      setMenu('up');
      setBT('Show Menu');
      if (windowWidth <= 451) {
        document.getElementById('menuIconsOver').style.top = '-244px';
      } else if (windowWidth <= 884) {
        document.getElementById('menuIconsOver').style.top = '-140px';
      } else {
        document.getElementById('menuIconsOver').style.top = '-30px';
      }
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {}

  return (
    <div className="sticky">
      <div className="dMenuParent">
        <div className="menuIcons" id="menuIconsOver">
          <div className="menuIconsTop" onClick={showMenu}>
            <DDButton link="/" icon={home_icon} alt="Home Page" title="Home" />
            <DDButton
              link="/characters"
              icon={characters_icon}
              alt="Character Page"
              title="Characters"
            />
            <DDButton
              link="/comics"
              icon={comics_icon}
              alt="Comics Page"
              title="Comics"
            />
            <DDButton
              link="/games"
              icon={games_icon}
              alt="Games Page"
              title="Games"
            />
            <DDButton
              link="/videos"
              icon={videos_icon}
              alt="Vidoes Page"
              title="Videos"
            />
            <DDButton
              link="/crafts"
              icon={crafts_icon}
              alt="Crafts Page"
              title="Crafts"
            />
            <DDButton
              link="/Store"
              icon={store_icon}
              alt="Store Page"
              title="Store"
            />
            <DDButton
              link="/Downloads"
              icon={downloads_icon}
              alt="Downloads Page"
              title="Downloads"
            />
          </div>
          <div className="menuButtonParent">
            <button className="menuButton" onClick={showMenu}>
              <div className="menuBut">{buttonText}</div>
            </button>
          </div>
          <div className="menuIconsBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
