import React from 'react';

import { Link } from 'react-router-dom';

import AllCharacters from '../../Characters/AllCharacters';

import '../Games.css';

function GameCTags({ AllGames }) {
  return (
    <div>
      <span className="tagsTitle">
        <span role="img" aria-label="star">
          &#127775;
        </span>{' '}
        Starring:{' '}
        <span role="img" aria-label="star">
          &#127775;
        </span>
      </span>
      <div className="charTags">
        {AllGames.map((gChars) => (
          <div key={gChars}>
            <Link
              to={{
                pathname: `/characters/${gChars
                  .replace(/\s/g, '')
                  .toLowerCase()}`,
                state: {
                  taName: gChars,
                },
              }}
            >
              {AllCharacters.filter(
                (character) => character.name === `${gChars}`
              ).map((filteredCharacter) => (
                <img
                  className="thumbU"
                  src={filteredCharacter.img1}
                  alt={filteredCharacter.name}
                />
              ))}
              <br />
              {gChars}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameCTags;
