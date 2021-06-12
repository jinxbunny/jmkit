import React from 'react';
import './Games.css';
import { Link } from 'react-router-dom';

function GameThumbs({ gallery }) {
  const num = gallery.id;

  return (
    <div className="linkNoSelect">
      <Link
        to={{
          pathname: `/games/${gallery.urlName}`,
          state: {
            gameNum: num,
            gameName: gallery.Name,
          },
        }}
      >
        <div className="gGalleryThumbFrame">
          <div>
            <div
              style={{
                margin: `4px`,
                backgroundImage: `url(${gallery.Thumb})`,
                backgroundSize: `cover`,
                height: `120px`,
                borderRadius: `10px`,
              }}
            ></div>
            <p>{gallery.Name}</p>
            <div className="tech">{gallery.tech}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GameThumbs;
