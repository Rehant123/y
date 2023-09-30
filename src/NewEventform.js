import { useState } from "react";
import "./newevent.css";

export default function NewEventform({ events }) {
  const [data, setdata] = useState({ title: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value
    });
  };

  const reset = () => {
    setdata({ title: "", date: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey there");
    events.push(data);
    reset();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title: </span>
        <input name="title" onChange={handleChange} />
      </label>
      <label>
        <span>Event Date: </span>
        <input name="date" type="date" onChange={handleChange} />
      </label>
      <button type="submit" onClick={() => console.log(data)}>
        Submit
      </button>
      <h6>{data.title}</h6>
      <h6>{data.date}</h6>
      <p onClick={reset}>Reset the form</p>
    </form>
  );
}
