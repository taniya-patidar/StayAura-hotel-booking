import "./App.css"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"

import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Hotels from "./Pages/Hotel"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>

    </Router>
  )
}

export default App
