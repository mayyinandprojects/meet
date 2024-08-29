import Header from './components/Header'; 
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import EventGenresChart from './components/EventGenresChart';
import CityEventsChart from './components/CityEventsChart';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE)); 
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert(""); // Clear the warning alert message
    } else {
      setWarningAlert("You are currently offline. Some features may be unavailable."); // Set the warning alert message
    }
    fetchData();
  }, [currentCity, currentNOE]); 

  return (
    <div className="App">
       <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <Header />
      <CitySearch 
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} />
      <NumberOfEvents 
      currentNOE={currentNOE} 
      setCurrentNOE={setCurrentNOE} 
      setErrorAlert={setErrorAlert}/>
      <div className="charts-container">
      <EventGenresChart events={events} />
      <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
      <Footer />
    </div>
  );
}

export default App;
