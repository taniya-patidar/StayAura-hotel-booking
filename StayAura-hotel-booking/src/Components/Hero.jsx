import img from "../assets/luxHotel.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Background zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative text-center text-white px-4 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } }
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={{
            hidden: { y: 60, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 120 }
            }
          }}
        >
          Find your perfect stay
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          Luxury hotels, budget rooms, unforgettable experiences.
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-teal-600 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 200 }
            }
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 25px rgba(20,184,166,0.6)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;