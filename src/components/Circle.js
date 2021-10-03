import React from "react";
import "./Circle.css";

export default function Circle({ value, fn }) {
    emoji_n = "Emoji"+value
    const returnValue = () => {
    fn(value);
  };
  return (
    <div className={emoji_n} onClick={returnValue}>
      {" "}
    </div>
  );
}
