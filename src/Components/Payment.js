import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Payment.css";
import Footer from "./Footer";
import Offer from "./Offter";

const Payment = ({ selectedDestination }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiProvider, setUpiProvider] = useState("");

  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvvError, setCVVError] = useState("");
  const [upiIdError, setUpiIdError] = useState("");

  const handlePayment = () => {
    // Reset error messages
    setCardNumberError("");
    setExpiryDateError("");
    setCVVError("");
    setUpiIdError("");

    if (paymentMethod === "debit" || paymentMethod === "credit") {
      // Validate card details
      if (
        cardNumber.length === 10 &&
        expiryDateIsValid(expiryDate) &&
        cvv.length === 3
      ) {
        console.log(`Payment successful via ${paymentMethod} card`);
        navigate("/confirmation");
      } else {
        if (cardNumber.length !== 10) {
          setCardNumberError("Invalid card number");
        }
        if (!expiryDateIsValid(expiryDate)) {
          setExpiryDateError("Invalid expiry date");
        }
        if (cvv.length !== 3) {
          setCVVError("Invalid CVV");
        }

        console.error("Invalid card details. Please check and try again.");
      }
    } else if (paymentMethod === "upi") {
      // Validate UPI details
      if (upiProvider === "googlePay") {
        if (upiIdIsValid(upiId, "ybl")) {
          console.log(`Payment successful via Google Pay: ${upiId}`);
          navigate("/confirmation");
        } else {
          setUpiIdError("Invalid UPI ID for Google Pay");
          console.error(
            "Invalid UPI ID for Google Pay. Please check and try again."
          );
        }
      } else if (upiProvider === "phonePay") {
        if (upiIdIsValid(upiId, "phonePay")) {
          console.log(`Payment successful via PhonePe: ${upiId}`);
          navigate("/confirmation");
        } else {
          setUpiIdError("Invalid UPI ID for PhonePe");
          console.error(
            "Invalid UPI ID for PhonePe. Please check and try again."
          );
        }
      } else if (upiProvider === "paytm") {
        if (upiIdIsValid(upiId, "paytm")) {
          console.log(`Payment successful via Paytm: ${upiId}`);
          navigate("/confirmation");
        } else {
          setUpiIdError("Invalid UPI ID for Paytm");
          console.error(
            "Invalid UPI ID for Paytm. Please check and try again."
          );
        }
      } else {
        console.error("Please select a UPI provider");
      }
    } else {
      console.error("Please select a payment method");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleUpiProviderChange = (provider) => {
    // Reset card-related states if switching from card payment
    if (paymentMethod === "debit" || paymentMethod === "credit") {
      setCardNumber("");
      setExpiryDate("");
      setCVV("");
      setCardNumberError("");
      setExpiryDateError("");
      setCVVError("");
    }

    // Reset UPI-related states if switching UPI provider
    if (paymentMethod === "upi") {
      setUpiId("");
      setUpiIdError("");
    }

    // Set up UPI provider
    setUpiProvider(provider);

    // Reset UPI-related states if switching to UPI
    if (
      provider === "googlePay" ||
      provider === "phonePay" ||
      provider === "paytm"
    ) {
      setUpiId("");
      setUpiIdError("");
    }
  };

  // Function to check if the expiry date is valid (more than the present date)
  const expiryDateIsValid = (date) => {
    const currentDate = new Date();
    const enteredDate = new Date(date);

    return enteredDate > currentDate;
  };

  // Function to check if the UPI ID is valid (simple pattern check)
  const upiIdIsValid = (id, provider) => {
    let upiPattern;

    switch (provider) {
      case "ybl":
        upiPattern = /^[0-9]{10}@(ybl)$/;
        break;
      case "phonePay":
        upiPattern = /^[0-9]{10}@(phonePay)$/;
        break;
      case "paytm":
        upiPattern = /^[0-9]{10}@(paytm)$/;
        break;
      default:
        return false;
    }

    return upiPattern.test(id);
  };

  return (
    <div>
      <Navbar />
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg"
        alt="travel"
      />
      <div className="payment">
        <h2 className="payment_head">Select Payment Method</h2>
        <div className="payment_options">
          <label>
            <input
              type="radio"
              value="debit"
              checked={paymentMethod === "debit"}
              onChange={() => setPaymentMethod("debit")}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="credit"
              checked={paymentMethod === "credit"}
              onChange={() => setPaymentMethod("credit")}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI
          </label>
        </div>
        {paymentMethod === "debit" || paymentMethod === "credit" ? (
          <div className="card_form">
            <h3>{paymentMethod} Card Details</h3>
            <form className="payment_form">
              <label>
                Card Number:
                <input
                  type="number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </label>
              {cardNumberError && <p className="error">{cardNumberError}</p>}
              <label>
                Expiry Date:
                <input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </label>
              {expiryDateError && <p className="error">{expiryDateError}</p>}
              <label>
                CVV:
                <input
                  type="number"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </label>
              {cvvError && <p className="error">{cvvError}</p>}
            </form>
          </div>
        ) : null}
        {paymentMethod === "upi" ? (
          <div className="upi_form">
            <h3>UPI Details</h3>
            <div className="upi_suggestion">
              <label>
                <input
                  type="radio"
                  value="googlePay"
                  checked={upiProvider === "googlePay"}
                  onChange={() => handleUpiProviderChange("googlePay")}
                />
                <img
                  className="upi_img"
                  src="https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/google-pay-logo.png"
                  alt="Google Pay"
                  style={{ width: "40px", height: "40px", marginRight: "8px" }}
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="phonePay"
                  checked={upiProvider === "phonePay"}
                  onChange={() => handleUpiProviderChange("phonePay")}
                />
                <img
                  src="https://i.pinimg.com/736x/19/29/17/1929176785bcaf86ef6518447e5f6914.jpg"
                  alt="PhonePay"
                  style={{ width: "40px", height: "40px", marginRight: "8px" }}
                  className="upi_img"
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="paytm"
                  checked={upiProvider === "paytm"}
                  onChange={() => handleUpiProviderChange("paytm")}
                />
                <img
                  src="https://w7.pngwing.com/pngs/173/994/png-transparent-paytm-social-icons-color-icon-thumbnail.png"
                  alt="Paytm"
                  style={{ width: "40px", height: "40px", marginRight: "8px" }}
                  className="upi_img"
                />
              </label>
            </div>
            <form className="payment_form">
              <label>
                UPI ID:
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g., 1234567890@paytm)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </label>
              {upiIdError && <p className="error">{upiIdError}</p>}
              <p className="upi_suggestion">
                Suggested UPI apps: Paytm, PhonePe, Google Pay
              </p>
            </form>
          </div>
        ) : null}
        <div className="payment_buttons">
          <button className="payment_button" onClick={handlePayment}>
            Pay Now
          </button>
          <button className="payment_button" onClick={handleBack}>
            Go Back
          </button>
        </div>
        <Offer />
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
