import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Offer.css";

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const deadline = new Date("2024-01-01T00:00:00"); // Set your offer deadline here
    const now = new Date();
    const difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return timeLeft;
  }

  return (
    <div>
      <div className="offer-container">
        <Link to="/travel-plan">
          <h2>Exclusive Offer!</h2>
        </Link>
        <p>
          Book your trip now and get amazing discounts:
          <br />
          <span className="timer">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s left!
          </span>
        </p>
        <div className="discount-details">
          <p>30% off on domestic trips</p>
          <p>50% off on international trips</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
