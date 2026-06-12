import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About StayAura</h1>
        <p>
          Experience luxury stays and unforgettable journeys
          with India's trusted hotel booking platform.
        </p>
      </div>

      <div className="about-content">

        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            StayAura is a modern hotel booking platform that
            helps travelers discover premium hotels across India.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To make hotel booking simple, affordable and
            enjoyable for every traveler.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <p>
            Verified hotels, secure booking, best prices and
            exceptional customer support.
          </p>
        </div>

      </div>

      <div className="stats">
        <div>
          <h2>500+</h2>
          <p>Luxury Hotels</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Cities</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Happy Guests</p>
        </div>
      </div>

    </div>
  );
};

export default About;