import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Hotels from "./Pages/Hotels";
import ProtectedRoute from "./Components/ProtectedRoute";
import HotelDetails from "./Pages/HotelDetails";
import BookingForm from "./Pages/BookingForm";
import MyBookings from "./Pages/MyBookings";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels" element={<ProtectedRoute> <Hotels /> </ProtectedRoute>
  }
/>

        {/* NEW */}
        
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/booking/:id" element={<BookingForm />}/>
        <Route path="/my-bookings" element={<MyBookings />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;