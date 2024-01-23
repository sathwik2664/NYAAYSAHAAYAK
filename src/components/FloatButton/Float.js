import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ChatDots, Chat } from 'react-bootstrap-icons';

const Float = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
    
    <div className={`floating-container ${showOptions ? "expanded" : ""}`}>
      <div className="floating-button" onClick={toggleOptions}>
        {showOptions ? "-" : "+"}
      </div>

      {showOptions && (
        <div className="element-container">
          <span className="float-element tooltip-left">
            <i className="material-icons">phone</i>
          </span>
          <Link to="./cont">
            <span className="float-element">
              <i className="material-icons">email</i>
            </span>
          </Link>
          <Link to="./chatbot">
            <div className="float-element">
              <i className="material-icons">chat</i>
            </div>
            </Link>
        </div>
      )}
    </div>
    </>
  );
};

export default Float;
