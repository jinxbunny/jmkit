import React from 'react';

import AllGames from './AllGames';
import GamePageMain from './GamePageMain';

import { useRouteMatch } from 'react-router';

import './Games.css';

const GamePage = () => {
  const Route = useRouteMatch();

  const thisGame = Route.url.split('/games/').pop();
  const clearGame = thisGame.replace('/', '');

  console.log(clearGame);

  return (
    <div align="center" className="basicPage">
      {AllGames.filter((game) => game.urlName === `${clearGame}`).map(
        (filteredGames) => (
          <GamePageMain key={filteredGames.id} game={filteredGames} />
        )
      )}
    </div>
  );
};

export default GamePage;
