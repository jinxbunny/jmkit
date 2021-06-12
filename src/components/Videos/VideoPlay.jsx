import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import Videos from './Videos';

import AllVideos from './AllVideos';
import AllCharacters from '../Characters/AllCharacters';
import './Videos.css';

const VideoPlay = () => {
  const Route = useRouteMatch();
  const thisVideo = Route.url.split('/videos/').pop().replace('/', '');
  return (
    <div>
      <h1>Videos</h1>
      <div className="basicPage">
        <div>
          {AllVideos.filter((video) => video.shortName === `${thisVideo}`).map(
            (filteredVideos) => (
              <div>
                <h3>Now Playing: {filteredVideos.Name}</h3>
                <br />
                <iframe
                  title="videoPlayer"
                  className="videoFrame"
                  src={`${filteredVideos.Video}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <br />
                <br />
                <span className="tagsTitle">&#127775; Starring: &#127775;</span>
                <div className="vidTags">
                  {filteredVideos.Characters.map((Vids) => (
                    <div key={Vids} className="basicText">
                      <Link to={`/characters/${Vids.toLowerCase()}`}>
                        {AllCharacters.filter(
                          (character) => character.name === `${Vids}`
                        ).map((filteredCharacter) => (
                          <img
                            className="thumbU"
                            src={filteredCharacter.img1}
                            alt={filteredCharacter.name}
                          />
                        ))}
                        <br />
                        {Vids}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <Videos />
      </div>
    </div>
  );
};

export default VideoPlay;
