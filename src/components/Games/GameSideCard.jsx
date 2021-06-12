import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllGames from './AllGames';

const GameSideCard = () => {
  let randGame = (Math.random() * AllGames.length) | 0;

  const [num, setnum] = useState(randGame);

  let name = AllGames[num].Name;
  let pic = AllGames[num].Thumb;
  let link = name.replace(/\s+/g, '').toLowerCase();

  const cUpdate = () => {
    setnum((Math.random() * AllGames.length) | 0);
  };

  return (
    <div className="behindText">
      <h2>Have You Played</h2>
      <br></br>
      <Link to={`/games/${link}`}>
        <h3>{name}</h3>
        <div
          onClick={cUpdate}
          style={{
            margin: `4px`,
            backgroundImage: `url(${pic})`,
            backgroundSize: `cover`,
            height: `150px`,
            borderRadius: `10px`,
          }}
        ></div>
      </Link>
      <br />
      <button className="refreshButton" onClick={cUpdate}>
        <span className="material-icons">refresh</span>
      </button>
      <br />
      <br />
      <Link to={'/games/'}>
        <div className="colorButton">
          <h3>All Games</h3>
        </div>
      </Link>
    </div>
  );
};

export default GameSideCard;
