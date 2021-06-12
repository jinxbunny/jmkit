import React from 'react';

const ItemsStore = ({ type, store }) => {
  return store
    .filter((product) => product.type === `${type}`)
    .map((thisStore) => (
      <div className="storeFrame behindText" key={thisStore.id}>
        <a href={thisStore.link}>
          <div className="basicText">{thisStore.name}</div>
          <div>
            <img src={thisStore.img} alt={thisStore.name} />
          </div>
          <div className="basicText">{thisStore.info}</div>
        </a>
      </div>
    ));
};

export default ItemsStore;
