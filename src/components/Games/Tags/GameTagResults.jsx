import React from 'react';
import { Link } from 'react-router-dom';

import AllGames from '../AllGames';
import GameThumbs from '../GameThumbs';

import {useRouteMatch } from 'react-router';
import { Helmet } from 'react-helmet';

import '../Games.css';

const  GameTagResults = ()=> {
  const Route = useRouteMatch();
  const thisTag = Route.url.split('/games/tags/').pop();
  const clearTag = thisTag.replace('/', '');
  const Tag = clearTag.charAt(0).toUpperCase() + clearTag.substring(1);


  return (
    <div>
      <Helmet>
        <title>JMKit.com: Tag: {Tag}</title>
      </Helmet>
      <h1 className="tagsTitle">{Tag} Games</h1>
      <div className="gameGalleryParent">
        {AllGames.filter((gameTags) =>
          gameTags.gTags.includes(`${Tag}`)
        ).map((filteredGames) => (
          <GameThumbs key={filteredGames.id} gallery={filteredGames} />
        ))}
      </div>
      <br />
      <div align="center">
        <Link to={{ pathname: `/games/`}} >
          <div classsname="seeAllBtn">
          <h3>See All Games </h3>
          </div>
          </Link>
      </div>
      <br /> <br />
    </div>
  );
}

export default GameTagResults;
