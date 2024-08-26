// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [inputValue, setInputValue] = useState(currentNOE);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setCurrentNOE(event); // Call the parent handler
  };

  return (
    <div>
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        id="number-of-events-input"
        role ="number-of-events-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        aria-label="Number of Events"
      />
    </div>
  );
};

export default NumberOfEvents;
