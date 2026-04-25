// Initial values
let availableTickets = 50;
const price = 100;

// Form reference
const form = document.getElementById("bookingForm");

// Submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let dept = document.getElementById("department").value.trim();
  let tickets = parseInt(document.getElementById("tickets").value);

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("deptError").innerText = "";
  document.getElementById("ticketError").innerText = "";

  let isValid = true;

  // Validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    isValid = false;
  }

  if (dept === "") {
    document.getElementById("deptError").innerText = "Department is required";
    isValid = false;
  }

  if (!tickets || tickets <= 0) {
    document.getElementById("ticketError").innerText =
      "Enter a valid number of tickets";
    isValid = false;
  } else if (tickets > availableTickets) {
    document.getElementById("ticketError").innerText =
      "Not enough tickets available";
    isValid = false;
  }

  // Stop if invalid
  if (!isValid) return;

  // Update available tickets
  availableTickets -= tickets;
  document.getElementById("available").innerText = availableTickets;

  // Show booking summary
  document.getElementById("summary").style.display = "block";
  document.getElementById("sName").innerText = "Name: " + name;
  document.getElementById("sEvent").innerText = "Event: Tech Fest 2026";
  document.getElementById("sTickets").innerText =
    "Tickets Booked: " + tickets;
  document.getElementById("sAmount").innerText =
    "Total Amount: ₹" + tickets * price;

  // Success message
  alert("🎉 Booking Successful!");

  // Reset form
  form.reset();
});