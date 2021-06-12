import React from 'react';
import { Link } from 'react-router-dom';

import AllGames from '../Games/AllGames';
import GameThumbs from '../Games/GameThumbs';

const Feature = () => {
  const games = AllGames.filter((gameFeature) =>
    gameFeature.gTags.includes(`Adventure`)
  );

  const latest = games.slice(0, 6);

  return (
    <div>
      <h1>Feature</h1>
      <div className="behindText">
        <h3>Adventure Games!</h3>
        <br />
        <div className="gameGalleryParent">
          {latest.map((filteredGames) => (
            <GameThumbs key={filteredGames.id} gallery={filteredGames} />
          ))}
        </div>
        <br />
        <div align="center">
          <Link to={{ pathname: `/games/` }}>See All Games!</Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
