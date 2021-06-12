import React, { useState, useEffect } from 'react';
import '../Store/Store.css';

//data
import AllStore from '../Store/AllStore';

const MerchFeature = ({ name }) => {
  const store = AllStore.filter((character) =>
    character.characters.includes(`${name}`)
  );

  const amount = store.length;
  const latest = store.slice(0, 2);

  const [storeAmount, setStoreAmount] = useState(latest);
  const [buttonText, setText] = useState('Show All..');

  function updateFeed() {
    if (buttonText === 'Show All..') {
      setStoreAmount(store);
      setText('Show Less');
    } else if (buttonText === 'Show Less') {
      setStoreAmount(latest);
      setText('Show All..');
    }
  }

  useEffect(() => {
    if (amount === 0) {
      document.getElementById('merchFeature').style.display = 'none';
    }
    if (amount < 5) {
      document.getElementById('storeMoreButton').style.display = 'none';
    }
  });

  return (
    <div id="merchFeature" className="merchFeature">
      <h1 className="title">
        Check out {name}'s Merch!
        <button
          id="storeMoreButton"
          className="moreButton"
          onClick={updateFeed}
        >
          {buttonText}
        </button>
      </h1>
      <div className="feature">
        {storeAmount.map((fStore) => (
          <div className="storeFrame2" key={fStore.id}>
            <div className="behindText">
              <a href={fStore.link}>
                <div className="basicText">{fStore.name}</div>
                <br />
                <div>
                  <img src={fStore.img} alt={fStore.name} />
                </div>
                <div className="basicText">{fStore.info}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default MerchFeature;
