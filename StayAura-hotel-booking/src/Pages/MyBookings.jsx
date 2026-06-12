import { useEffect, useState } from "react";
import "../Styles/MyBooking.css";

const MyBookings = () => {

  const [booking, setBooking] = useState(null);

  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("booking")
    );

    setBooking(data);

  }, []);

  return (
    <div className="my-bookings-container">

      <h1>My Bookings</h1>

      {booking && (
       

         <div className="booking-card">

         <h2>🏨 Name: {booking.name} </h2>

         <p>📅 Check In: {booking.checkIn}</p>

         <p>📅 Check Out: {booking.checkOut}</p>

         <p>👤 Guests: {booking.guests}</p>

         </div>
      )}

    </div>
  );
};

export default MyBookings;