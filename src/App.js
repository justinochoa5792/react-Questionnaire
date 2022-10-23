import React, { useState } from "react";
import question from "./question.json";
import "./App.css";

function App() {
  const [current, SetCurrent] = useState(0);
  let Question = question.map((item) => item.Question);

  const answerQuestion = (e) => {
    if (e.target.id === "yes") {
      return SetCurrent(current + 1);
    } else {
      return current;
    }
  };

  return (
    <div className="App">
      <h1>Questionnaire</h1>
      {current < 3 ? (
        <div className="form">
          {Question[current]}
          <div className="btns">
            <button id="yes" onClick={answerQuestion}>
              Yes
            </button>
            <button id="no" onClick={answerQuestion}>
              No
            </button>
          </div>
        </div>
      ) : (
        "Thank you "
      )}
    </div>
  );
}

export default App;
