import React, { useEffect } from 'react';
import AllGames from '../AllGames';
import AllCharacters from '../../Characters/AllCharacters';
import GameThumbs from '../GameThumbs';

import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../Games.css';

function GameTagCResults() {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const location = useLocation();

  let taName = location.state.taName;
  let games = AllGames.filter((character) =>
    character.gCharacters.includes(`${taName}`)
  );
  let amount = games.length;

  function searchChars(character) {
    return character.name === taName;
  }

  //get the current character's image
  let characterPic = AllCharacters.find(searchChars).img1;
  let characterInfo = AllCharacters.find(searchChars).info[0];
  let characterLink = AllCharacters.find(searchChars).urlName;

  return (
    <div>
      <Helmet>
        <title>JMKit.com: Tags: {taName}</title>
      </Helmet>
      <ScrollToTopOnMount />
      <h1 className="tagsTitle">
        These {amount} Games feature {taName}
      </h1>
      <div className="whatCharacter">
        <Link
          to={{
            pathname: `/characters/${characterLink}`,
          }}
        >
          <img src={characterPic} alt={taName} />
        </Link>
        <p className="characterInfo">{characterInfo}</p>
      </div>
      <br />
      <div className="gameGalleryParent">
        {AllGames.filter((character) =>
          character.gCharacters.includes(`${taName}`)
        ).map((filteredGames) => (
          <GameThumbs key={filteredGames.id} gallery={filteredGames} />
        ))}
      </div>
      <br /> <br /> <br />
    </div>
  );
}

export default GameTagCResults;
