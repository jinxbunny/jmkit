import React from 'react';

import { Link } from 'react-router-dom';

import './Characters.css';

function CharacterThumbs({ gallery }) {
  const num = gallery.id;
  return (
    <div className="linkNoSelect">
      {gallery.map((cGallery) => (
        <div className="cGalleryThumbFrame" key={cGallery.id}>
          <Link
            to={{
              pathname: `/characters/${cGallery.urlName}`,
              state: {
                charNum: num,
              },
            }}
          >
            <img
              className="cGalleryThumb"
              src={cGallery.img1}
              alt={cGallery.name}
            />
            <p>{cGallery.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CharacterThumbs;
