import React, { useContext } from 'react';
import { Context } from '../../ThemeProvider'

import '../Nav/ThemeMenu.css';
import '../../Theme.css';

import MoonIcon from '../../../img/hills/moon.png';
import SunIcon from '../../../img/hills/sun.png';

const ThemeMenu = () => {

  const [thisTheme, setTheme] = useContext(Context);

  const body = document.body;

  const swapTheme = () => {
    if (thisTheme === 'light') {
      themeIt('dark');
      setTheme('dark');

    } else {
      themeIt('light');
      setTheme('light');

    }
  };
  
  function themeIt(T) {
    body.classList.remove('light', 'dark');
    body.classList.add(T);
    localStorage.setItem('myTheme', T);
  }

  return (
    <div className="switch" onClick={swapTheme}>
      <div className="switchCircle"></div>
      <img id="sunIcon" src={SunIcon} alt="Sun" />
      <img id="moonIcon" src={MoonIcon} alt="Moon" />
    </div>
  );
};

export default ThemeMenu;
