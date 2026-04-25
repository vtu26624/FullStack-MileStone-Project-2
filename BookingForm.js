import React, { useState } from "react";

function BookingForm({ availableTickets, onBook }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    tickets: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.department) err.department = "Department required";

    if (!form.tickets) {
      err.tickets = "Enter tickets";
    } else if (form.tickets <= 0) {
      err.tickets = "Must be positive";
    } else if (form.tickets > availableTickets) {
      err.tickets = "Not enough tickets available";
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      setErrors({});
      onBook({
        ...form,
        tickets: parseInt(form.tickets),
      });

      alert("🎉 Booking Successful!");

      // Reset form
      setForm({
        name: "",
        email: "",
        department: "",
        tickets: "",
      });
    }
  };

  return (
    <div className="card">
      <h2>📝 Book Tickets</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <p className="error">{errors.name}</p>

        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <p className="error">{errors.email}</p>

        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        />
        <p className="error">{errors.department}</p>

        <input
          type="number"
          placeholder="Number of Tickets"
          value={form.tickets}
          onChange={(e) =>
            setForm({ ...form, tickets: e.target.value })
          }
        />
        <p className="error">{errors.tickets}</p>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;