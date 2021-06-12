import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AllCharacters from './AllCharacters';

const CharacterSideCard = () => {
  let randChar = (Math.random() * AllCharacters.length) | 0;

  const [num, setnum] = useState(randChar);

  let name = AllCharacters[num].name;
  let pic = AllCharacters[num].img2;
  let cLink = name.toLowerCase();

  const cUpdate = () => {
    setnum((Math.random() * AllCharacters.length) | 0);
  };

  return (
    <div className="characterCard">
      <div className="behindText">
        <Link to={`/characters/${cLink}`}>
          <h2>
            Say Hello To <br />
            <br />
          </h2>
          <h1>{name}!</h1>

          <img src={pic} alt={name} onClick={cUpdate} />
        </Link>
        <br />
        <br />
        <button className="refreshButton" onClick={cUpdate}>
          <span className="material-icons">refresh</span>
        </button>
        <br />
        <br />
        <Link to={'/characters'}>
          <div className="colorButton">
            <h3>Meet All Characters</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CharacterSideCard;
