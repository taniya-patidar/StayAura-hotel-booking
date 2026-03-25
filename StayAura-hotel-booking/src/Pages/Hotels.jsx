import { motion } from "framer-motion";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Luxury Palace",
      price: 5000,
      image: "https://source.unsplash.com/300x200/?hotel"
    },
    {
      id: 2,
      name: "Budget Inn",
      price: 2000,
      image: "https://source.unsplash.com/300x200/?room"
    }
  ];

  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <motion.div
          key={hotel.id}
          className="shadow-lg rounded-xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <img src={hotel.image} className="rounded-lg" />
          <h2 className="text-xl font-bold">{hotel.name}</h2>
          <p>₹{hotel.price}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Hotels;