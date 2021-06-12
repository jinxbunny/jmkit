import React from 'react';
import AllStore from './AllStore';

import ItemsStore from './ItemsStore';

import '../Theme.css';
import './Store.css';

import Helmet from 'react-helmet';

const Store = () => {
  return (
    <div>
      <Helmet>
        <title>JMKit.com: Store</title>
      </Helmet>
      <h1>Store Page</h1>
      <div className="basicPage">
        <h3>The best place for the latest official JMKit Merch!</h3>
        <br />
        <h2>T-Shirts</h2>
        Classic Tees, Regular fit, unisex
        <div className="storeWindow">
          <ItemsStore type="T-Shirt" store={AllStore} key={AllStore.id} />
        </div>
        <h2>Hoodies</h2>
        Regular fit, kangaroo pocket, unisex
        <div className="storeWindow">
          <ItemsStore type="Hoodie" store={AllStore} key={AllStore.id} />
        </div>
        <h2>Books</h2>
        Origin stories and creative color-ins!
        <div className="storeWindow">
          <ItemsStore type="Book" store={AllStore} key={AllStore.id} />
        </div>
        <h2>Phone Cases</h2>
        Dress up your phone in JMKit
        <div className="storeWindow">
          <ItemsStore type="Phone Case" store={AllStore} key={AllStore.id} />
        </div>
      </div>
    </div>
  );
};

export default Store;
