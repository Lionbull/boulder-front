import "./FeedbackBox.css";
import Circle from "./Circle";
import React, { useState } from "react";

export default function FeedbackBox({ t, fn }) {
  return (
    <div className="FeedbackBox">
      <h1 className="Text">{t}</h1>
      <div className="ButtonSpace">
        <Circle fn={fn} value={1}/>
        <Circle fn={fn} value={2}/>
        <Circle fn={fn} value={3}/>
        <Circle fn={fn} value={4}/>
        <Circle fn={fn} value={5}/>
      </div>
    </div>
  );
}
