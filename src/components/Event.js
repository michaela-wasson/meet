//src/components/Event.js

import {useState} from "react"



const Event = ({event}) => {
    const [showDetails, setShowDetails] = useState(false);


    return (
        <li className = 'event'>
            <div> 
            <h3 className = 'eventTitle'>{event.summary}</h3>
            
            <p className= 'eventLocation'> {event.location}</p>
            <p className = 'eventTime'> {event.start.dateTime}</p>
            </div>

        {showDetails ? (
        <div className='details' >
          <p>{event.description}</p>
          
        </div> 
      ) : null}
      <button 
        id="show-details-btn"
        className='details-btn'
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'hide details' : 'show details'}
      </button>



        </li>
    );
}

export default Event;