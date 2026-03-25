import { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [tiles, setTiles] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    setTiles(Array.from({ length: 600 }));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("All fields required!");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Invalid Email!");
      return;
    }

    // 🔥 SAVE USER
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup Successful 🎉");

    // 🔥 redirect to login
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <section>
        {tiles.map((_, i) => (
          <span key={i}></span>
        ))}
          <motion.div
           className="signin"
           initial={{ scale: 0.6, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ type: "spring", stiffness: 120 }}
>
          <div className="content">
            <h2>Sign Up</h2>

            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
                <i>Username</i>
              </div>

              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <i>Email</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <i>Password</i>
              </div>

              <div className="inputBox">
                <motion.input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Signup;