import "../Styles/Contact.css";

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Message Sent Successfully ✅");
};
const Contact = () => {
  return (
    <div className="contact-container">

      <h1>Contact Us</h1>

      <div className="contact-box">
        <form onSubmit={handleSubmit} className="contact-form">
       

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>📍 Bhopal, India</p>

          <p>📧 support@stayaura.com</p>

          <p>📞 +91 9876543210</p>

        </div>

      </div>

    </div>
  );
};

export default Contact;