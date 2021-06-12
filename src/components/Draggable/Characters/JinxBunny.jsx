import React from "react";
import Jinx from "../../../img/JinxBunny.png";
import Draggable from "react-draggable";
import "../Draggable.css";

const JinxBunny = () => {
  const name = "JinxBunny";
  const char = Jinx;

  const handleStop = () => {
    console.log(`dropped ${char}`);
  };
  const handleStart = () => {
    console.log(`dragging ${char}`);
  };
  return (
    <Draggable
      onStart={handleStart}
      onStop={handleStop}
      bounds="parent"
      defaultPosition={{ x: 300, y: 400 }}
    >
      <img
        className="draggableDefault"
        draggable="false"
        src={char}
        alt={name}
        id="draggable"
      />
    </Draggable>
  );
};

export default JinxBunny;
