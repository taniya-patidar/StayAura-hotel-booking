import { useParams } from "react-router-dom";
import { hotels } from "../data/hotelsData";
import "../Styles/HotelDetails.css";
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const hotel = hotels.find(
    (h) => h.id === Number(id)
  );


  if (!hotel) {
    return <h1>Hotel Not Found</h1>;
  }

  return (
    <div className="details-container">

      <div className="details-card">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>{hotel.name}</h1>

          <p className="location">
            📍 {hotel.location}
          </p>

          <p className="rating">
            ⭐ {hotel.rating}
          </p>

          <p className="price">
            ₹{hotel.price}/night
          </p>

          <h3>Amenities</h3>

          <ul>
            <li>🏊 Swimming Pool</li>
            <li>📶 Free WiFi</li>
            <li>🚗 Free Parking</li>
            <li>🍽 Complimentary Breakfast</li>
            <li>🏋️ Gym Access</li>
            <li>🛎 24/7 Room Service</li>
          </ul>

          <h3>Description</h3>

          <p>
            Experience luxury and comfort with breathtaking
            views, premium rooms, delicious food and world
            class hospitality. Perfect for family vacations,
            romantic trips and business stays.
          </p>

          <button className="book-btn" 
          onClick={() => navigate(`/booking/${hotel.id}`)}>
          Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default HotelDetails;