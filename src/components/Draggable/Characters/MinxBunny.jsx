import React from "react";
import Minx from "../../../img/MinxBunny.png";
import Draggable from "react-draggable";
import "../Draggable.css";

const MinxBunny = () => {
  const name = "MinxBunny";
  return (
    <Draggable bounds="parent" defaultPosition={{ x: 340, y: 400 }}>
      <img
        src={Minx}
        alt={name}
        draggable="false"
        className="draggableDefault"
      />
    </Draggable>
  );
};

export default MinxBunny;
