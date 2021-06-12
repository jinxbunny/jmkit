import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllCharacters from '../Characters/AllCharacters';

const RandomCharacter = () => {
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
      <Link to={`/characters/${cLink}`}>
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
    </div>
  );
};

export default RandomCharacter;
