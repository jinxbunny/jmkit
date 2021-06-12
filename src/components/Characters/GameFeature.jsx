import React, { useState, useEffect } from 'react';

//data
import AllGames from '../Games/AllGames';
import GameThumbs from '../Games/GameThumbs';

const GameFeature = ({ name }) => {
  const games = AllGames.filter((character) =>
    character.gCharacters.includes(`${name}`)
  );
  const amount = games.length;
  const latest = games.slice(0, 3);

  const [gameAmount, setGameAmount] = useState(latest);
  const [buttonText, setText] = useState('Show All..');

  function updateFeed() {
    if (buttonText === 'Show All..') {
      setGameAmount(games);
      setText('Show Less');
    } else if (buttonText === 'Show Less') {
      setGameAmount(latest);
      setText('Show All..');
    }
  }

  useEffect(() => {
    if (amount < 4) {
      document.getElementById('gameMoreButton').style.display = 'none';
    }
    if (amount === 0) {
      document.getElementById('gameFeature').style.display = 'none';
    }
  });

  return (
    <div id="gameFeature">
      <h1 className="title">
        {name} is in {amount} Games!
        <button id="gameMoreButton" className="moreButton" onClick={updateFeed}>
          {buttonText}
        </button>
      </h1>

      <div className="gameGalleryParent">
        {gameAmount
          .filter((character) => character.gCharacters.includes(`${name}`))
          .map((filteredGames) => (
            <GameThumbs key={filteredGames.id} gallery={filteredGames} />
          ))}
      </div>
      <br />
    </div>
  );
};

export default GameFeature;
