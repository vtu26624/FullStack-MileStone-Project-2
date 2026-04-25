import React, { useState } from "react";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import "./App.css";

function App() {
  const [availableTickets, setAvailableTickets] = useState(50);
  const [booking, setBooking] = useState(null);

  const event = {
    name: "Tech Fest 2026",
    department: "Computer Science",
    date: "20 April 2026",
    time: "10:00 AM",
    venue: "Auditorium",
    price: 100,
  };

  const handleBooking = (data) => {
    setAvailableTickets(availableTickets - data.tickets);
    setBooking(data);
  };

  return (
    <div className="container">
      <h1>🎟 Ticket Booking System</h1>

      <EventDetails event={event} availableTickets={availableTickets} />

      <BookingForm
        availableTickets={availableTickets}
        onBook={handleBooking}
      />

      {/* Conditional Rendering */}
      {booking && (
        <div className="summary">
          <h2>✅ Booking Summary</h2>
          <p><b>Name:</b> {booking.name}</p>
          <p><b>Event:</b> {event.name}</p>
          <p><b>Tickets:</b> {booking.tickets}</p>
          <p><b>Total Amount:</b> ₹{booking.tickets * event.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;