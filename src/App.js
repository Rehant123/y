import React, { useState } from "react";
import Title from "./Title";
import Modal from "./Modal";
import NewEventform from "./NewEventform";
import Eventlist from "./Eventlist";
import "./styles.css"; // Make sure this path is correct

export default function App() {
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", date: "", id: 1 },
    { title: "Bowser's live stream", date: "", id: 2 },
    { title: "Race on Moo Moo Farm", date: "", id: 3 }
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id);
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const handleEventsToggle = () => {
    setShowEvents(!showEvents);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title title="Birthday bash" subtitle="Happy Birthday" />
      <button onClick={handleEventsToggle}>
        {showEvents ? "Hide" : "Show"} Events
      </button>
      {showEvents && <Eventlist events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleCloseModal}>
          <NewEventform events={events} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(!showModal)}>Add New Event</button>
      </div>
    </div>
  );
}
