import React from "react";
import "./Circle.css";

export default function Circle({ value, fn }) {
    const emoji_n = "Emoji"+value
    const returnValue = () => {
    fn(value);
  };
  return (
    <div className="Emoji1" onClick={returnValue}>
      {" "}
    </div>
  );
}
