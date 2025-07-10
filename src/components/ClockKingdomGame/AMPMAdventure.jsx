import React from "react";

const AMPMAdventure = ({ currentQuestion, handleAMPMAnswer, showFeedback }) => {
  return (
    <div className="ampm-game">
      <div className="question-scene">
        <div className="scene-illustration">{currentQuestion.scene}</div>
        <h3 className="question-text">{currentQuestion.question}</h3>
        <p className="scene-description">{currentQuestion.description}</p>
      </div>
      <div className="ampm-options">
        <button
          className="ampm-btn am-btn"
          onClick={() => handleAMPMAnswer("AM")}
          disabled={showFeedback !== ""}
        >
          🌅 AM
        </button>
        <button
          className="ampm-btn pm-btn"
          onClick={() => handleAMPMAnswer("PM")}
          disabled={showFeedback !== ""}
        >
          🌙 PM
        </button>
      </div>
    </div>
  );
};

export default AMPMAdventure;
