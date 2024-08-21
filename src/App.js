// src/App.js
import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import NumberofEvents from './components/NumberofEvents';
import CitySearch from './components/CitySearch';
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);

  return (
    <div className="App">
      <CitySearch 
      allLocations = {allLocations}
        />
      <EventList />
      <NumberofEvents/>
    </div>
  );
}

export default App;
