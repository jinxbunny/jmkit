import React from 'react';
import { Link } from 'react-router-dom';
import RandomCharacter from './RandomCharacter';
import RandomVideo from './RandomVideo';
import RandomGame from './RandomGame';
import './Card.css';

const Card = (props) => {
  let mainContent;

  if (props.type === 'Characters') {
    mainContent = <RandomCharacter />;
  } else if (props.type === 'Videos') {
    mainContent = <RandomVideo />;
  } else if (props.type === 'Games') {
    mainContent = <RandomGame />;
  }

  return (
    <div className="behindText">
      <div>
        <h3>{props.header}</h3>
      </div>
      <div className="cardMiddle">{mainContent}</div>
      <Link to={props.link}>
        <div className="cardLink">See All {props.type}</div>
      </Link>
    </div>
  );
};

export default Card;
