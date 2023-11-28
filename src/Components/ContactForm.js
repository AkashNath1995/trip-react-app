import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
  });

  const [complaintNumber, setComplaintNumber] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you could send the form data to your backend or perform any other necessary actions.
    // For the sake of this example, let's generate a random complaint number.
    const randomComplaintNumber = Math.floor(Math.random() * 1000000) + 1;
    setComplaintNumber(randomComplaintNumber);

    // Show the pop-up
    setShowPopup(true);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: ""
    });
  };

  const closePopup = () => {
    // Close the pop-up
    setShowPopup(false);
  };

  return (
    <div className="Contact">
      <h2 className="Contact-heading">Contact Us</h2>
      <form className="Contact-form" onSubmit={handleSubmit}>
        <label className="Contact-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="Contact-input"
          />
        </label>
        <br />

        <label className="Contact-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="Contact-input"
          />
        </label>
        <br />

        <label className="Contact-label">
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="Contact-input"
          />
        </label>
        <br />

        <label className="Contact-label">
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="Contact-input"
          />
        </label>
        <br />

        <label className="Contact-label">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="Contact-input Contact-textarea"
          />
        </label>
        <br />

        <button type="submit" className="Contact-button">
          Send
        </button>
      </form>

      {showPopup && (
        <div className="Contact-popup">
          <div className="Contact-popup-content">
            <span className="Contact-close" onClick={closePopup}>
              &times;
            </span>
            <div classname="Contact-msg">
              <p>We will get back to you very shortly.</p>
              <p className="Contact-complaint-number">
                Your Complaint Number: {complaintNumber}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
