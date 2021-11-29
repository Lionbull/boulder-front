import "./App.css";
import axios from "axios";
import FeedbackBox from "./components/FeedbackBox";
import React, { useState, useEffect } from "react";
import config from "./config.json"
import logo from "./logo.png"

function App() {
  const [overall_r, setOverall_r] = useState(0);
  const [staff_r, setStaff_r] = useState(0);

  const getOverallValue = (value) => {
    setOverall_r(value);
  };
  const getStaffValue = (value) => {
    setStaff_r(value);
  };

  useEffect(() => {
    console.log(overall_r);
  }, [overall_r]);

  useEffect(() => {
    console.log(staff_r);
  }, [staff_r]);

  const callApi = async () => {
    console.log("Clicked!");
    const response = await axios.get({
      method: "post",
      url: "",
      data: {
        overall_feedback: overall_r,
        staff_feedback: staff_r,
      },
    });
  };

  return (
    <div className="App" style={{background: config.style.primary_bg}}>
      <img id="logo" src={logo} />
      <div className="content" >
        <FeedbackBox t={"Overall feedback"} />
        <FeedbackBox t={"Service feedback"} />
        <button className="Button" onClick={callApi}>
          Submit
        </button>
      </div>
      <div className="bg_lower" style={{background: config.style.secondary_bg}} ></div>
    </div>
  );
}

export default App;
