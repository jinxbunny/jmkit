import React from 'react';
import blankBanner from '../../img/blankBanner.png';

const TopBanner = () => {
  return (
    <div id="banner" style={{ backgroundImage: `url(${blankBanner})` }}>
      <div id="inBanner">
        <div id="topB">Welcome to JMKit.com</div>
        <div id="bottomB">Promoting Creativity, Play and Story Telling!</div>
      </div>
    </div>
  );
};

export default TopBanner;
