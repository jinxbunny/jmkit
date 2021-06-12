import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import useBrowserWindowSize from 'usebrowserwindowsize';

import GameTags from './Tags/GameTags';
import GameCTags from './Tags/GameCTags';

import Hyvor from '../Chat/Hyvor';
import HyvorTalk from 'hyvor-talk-react';
import { HashLink } from 'react-router-hash-link';

import './Games.css';
import '../Theme.css';

const GamePageMain = (props) => {
  const game = props.game;
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  }

  const GameBox = () => {
    const [windowWidth] = useBrowserWindowSize();
    if (windowWidth <= game.gWidth && game.tech === 'HTML5') {
      return (
        <div>
          <a href={game.gamelink} className="gameLink">
            <img src={game.Thumb} alt="Game Thumbnail" />
            <br />
            Play Full Screen
          </a>
        </div>
      );
    } else if (windowWidth <= game.gWidth && game.tech !== 'HTML5') {
      return (
        <div>
          <div className="gameLink">
            <img src={game.Thumb} alt="Game Thumbnail" />
            <br />
            Not yet available on this device
          </div>
        </div>
      );
    }
    if (game.tech === 'AS3') {
      return (
        <div>
          <div className="gameLink">
            <img src={game.Thumb} alt="Game Thumbnail" />
            <br />
            <br />
            This game was built using Flash AS3, only AS2 Flash games are
            currently working..
            <br />
            <br /> We're looking into ways to bring ALL JMKit games back!
            <br />
            <br />
            <a href="https://www.jmkit.com/games/">All Games</a>
          </div>
        </div>
      );
    } else if (game.tech === 'DUH') {
      return (
        <div>
          <Helmet>
            <script
              type="text/javascript"
              src="https://st.wgplayer.com/dressupwho.com/wgAds.desktop.conf.js"
            ></script>
            <script
              type="text/javascript"
              src="https://st.wgplayer.com/dressupwho.com/js/dM2r3UZsvqR9kWnN00LrJQ/2319038007/wgAds.js"
            ></script>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
            />
          </Helmet>
          <div
            id="mygame"
            styleName="position:absolute"
            width={game.gWidth}
            height={game.gHeight}
          >
            <canvas />
          </div>
          <embed
            id="myframe"
            src={game.gamelink}
            styleName="position: absolute;"
            width={game.gWidth}
            height={game.gHeight}
            frameborder="0"
            scrolling="no"
          />
        </div>
      );
    } else {
      return (
        <div>
          <embed
            className="gameArea"
            width={game.gWidth}
            height={game.gHeight}
            src={game.gamelink}
            title={game.Name}
          />
        </div>
      );
    }
  };

  const WEBSITE_ID = 1987;
  const CONDENSEDTITLE = game.Name.replace(/\s/g, '').toLowerCase();
  const PAGE_ID = game.id + CONDENSEDTITLE;

  let CharacterTags;
  let GameUpdate;

  if (game.gCharacters) {
    CharacterTags = <GameCTags AllGames={game.gCharacters} />;
  } else {
    CharacterTags = '';
  }

  return (
    <div>
      <Helmet>
        <title>JMKit.com: {game.Name}</title>
      </Helmet>
      <ScrollToTopOnMount />
      <div>
        <p className="title">{game.Name}</p>
        <div className="commentCount">
          <HashLink to="#chat">
            <HyvorTalk.CommentCount websiteId={WEBSITE_ID} id={PAGE_ID} />
          </HashLink>
        </div>
        <br />
        <GameBox />
        <p>{GameUpdate}</p>
        <div className="gameUnder">
          <img className="gameThumb" src={game.Thumb} alt="Game Thumbnail" />
          <div>
            <p className="gameInfo">{game.gAbout}</p>
          </div>
          <br />
        </div>
        <br />
        <GameTags AllGames={game.gTags} />
        {CharacterTags}
        <br />
        <br />
        <div id="chat">
          <Hyvor WEBSITE_ID={WEBSITE_ID} PAGE_ID={PAGE_ID} />
        </div>
      </div>
    </div>
  );
};

export default GamePageMain;
