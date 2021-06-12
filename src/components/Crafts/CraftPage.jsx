import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import AllCrafts from './AllCrafts';

const CraftPage = () => {
  const location = useLocation();
  const num = location.pathname.split('/').pop();

  return (
    <div className="basicPage">
      <h1>{AllCrafts[num].Name}</h1>
      <img src={AllCrafts[num].Thumb} alt={AllCrafts[num].Name} />
      <a href={AllCrafts[num].File} target="_blank" rel="noopener noreferrer">
        <div className="parentCenter">
          <div className="behindText downloadBtn">Download PDF</div>
        </div>
      </a>
      <br />
      <h2>{AllCrafts[num].About}</h2>
      <br />
      <div className="flexy">
        <Link to={`/crafts/`}>All Crafts</Link>{' '}
        {AllCrafts[num].cCharacters.map((Chars) => (
          <div key={Chars}>
            &nbsp;|&nbsp;
            <Link to={`/characters/${Chars.toLowerCase()}`}>
              {Chars + ` Profile`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftPage;
