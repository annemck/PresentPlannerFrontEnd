import React from 'react';


const Event = (props) => {
  
  if (!props.event){
    return(
      <p>Loading event...</p>
    )
  }
  
  return (
    <p>It is {props.event.person.name}'s {props.event.eventName} in {props.event.days} days</p>
  )
}

export default Event;
