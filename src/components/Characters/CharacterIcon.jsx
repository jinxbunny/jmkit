import React from 'react';
import { Link } from 'react-router-dom';

import './Characters.css';

const CharacterIcon = ({ gallery }) => {
  const num = gallery.id;
  return (
    <div className="linkNoSelect">
      <Link
        to={{
          pathname: `/characters/${gallery.urlName}`,
          state: {
            charNum: num,
          },
        }}
      >
        <div>
          <img src={gallery.img1} key={gallery.id} alt={gallery.name} />
        </div>
      </Link>
    </div>
  );
};

export default CharacterIcon;
