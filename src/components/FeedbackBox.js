import "./FeedbackBox.css";
import React, { useState } from 'react';

export default function FeedbackBox({ t }) {
  return (
    <div className="FeedbackBox">
      <h1 className="Text">{t}</h1>
      <div className="ButtonSpace">
        <div className="Emoji" onClick={}> </div>
        <div className="Emoji"> </div>
        <div className="Emoji"> </div>
        <div className="Emoji"> </div>
        <div className="Emoji"> </div>
      </div>
    </div>
  );
}
function changeValue(){
    
}
