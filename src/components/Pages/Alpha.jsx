import React from "react";

import "../Draggable/Draggable.css";

import JinxBunny from "../Draggable/Characters/JinxBunny";
import MinxBunny from "../Draggable/Characters/MinxBunny";
import Plant from "../Draggable/Characters/Plant";
import PlantPot from "../Draggable/Characters/PlantPot";

const Alpha = () => {
  return (
    <div>
      <h1>Alpha test drabbagles!</h1>
      <div className="dragParent">
        <div className="DragArea">
          <JinxBunny />
          <MinxBunny />
          <Plant />
          <PlantPot width={130} />
        </div>
      </div>
    </div>
  );
};

export default Alpha;
