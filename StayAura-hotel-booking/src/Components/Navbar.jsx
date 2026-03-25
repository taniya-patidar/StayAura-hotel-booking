import logo from "../assets/StayAura.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔥 check login status
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  // 🔥 Navbar animation (bounce effect)
  const navVariants = {
    hidden: { y: -120, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // 🔥 Links animation
  const linkContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25
      }
    }
  };

  const linkItem = {
    hidden: { y: -25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 14
      }
    }
  };

  return (
    <motion.nav
      className="flex justify-between items-center px-8 md:px-12 py-4 backdrop-blur-lg bg-white/70 shadow-md sticky top-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 🔥 LOGO */}
      <motion.div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
          StayAura
        </h1>
      </motion.div>

      {/* 🔥 LINKS */}
      <motion.div
        variants={linkContainer}
        initial="hidden"
        animate="visible"
        className="hidden md:flex gap-10 text-gray-700 font-medium"
      >
        {[
          { name: "Home", path: "/" },
          { name: "Hotels", path: "/hotels" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={linkItem}
            whileHover={{ y: -4 }}
            className="relative group cursor-pointer"
          >
            <Link to={item.path}>{item.name}</Link>

            {/* underline */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔥 RIGHT SIDE */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {!isLoggedIn ? (
          <>
            {/* LOGIN BUTTON */}
            <motion.button
              onClick={() => navigate("/login")}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm shadow-md"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#0f766e"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>

            {/* SIGNUP ICON */}
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaUserCircle
                size={28}
                className="cursor-pointer text-gray-700 hover:text-teal-600 transition"
                onClick={() => navigate("/signup")}
              />
            </motion.div>
          </>
        ) : (
          <>
            {/* USER NAME */}
            <span className="text-gray-700 font-semibold">
              Hi,{" "}
              {JSON.parse(localStorage.getItem("user"))?.username}
            </span>

            {/* LOGOUT BUTTON */}
            <motion.button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm shadow-md"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;