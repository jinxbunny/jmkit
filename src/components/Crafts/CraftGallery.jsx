import React from 'react';
import AllCrafts from './AllCrafts';

import { Link } from 'react-router-dom';

const CraftGallery = () => {
  return AllCrafts.map((Craft) => (
    <div className="gallery1" key={Craft.id}>
      <Link to={`/crafts/${Craft.id}`}>
        <h3>{Craft.Name}</h3>
        <div>
          <img src={Craft.Thumb} alt={Craft.Name} />
        </div>
      </Link>
    </div>
  ));
};

export default CraftGallery;
