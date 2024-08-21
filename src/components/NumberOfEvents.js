// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ numberOfEvents, onNumberOfEventsChange }) => {
  const [inputValue, setInputValue] = useState(numberOfEvents);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onNumberOfEventsChange(event); // Call the parent handler
  };

  return (
    <div>
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        id="number-of-events-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        aria-label="Number of Events"
      />
    </div>
  );
};

export default NumberOfEvents;
