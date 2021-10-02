import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import FeedbackBox from "./components/FeedbackBox";

function App() {
  return (
    <div className="App">
      <FeedbackBox t="Overall Feedback:" />
      <FeedbackBox t="Service Feedback:" />
      <button className="Button" onClick={callAPI}>
        Submit
      </button>
    </div>
  );
}

function callAPI() {
  console.log("Clicked!");
  //const response = await axios.get("");
}

export default App;
