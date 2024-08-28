// src/components/NumberOfEvents.js
import React, { useState, useEffect } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [inputValue, setInputValue] = useState(currentNOE);


  const handleInputChange = (event) => {
    const value = Number(event.target.value); // Convert to number if needed
    setInputValue(value);
    setCurrentNOE(value); // Pass the value, not the event

    let infoText;
    if (value  <= 0 && isNaN()) {
      infoText =
        "Only positive numbers are allowed";
    } else {
      infoText = "";
    }
    setErrorAlert(infoText);
  
  };

  useEffect(() => {
    setCurrentNOE(currentNOE);
  }, currentNOE);

  return (
    <div>
      <h4><label htmlFor="number-of-events-input">Number of Events: </label></h4>
      <input
        id="number-of-events-input"
        role ="number-of-events-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        aria-label="Number of Events"
      />
      <hr />
    </div>
  );
};

export default NumberOfEvents;
