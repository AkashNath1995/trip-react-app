import React, { useRef } from "react";
import Navbar from "./Navbar";
import "./Confirmation.css";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import Footer from "./Footer";

const Confirmation = () => {
  const confirmationRef = useRef(null);

  // Function to generate a random 7-digit number
  const generateConfirmationCode = () => {
    return Math.floor(1000000 + Math.random() * 9000000);
  };

  // Sample data (you can replace it with actual data)
  const bookingDetails = {
    confirmationCode: generateConfirmationCode(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };

  const handleDownload = () => {
    html2canvas(confirmationRef.current).then((canvas) => {
      // Convert the canvas to a blob
      canvas.toBlob((blob) => {
        // Save the blob using file-saver
        saveAs(blob, "confirmation.png");
      });
    });
  };

  return (
    <div>
      <Navbar />
      <div className="confirmation" ref={confirmationRef}>
        <h2 className="confirmation_head">Payment Successful!</h2>
        <div className="ticket">
          <h2>Trip-Go</h2>
          <div className="ticket-info">
            <p className="ticket-label">Confirmation Code:</p>
            <p className="ticket-value">{bookingDetails.confirmationCode}</p>
          </div>
          <div className="ticket-info">
            <p className="ticket-label">Date:</p>
            <p className="ticket-value">{bookingDetails.date}</p>
          </div>
          <div className="ticket-info">
            <p className="ticket-label">Time:</p>
            <p className="ticket-value">{bookingDetails.time}</p>
          </div>
        </div>

        {/* Company Details */}
        <div className="company-details">
          <h3>Company Details</h3>
          <p>Trip-Go Travel Agency</p>
          <p>123 Travel Street, Cityville</p>
          <p>Contact: info@tripgo.com</p>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Other Information */}
        <div className="other-info">
          <h3>Other Information</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Download Button */}
        <button className="confirm-btn" onClick={handleDownload}>
          Download Confirmation
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
