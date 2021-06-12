import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllStore from './AllStore';

import '../Pages/Sections.css';

const StoreSample = () => {
  let randItem = (Math.random() * AllStore.length) | 0;

  function reload() {
    randItem = (Math.random() * AllStore.length) | 0;
    setItemNum(randItem);
  }
  const [itemNum, setItemNum] = useState(randItem);

  useEffect(() => {
    setTimeout(() => {
      reload();
    }, 10000);
  });

  return (
    <div className="behindText">
      <div className="storeSample">
        <h2>What's In Store</h2>
        <a
          href={AllStore[itemNum].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          <h4>
            Check out this {AllStore[itemNum].type}..
            <br />
            {AllStore[itemNum].name}
          </h4>
          <img src={AllStore[itemNum].img} alt={AllStore[itemNum].name} />
        </a>
       
        <Link to={'/store'}>
        <div className="colorButton">
          <h3>JMKit Store</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StoreSample;
