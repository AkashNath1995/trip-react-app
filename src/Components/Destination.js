// Destination.js
import React, { useState, useEffect } from "react";
import "./Destination.css";

function Destination() {
  const destinations = [
    {
      name: "Uttrakhand, India",
      description:
        "Nestled in the lap of the majestic Himalayas, Uttarakhand is a symphony of nature's grandeur. With its snow-capped peaks, lush valleys, and pristine rivers, the state exudes unparalleled beauty.",
      images: [
        "https://cdn.pixabay.com/photo/2019/07/12/17/08/mountain-4333231_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/01/22/12/11/rishikesh-4785189_1280.jpg"
      ]
    },
    {
      name: "Coorg, India",
      description:
        "Nestled in the Western Ghats of Karnataka, Coorg, also known as Kodagu, is a captivating hill station renowned for its lush greenery, mist-covered hills, and coffee plantations. A haven for nature lovers.",
      images: [
        "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1599922760936-e840fa373d8d?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      name: "Leh Ladakh,India",
      description:
        " Leh Ladakh, a high-altitude desert region in the northernmost part of India, captivates tourists with its surreal landscapes and rich cultural tapestry. ",
      images: [
        "https://cdn.pixabay.com/photo/2017/08/28/20/24/mountains-2691172_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/07/27/14/49/milky-way-8153503_1280.jpg"
      ]
    },
    {
      name: "Meghalaya,India",
      description:
        "Meghalaya, nestled in northeastern India, is a paradise for nature enthusiasts. Known as the Abode of Clouds, it enchants tourists with its lush landscapes, rolling hills, and cascading waterfalls.",
      images: [
        "https://cdn.pixabay.com/photo/2017/10/13/09/52/shillong-2847246_1280.jpg",
        "https://images.unsplash.com/photo-1625654325562-762dcec9e6f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      name: "Udaipur,India",
      description:
        "Udaipur, known as the City of Lakes, is a picturesque jewel in the Indian state of Rajasthan.",
      images: [
        "https://cdn.pixabay.com/photo/2015/07/07/05/50/ranakpur-834022_1280.jpg",
        "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    }
    // Add more destinations as needed
  ];

  const [currentDestination, setCurrentDestination] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDestination(
        (prevDestination) => (prevDestination + 1) % destinations.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [destinations.length]);

  const currentDestinationData = destinations[currentDestination];

  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Discover the Extraordinary: Where Every Moment is a Masterpiece.</p>
      {destinations
        .slice(0, showMore ? destinations.length : 3)
        .map((destination, index) => (
          <div className="card first-des" key={index}>
            <div className="des-text">
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
            </div>
            <div className="image">
              <img src={destination.images[0]} alt={destination.name} />
              <img
                src={destination.images[1 % destination.images.length]}
                alt={destination.name}
              />
            </div>
          </div>
        ))}
      {destinations.length > 3 && (
        <button
          className="show-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

export default Destination;
