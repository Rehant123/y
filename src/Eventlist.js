// Eventlist.js
import React from "react";

export default function Eventlist({ events, handleClick }) {
  return (
    <div>
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>
            {event.id} - {event.title}
          </h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}
    </div>
  );
}
