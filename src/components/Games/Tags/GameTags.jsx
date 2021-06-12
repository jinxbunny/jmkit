import React from 'react';

import { Link } from 'react-router-dom';

import '../Games.css';

function GameTags({ AllGames }) {
  return (
    <div className="G_Tags">
      <span className="tagsTitle">Game Tags</span>
      <ul>
        {AllGames.map((gTags) => (
          <li className="Tags" key={gTags}>
            <Link
              to={{
                pathname: `/games/tags/${gTags
                  .replace(/\s/g, '')
                  .toLowerCase()}`,
                state: {
                  taName: gTags,
                },
              }}
            >
              {gTags}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameTags;
