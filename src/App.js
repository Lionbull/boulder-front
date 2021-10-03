import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import FeedbackBox from "./components/FeedbackBox";
import React, { useState, useEffect } from "react";


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
    <div className="App">
      <FeedbackBox t="Overall Feedback:" fn={getOverallValue} />
      <FeedbackBox t="Service Feedback:" fn={getStaffValue} />
      <button className="Button" onClick={callAPI}>
        Submit
      </button>
    </div>
  );
}

export default App;
