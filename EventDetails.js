import React from "react";

function EventDetails({ event, availableTickets }) {
  return (
    <div className="card">
      <h2>📅 Event Details</h2>
      <p><b>Event Name:</b> {event.name}</p>
      <p><b>Department:</b> {event.department}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Time:</b> {event.time}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Ticket Price:</b> ₹{event.price}</p>
      <p><b>Available Tickets:</b> {availableTickets}</p>
    </div>
  );
}

export default EventDetails;