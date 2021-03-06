import React, {useState} from 'react';
import Event from './Event';


const CalendarBanner = (props) => {
  
  const [opened, setOpened] = useState(false)
  
  
  if (!props.events){
    return(
      <p>Loading events....</p>
    )
  }
  
  const changeOpened = () => {
    if (opened){
      setOpened(false);
    } else {
      setOpened(true);
    }
  }
  
  const eventsList = props.events.slice(0, 5).map((event) => {
    return (
      <li key={event.id}>
      <Event event={event} />
      </li>
    )
  })
  
  if (!opened){
    return(
      <div className="banner">
      <ul>
      <li>
      <Event event={props.events[0]} />
      </li>
      </ul>
      <button onClick={() => {changeOpened()}} className="calendar-button">Expand</button>
      </div>
    )
  }
  
  if (opened){
    return(
      <div className="banner">
      <ul>
      {eventsList}
      </ul>
      <button onClick={() => {changeOpened()}} className="calendar-button">Collapse</button>
      </div>
    )
  }
  
}

export default CalendarBanner;
