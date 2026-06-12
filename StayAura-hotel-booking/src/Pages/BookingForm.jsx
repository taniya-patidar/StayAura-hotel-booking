import { useState } from "react";
import "../Styles/Booking.css";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [booking, setBooking] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem(
    "booking",
    JSON.stringify(booking)
  );

  alert("Booking Confirmed 🎉");
  navigate("/my-bookings");
};

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h1>Book Your Stay</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={booking.name}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="checkIn"
          value={booking.checkIn}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="checkOut"
          value={booking.checkOut}
          onChange={handleChange}
          required
        />
        
       <div className="guest-field">

    <input
    type="number"
    name="guests"
    min="1"
    value={booking.guests}
    onChange={handleChange}
    required
    />
    <span>Persons</span>
</div>

        <button type="submit">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;