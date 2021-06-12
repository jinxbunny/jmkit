import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//data
import AllComics from '../Comics/AllComics';

const ComicFeature = ({ name }) => {
  const comics = AllComics.filter((character) =>
    character.Characters.includes(`${name}`)
  );

  const amount = comics.length;
  const latest = comics.slice(0, 4);

  const [comicAmount, setComicAmount] = useState(latest);
  const [buttonText, setText] = useState('Show All..');

  function updateFeed() {
    if (buttonText === 'Show All..') {
      setComicAmount(comics);
      setText('Show Less');
    } else if (buttonText === 'Show Less') {
      setComicAmount(latest);
      setText('Show All..');
    }
  }

  useEffect(() => {
    if (amount === 0) {
      document.getElementById('comicFeature').style.display = 'none';
    }
    if (amount < 5) {
      document.getElementById('comicMoreButton').style.display = 'none';
    }
  });

  return (
    <div id="comicFeature">
      <h1 className="title">
        {name} is in {amount} Comics
        <button
          id="comicMoreButton"
          className="moreButton"
          onClick={updateFeed}
        >
          {buttonText}
        </button>
      </h1>
      <div className="feature">
        {comicAmount.map((fComics) => (
          <Link
            to={`/comics/${fComics.Name.replace(/\s+/g, '').toLowerCase()}`}
          >
            <div className="comicGallery" key={fComics.id}>
              <div
                className="comicLink"
                style={{ backgroundImage: `url(${fComics.Img}` }}
              />
              <div className="feature">{fComics.Name}</div>
            </div>
          </Link>
        ))}
        <br />
      </div>
    </div>
  );
};

export default ComicFeature;
