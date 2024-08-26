import { useState } from 'react';

const Event = ({ event }) => {
  // State to manage whether event details are shown or hidden
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle the visibility of event details
  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
  };

  // Safeguard to avoid errors if event.start or event.start.dateTime is undefined
  const eventStartTime = event.start?.dateTime
    ? new Date(event.start.dateTime).toLocaleString()
    : 'Start time not available';

  // console.log(event);

  return (
    <li className="event" role="listitem">
      {/* Test 1: Render event title */}
      <h2 className="event-title">{event.summary || 'No Title Available'}</h2>

      {/* Test 2: Render event start time with a fallback value */}
      <p className="event-time">{eventStartTime}</p>

      {/* Test 3: Render event location */}
      <p className="event-location">{event.location || 'Location not available'}</p>

      {/* Show "Show details" or "Hide details" button based on state */}
      <button className="details-button btn-primary" onClick={handleDetailsToggle}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>

      {/* Conditionally render the event details based on showDetails state */}
      {showDetails && (
        <div className="event-details">
          {/* Test 5: Render event description with a fallback value */}
          <p className="event-description">{event.description || 'No description available'}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
