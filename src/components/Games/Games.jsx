import React from 'react';
import GameThumbs from './GameThumbs';
import AllGames from './AllGames';

import Helmet from 'react-helmet';

import './Games.css';

const Games = () => {
  return (
    <div>
      <Helmet>
        <title>JMKit.com: Games</title>
      </Helmet>

      <h1>All JMKit Games</h1>
      <div align="center" className="gameGalleryParent">
        {AllGames.map((filteredGames) => (
          <GameThumbs key={filteredGames.id} gallery={filteredGames} />
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Games;
