import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AllComics from './AllComics';
import AllCharacters from '../Characters/AllCharacters';

import Comics from './Comics';

import '../Theme.css';
import './Comics.css';

const ComicStrip = () => {
  const Route = useRouteMatch();
  const thisComic = Route.url.split('/comics/').pop().replace('/', '');

  return (
    <div>
      <h1>Comics</h1>
      <div className="basicPage">
        <div>
          {AllComics.filter((comic) => comic.shortName === `${thisComic}`).map(
            (filteredComic) => (
              <div>
                <h1>{filteredComic.Name}</h1>
                <img
                  className="viewer"
                  src={filteredComic.Img}
                  alt={filteredComic.Name}
                />
                )
                <br />
                <span className="tagsTitle">
                  <span role="img" aria-label="star">
                    &#127775;
                  </span>{' '}
                  Starring: &
                  <span role="img" aria-label="star">
                    #127775;
                  </span>
                </span>
                <div className="flexy">
                  {filteredComic.Characters.map((Chars) => (
                    <div key={Chars} className="basicText">
                      <Link to={`/characters/${Chars.toLowerCase()}`}>
                        {AllCharacters.filter(
                          (character) => character.name === `${Chars}`
                        ).map((filteredCharacter) => (
                          <img
                            className="thumbU"
                            src={filteredCharacter.img1}
                            alt={filteredCharacter.name}
                          />
                        ))}
                        <br />
                        {Chars}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <Comics />
      </div>
    </div>
  );
};

export default ComicStrip;
