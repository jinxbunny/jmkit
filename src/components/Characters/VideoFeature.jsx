import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//data
import AllVideos from '../Videos/AllVideos';

const VideoFeature = ({ name }) => {
  const videos = AllVideos.filter((character) =>
    character.Characters.includes(`${name}`)
  );

  let featureWord = 'Videos';

  const amount = videos.length;
  const latest = videos.slice(0, 3);

  if (amount === 1) {
    featureWord = 'Video';
  }

  const [videoAmount, setVideoAmount] = useState(latest);
  const [buttonText, setText] = useState('Show All..');

  function updateFeed() {
    if (buttonText === 'Show All..') {
      setVideoAmount(videos);
      setText('Show Less');
    } else if (buttonText === 'Show Less') {
      setVideoAmount(latest);
      setText('Show All..');
    }
  }

  useEffect(() => {
    if (amount < 4) {
      document.getElementById('videoMoreButton').style.display = 'none';
    }
    if (amount === 0) {
      document.getElementById('videoFeature').style.display = 'none';
    }
  });

  return (
    <div id="videoFeature">
      <h1 className="title">
        {name} is in {amount} {featureWord}
        <button
          id="videoMoreButton"
          className="moreButton"
          onClick={updateFeed}
        >
          {buttonText}
        </button>
      </h1>

      <div className="videoGalleryParent">
        {videoAmount.map((fVideos) => (
          <Link
            to={`/videos/${fVideos.Name.replace(/\s+/g, '').toLowerCase()}`}
          >
            <div className="videoGallery" key={fVideos.id}>
              <div>
                <img src={fVideos.Thumb} alt={fVideos.Name} />
                <div className="videoGalleryTitle">{fVideos.Name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <br />
    </div>
  );
};

export default VideoFeature;
