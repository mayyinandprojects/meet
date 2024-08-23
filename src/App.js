// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");



  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, [currentCity]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE}/>
      <EventList events={events} />
    </div>
  );
}

export default App;





// const App = () => {
//   const [allLocations, setAllLocations] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [numberOfEvents, setNumberOfEvents] = useState(32);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const events = await getEvents();
//       const locations = extractLocations(events);
//       setAllLocations(locations);
//       setEvents(events.slice(0, numberOfEvents));
//     };

//     fetchEvents();
//   }, [numberOfEvents]);

//   const handleNumberOfEventsChange = (event) => {
//     setNumberOfEvents(event.target.value);
//   };

//   return (
//     <div className="App">
//       <CitySearch allLocations={allLocations} />
//       <NumberOfEvents numberOfEvents={numberOfEvents} onNumberOfEventsChange={handleNumberOfEventsChange} />
//       <EventList events={events} />
//     </div>
//   );
// }

// export default App;
