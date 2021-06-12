import React from 'react';
import CraftGallery from './CraftGallery';

import '../Theme.css';

import Helmet from 'react-helmet';

const Crafts = () => {
  return (
    <div>
      <Helmet>
        <title>JMKit.com: Crafts</title>
      </Helmet>
      <h1>Crafts</h1>
      <div className="storeWindow">
        <CraftGallery />
      </div>
    </div>
  );
};

export default Crafts;
