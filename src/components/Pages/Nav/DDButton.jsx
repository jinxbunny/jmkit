import React from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css';

const DDButton = (props) => {
  return (
    <Link to={props.link}>
      <div className="headerLink">
        <img src={props.icon} alt={props.alt} />
        <br />
        {props.title}
      </div>
    </Link>
  );
};

export default DDButton;
