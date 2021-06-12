import React from 'react';
import { Helmet } from 'react-helmet';

import Info from './Sections/Info';
import Traits from './Sections/Traits';
import Likes from './Sections/Likes';
import Dislikes from './Sections/Dislikes';
import Trivia from './Sections/Trivia';

import GameFeature from './GameFeature';
import MerchFeature from './MerchFeature';
import ComicFeature from './ComicFeature';
import VideoFeature from './VideoFeature';

import Hyvor from '../Chat/Hyvor';
import HyvorTalk from 'hyvor-talk-react';
import { HashLink } from 'react-router-hash-link';

const CharacterPageMain = ({ thisCharacter }) => {
  const name = thisCharacter.name;

  const WEBSITE_ID = 1987;
  const CONDENSEDTITLE = name.toLowerCase();
  const PAGE_ID = thisCharacter.id + CONDENSEDTITLE;
  return (
    <div>
      <Helmet>
        <title>JMKit.com: {thisCharacter.name}</title>
      </Helmet>
      <div align="center">
        <h1 className="title">{thisCharacter.name}</h1>
        <div className="commentCount">
          <HashLink to="#chat">
            <HyvorTalk.CommentCount websiteId={WEBSITE_ID} id={PAGE_ID} />
          </HashLink>
        </div>
        <img className="thumbP" src={thisCharacter.img1} alt={name} />
        <br />
        <br />
        <div className="notePage">
          <div className="ringsTopper">{''}</div>
          <br />
          <div className="charUnder">
            <Info thisChar={thisCharacter} />
          </div>
          <div className="TLD">
            <Traits thisChar={thisCharacter} />
            <Likes thisChar={thisCharacter} />
            <Dislikes thisChar={thisCharacter} />
          </div>
          <div className="trivia">
            <Trivia thisChar={thisCharacter} />
          </div>
          <br />
          <br />
        </div>
      </div>
      <div id="chat">
        <Hyvor WEBSITE_ID={WEBSITE_ID} PAGE_ID={PAGE_ID} />
      </div>
      <div className="feature">
        <GameFeature name={name} />
      </div>
      <div className="feature">
        <VideoFeature name={name} />
      </div>
      <div className="feature">
        <ComicFeature name={name} />
      </div>
      <div className="feature">
        <MerchFeature name={name} />
      </div>
    </div>
  );
};

export default CharacterPageMain;
