import { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [tiles, setTiles] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found! Please signup first");
      return;
    }

    if (
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      alert("Login Successful ✅");

      // 🔥 SAVE LOGIN STATUS
      localStorage.setItem("isLoggedIn", "true");

      navigate("/hotels");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="signup-container">
      <section>
        {tiles.map((_, i) => (
          <span key={i}></span>
        ))}

        <motion.div
          className="signin"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="content">
            <h2>Login</h2>

            <form className="form" onSubmit={handleSubmit}>
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

              <div className="links">
                <span
                  className="cursor-pointer text-blue-400"
                  onClick={() => navigate("/signup")}
                >
                  Create Account
                </span>
              </div>

              <div className="inputBox">
                <motion.input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Login;