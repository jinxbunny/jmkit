import React from 'react';
import HillTopper from '../Topper/HillTopper';

import '../Theme.css';
import './SideSamples.css';

import ScrollToTop from '../ScrollToTop';
import Ad from '../Ads/Ad';
import NewsSide from './News/NewsSide';
import StoreSample from '../Store/StoreSample';
import Card from '../Cards/Card';
import Card2 from '../Cards/Card2';

const MainContent = (props) => {
  return (
    <div>
      <ScrollToTop />
      <HillTopper />
      <div className="overAll">
        <div className="themeParent">
          <div className="main-grid-container">
            <div className="main-Left">
              <div className="card">
                <NewsSide />
              </div>
              <Ad />
              <div className="card">
                <Card
                  type="Characters"
                  header="Say Hello To.."
                  link="/characters/"
                />
              </div>
              <Card2 Type="Games" header="Have you played..." />
              <br />
            </div>
            <div className="main-Main">{props.children}</div>
            <div className="main-Right">
              <div className="card">
                <StoreSample />
              </div>
              <Ad />
              <Card2 Type="Crafts" header="Get Crafty..." />
              <br />
              <Card2 Type="Videos" header="Have you watched..." />
              <br />
            </div>
            <div className="mainBGImage" />
          </div>
        </div>
      </div>
      <div className="underHill">&nbsp;</div>
    </div>
  );
};

export default MainContent;
