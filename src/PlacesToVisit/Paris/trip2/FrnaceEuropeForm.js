import React, { useState } from "react";
import "./FranceEuropeForm.css";
import { Link, useNavigate } from "react-router-dom";

const DestinationOptions = [
  { id: 1, name: "Zurich", price: 30000 },
  { id: 2, name: "Paris", price: 50000 },
  { id: 3, name: "Lucerne", price: 49000 },
  { id: 4, name: "Lyon", price: 40000 },
  { id: 5, name: "Milan", price: 45000 },
  { id: 6, name: "Rome", price: 72000 },
  { id: 7, name: "FLorence", price: 44000 },
  { id: 8, name: "Venice", price: 67000 },
  { id: 9, name: "All", price: 162490 }
];

const HotelBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    startDate: "",
    endDate: "",
    duration: 1,
    numberOfPersons: 1,
    destination: [],
    hotelType: null
  });

  const handlePaymentNavigation = () => {
    navigate("/payment");
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [revicedPrice, setRevicedPrice] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDestinationChange = (destination) => {
    setFormData((prevData) => ({
      ...prevData,
      destination: destination
    }));
  };

  const calculateTotalPrice = () => {
    if (formData.destination.length === 0) {
      alert("Please select destination first.");
      return;
    }
    if (formData.name.length < 5) {
      alert("Name should have at least 5 characters.");
      return;
    }
    const currentDate = new Date();
    const selectedStartDate = new Date(formData.startDate);
    if (!formData.startDate || selectedStartDate <= currentDate) {
      alert("Please select a valid starting date.");
      return;
    }

    const destinationPrices = formData.destination.map(
      (destinationId) =>
        DestinationOptions.find((dest) => dest.id === destinationId).price
    );

    const totalDestinationPrice = destinationPrices.reduce((a, b) => a + b, 0);

    const totalPrice = totalDestinationPrice * formData.numberOfPersons;

    const revicedPrice = totalPrice - totalPrice * 0.5;

    setTotalPrice(totalPrice);
    setRevicedPrice(revicedPrice);
  };

  return (
    <div className="hotel-booking-container">
      <h2>Plan Your Trip</h2>
      <form>
        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="form-label">
          Phone Number:
          <input
            className="form-input"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="form-label">
          Start Date:
          <input
            className="form-input"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="form-label">
          Number of Persons:
          <input
            className="form-input"
            type="number"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            min="1"
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="form-radio-label">
          Destination:
          {DestinationOptions.map((destination) => (
            <label key={destination.id}>
              <input
                className="form-radio-group"
                type="radio"
                name="destination"
                value={destination.id}
                checked={formData.destination[0] === destination.id}
                onChange={() => handleDestinationChange([destination.id])}
              />
              {destination.name}
            </label>
          ))}
        </label>

        <br />

        <button
          className="form-button "
          type="button"
          onClick={calculateTotalPrice}
        >
          Calculate Total Price
        </button>
      </form>

      {totalPrice > 0 && (
        <div>
          <h3 className="total-price">Total Price: Rs.{totalPrice}/-</h3>
          <h2 className="rev-price">Rs.{revicedPrice}/-</h2>
          <Link
            to="/payment"
            className="form-button"
            onClick={() => handlePaymentNavigation(revicedPrice)}
          >
            Pay Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default HotelBookingForm;
