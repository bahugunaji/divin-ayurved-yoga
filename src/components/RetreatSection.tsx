import React from "react";

const Retreat: React.FC = () => {
  return (
    <section className="retreat-section">
      <h1 className="retreat-title">RETREAT</h1>

      {/* Image with Play Button */}
      <div className="retreat-image">
        <img
          src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Yoga Retreat"
        />
        <div className="play-button">
          <span>▶</span>
        </div>
      </div>

      {/* Description */}
      <div className="retreat-content">
        <p>OUR NEXT YOGA TRAVEL DESTINATION IS PERU.</p>
        <a href="#" className="read-more">
          READ MORE <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Retreat;
