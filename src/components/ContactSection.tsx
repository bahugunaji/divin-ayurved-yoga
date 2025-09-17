import React from "react";
const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      {/* Left: Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7281266437525!2d78.034!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299c8c8f5c2f%3A0x0!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Right: Contact Form */}
      <div className="form-container">
        <h2>CONTACT US</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullname">Full name</label>
            <input type="text" id="fullname" name="fullname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" className="send-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


