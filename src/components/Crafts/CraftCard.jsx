import React from 'react';
import { Link } from 'react-router-dom';
import AllCrafts from './AllCrafts';

const CraftCard = () => {
  let randCraft = (Math.random() * AllCrafts.length) | 0;
  // const [num, setnum] = useState(randCraft);

  let name = AllCrafts[randCraft].Name;
  let img = AllCrafts[randCraft].Img;
  let type = AllCrafts[randCraft].Type;

  return (
    <div className="behindText">
      <Link to={`/crafts/${randCraft}`}>
        <h2>
          Get Crafty..
          <br />
          <br />
          With this {name} {type}
        </h2>
        <br />
        <img src={img} alt={name} />
      </Link>
      <br />
      <br />
      <Link to={`/crafts/`}>
        <div className="colorButton">
        <h3>See All Crafts </h3>
        </div>
      </Link>
    </div>
  );
};

export default CraftCard;
