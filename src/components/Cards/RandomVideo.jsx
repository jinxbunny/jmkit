import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllVideos from '../Videos/AllVideos';

const RandomVideo = () => {
  let randChar = (Math.random() * AllVideos.length) | 0;

  const [num, setnum] = useState(randChar);

  let name = AllVideos[num].Name;
  let pic = AllVideos[num].Thumb;
  let cLink = name.replace(/\s+/g, '').toLowerCase();

  const cUpdate = () => {
    setnum((Math.random() * AllVideos.length) | 0);
  };

  return (
    <div className="cardThumb">
      <Link to={`/videos/${cLink}`}>
        <h3>{name}</h3>
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

export default RandomVideo;
