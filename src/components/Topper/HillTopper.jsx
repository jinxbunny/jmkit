import React from 'react';

import Moon from '../../img/hills/moon.png';
import Sun from '../../img/hills/sun.png';
import Rainbow from '../../img/hills/rainbow.png';
import HillsTopper from '../../img/SVG/greenHills.svg';
// import HillsTopperW from '../../img/SVG/HillTopperW.svg';
// import Ghost from '../../img/SVG/Ghost.svg';

import TopBanner from './TopBanner';

import '../../animations.css';

const HillTopper = () => {
  return (
    <div>
      <div className="hillTopper">
        <div id="moon">
          <img src={Moon} alt="The Moon" />
        </div>
        <div id="sun">
          <img src={Sun} alt="The Sun" />
        </div>
        <div id="rainbow">
          <img src={Rainbow} alt="Pride" />
        </div>
        <div
          className="hills"
          style={{
            backgroundImage: `url(${HillsTopper})`,
          }}
        >
          <TopBanner />
        </div>
      </div>
      {/* <div className="underHill">&nbsp;</div> */}
      {/* <div id="ghost">
        <img src={Ghost} alt ="Spooky"/>
      </div> */}
    </div>
  );
};

export default HillTopper;
