import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllCharacters from '../Characters/AllCharacters';
import AllGames from '../Games/AllGames';
import AllVideos from '../Videos/AllVideos';
import AllCrafts from '../Crafts/AllCrafts';

import './Card.css';

const Card2 = (props) => {
  let imported;

  let unique;

  if (props.Type === `Games`) {
    imported = AllGames;
  } else if (props.Type === `Videos`) {
    imported = AllVideos;
  } else if (props.Type === `Characters`) {
    imported = AllCharacters;
  } else if (props.Type === `Crafts`) {
    imported = AllCrafts;
    unique = <div></div>;
  }

  let randomThing = (Math.random() * imported.length) | 0;
  const [num, setnum] = useState(randomThing);

  let name = imported[num].Name;

  let pic = imported[num].Thumb;
  let folder = props.Type.toLowerCase();
  let sLink = name.replace(/\s+/g, '').toLowerCase();

  let style = {
    backgroundImage: `url(${pic})`,
  };

  const cUpdate = () => {
    setnum((Math.random() * imported.length) | 0);
  };

  console.log(pic);

  return (
    <div className="behindText">
      <div>
        <h3>{props.header}</h3>
        {unique}
      </div>
      <div className="cardMiddle">
        <br />
        {props.title}
        <Link to={`/${folder}/${sLink}`}>
          <div className="bThumb" style={style} onClick={cUpdate}></div>
        </Link>
      </div>
      <br />
      <div>
        <button className="refreshButton" onClick={cUpdate}>
          <span className="material-icons">refresh</span>
        </button>
        <br />
        <br />
      </div>
      <div className="cardLink">
        <Link to={`/${folder}/`}>See All {props.Type}</Link>
      </div>
    </div>
  );
};

export default Card2;
