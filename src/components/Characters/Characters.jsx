import React from 'react';
import AllCharacters from './AllCharacters';
import CharacterThumbs from './CharacterThumbs';

import { Helmet } from 'react-helmet';

import '../Games/Games.css';

function Characters() {
  return (
    <div style={{ overflow: `auto` }}>
      <Helmet>
        <title>JMKit.com: Characters</title>
      </Helmet>
      <h1>All Characters</h1>
      <p className="pageIntro">
        <br />
        The JMKit Characters are the heart and soul of JMKit.com They are the
        reason the site was built! <br />
        Click the characters pics to learn more about their past, their traits,
        their likes, and pet peeves...
      </p>
      <br />
      <div align="center" className="characterThumbsParent">
        <CharacterThumbs gallery={AllCharacters} />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Characters;
