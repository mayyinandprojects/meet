// src/App.js
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents'; // Ensure import is correct
import { useState, useEffect } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      const locations = extractLocations(events);
      setAllLocations(locations);
      setEvents(events.slice(0, numberOfEvents));
    };

    fetchEvents();
  }, [numberOfEvents]);

  const handleNumberOfEventsChange = (event) => {
    setNumberOfEvents(event.target.value);
  };

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents numberOfEvents={numberOfEvents} onNumberOfEventsChange={handleNumberOfEventsChange} />
      <EventList events={events} />
    </div>
  );
}

export default App;
