import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Hotels from "./Pages/Hotels";
import ProtectedRoute from "./Components/ProtectedRoute";

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
        <Route path="/about" element={<h1 className="p-10 text-3xl">About Page</h1>} />
        <Route path="/contact" element={<h1 className="p-10 text-3xl">Contact Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;