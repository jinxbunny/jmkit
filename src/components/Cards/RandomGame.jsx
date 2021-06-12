import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllGames from '../Games/AllGames';

const RandomGame = () => {
  let randChar = (Math.random() * AllGames.length) | 0;

  const [num, setnum] = useState(randChar);

  let name = AllGames[num].Name;
  let pic = AllGames[num].Thumb;
  let cLink = name.replace(/\s+/g, '').toLowerCase();
  let style = {
    backgroundImage: `url(${pic})`,
  };

  const cUpdate = () => {
    setnum((Math.random() * AllGames.length) | 0);
  };

  return (
    <div className="cardThumb">
      <Link to={`/games/${cLink}`}>
        <h3>{name}</h3>
        <div className="bThumb" style={style} onClick={cUpdate}></div>
      </Link>
      <br />
      <br />
      <button className="refreshButton" onClick={cUpdate}>
        <span className="material-icons">refresh</span>
      </button>
      <br />
      <br />
    </div>
  );
};

export default RandomGame;
