// src/App.js
import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import NumberofEvents from './components/NumberofEvents';
import CitySearch from './components/CitySearch';
import './App.css';
import { extractLocations, getEvents } from './api';


const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(20);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = await getEvents
    ();
    const filteredEvents = currentCity === 'See all cities' ? allEvents: allEvents.filter( event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, [currentCity]);



  return (
    <div className="App">
      <CitySearch 
      allLocations = {allLocations}
      setCurrentCity = {setCurrentCity}
        />
      <NumberofEvents/>  
      <EventList events = {events}/>
      
    </div>
  );
}

export default App;
