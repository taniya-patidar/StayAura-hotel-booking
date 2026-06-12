import { motion } from "framer-motion";
import luxHotel from "../assets/kk1.avif";
import goa from "../assets/kk.jpg";
import vara from "../assets/varanasi.webp";
import kerala from "../assets/kerala.jpg";
import mahakal from "../assets/mahakal.jpg";
import "../Styles/Hotels.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Hotels = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const hotels = [
    {
      id: 1,
      name: "The himalayan resort",
      location:"Manali",
      price:4500,
      image: luxHotel,
      rating:4.8,
     
    },
    {
      id: 2,
      name: "Sea View Palace",
      location:"Gao",
      price: 2000,
      image: goa,
      rating: 4.5
    },
    {
      id: 3,
      name: "Falcon resort",
      location:"Varanasi",
      price: 2000,
      image: vara,
      rating: 4.9
    },
    {
      id: 4,
      name: "Hotel Lua Nova",
      location:"kerela",
      price: 2000,
      image: kerala,
      rating: 4.4
    },
    {
      id: 5,
      name: "jai mahakal palace",
      location:"ujjain",
      price: 2000,
      image: mahakal,
      rating: 5.0
    }
  ];
  const filteredHotels = hotels.filter((hotel) =>
  hotel.location.toLowerCase().includes(search.toLowerCase())
);

  return (

    <>
        <div className="hero-section">
      <h1>StayAura Luxury Stays</h1>

      <p>
        Discover handpicked luxury hotels
        across India
      </p>

      <input
  type="text"
  placeholder="Search Destination..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
    </div>
     <div className="hotels-container">
      {filteredHotels.map((hotel) => (
        <motion.div
          key={hotel.id}
          className="shadow-lg rounded-xl p-4 hotel-card"
          whileHover={{ scale: 1.05 }}
        >
          <img src={hotel.image} className="hotel-image" />
          <h2 className="text-xl font-bold">{hotel.name}</h2>
          <p>{hotel.location}</p>
          <p>₹{hotel.price}</p>
          <p>{hotel.rating}⭐</p>
          <button
  className="view-btn"
  onClick={() => navigate(`/hotel/${hotel.id}`)}
>
  View Details
</button>
        </motion.div>
      ))}
    </div></>
   
  );
};

export default Hotels;