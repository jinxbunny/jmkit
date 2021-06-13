import React from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import GameFeature from '../Games/GameFeature';

const Feature = () => {
  return (
    <div>
      <h1>Feature</h1>
      <ScrollContainer className="scroll-container">
        {
          <div className="verticle">
            <GameFeature />
          </div>
        }
      </ScrollContainer>
    </div>
  );
};

export default Feature;
