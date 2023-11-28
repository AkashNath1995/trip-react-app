import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TravelPlan.css";
import Navbar from "./Navbar";
import destinations from "./TripPlanData"; // Import the destinations array

const TravelPlan = () => {
  const navigate = useNavigate();
  const [showInternational, setShowInternational] = useState(true);

  const handleToggle = () => {
    setShowInternational((prev) => !prev);
  };

  const handleTravelInfo = (destination) => {
    if (destination.id === 1) {
      navigate("/france");
    } else {
      navigate("/about");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const filteredDestinations = destinations.filter(
    (destination) =>
      (showInternational && destination.type === "international") ||
      (!showInternational && destination.type === "domestic")
  );

  return (
    <div>
      <Navbar />
      <img
        className="planhead_img"
        src="https://cdn.pixabay.com/photo/2020/12/11/17/13/compass-5823325_1280.jpg"
        alt="travel plan"
      />
      <h2 className="travelplan_head">Travel Plans</h2>
      <button className="travel_button" onClick={handleToggle}>
        Show {showInternational ? "Domestic" : "International"} Travel Plans
      </button>
      <div className="travelplan">
        {filteredDestinations.map((destination) => (
          <div className="travel-container" key={destination.id}>
            <div className="travelplan_container">
              <h3 className="tevel_container_head">{destination.name}</h3>
              <img
                className="travel_img"
                src={destination.image}
                alt={destination.name}
              />
              <p className="itenary">Itinerary: {destination.itinerary}</p>
              <p className="price">Price: {destination.price}</p>
              <button
                className="travel_button"
                onClick={() => handleTravelInfo(destination)}
              >
                Get Information
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPlan;
