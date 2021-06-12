import React from "react";
import Draggable from "react-draggable";

import { ReactComponent as ThePlant } from "../../../img/SVG/plant.svg";

import "../Draggable.css";
import "./Plant.css";

const plantStyle = {
  width: "70px",
};

const Plant = () => {
  return (
    <Draggable bounds="parent" defaultPosition={{ x: 440, y: 300 }}>
      <ThePlant alt="plant" style={plantStyle} className="plantPot" />
    </Draggable>
  );
};

export default Plant;
