import React from "react";
import { useNavigate } from "react-router-dom";
import "./France.css"; // Make sure to import your CSS file
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const France = () => {
  const navigate = useNavigate();
  const popularPlaces = [
    {
      name: "Eiffel Tower",
      location: "Paris",
      image:
        "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg"
    },
    {
      name: "The Louvre",
      location: "Paris",
      image:
        "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg"
    },
    {
      name: "Arc De Triomphe",
      location: "Paris",
      image:
        "https://cdn.pixabay.com/photo/2019/03/15/10/32/paris-4056742_1280.jpg"
    },
    {
      name: "Palace Of Versailles",
      location: "Paris",
      image:
        "https://cdn.pixabay.com/photo/2016/12/06/18/48/versailles-1887301_1280.jpg"
    },
    {
      name: "Disneyland",
      location: "Paris",
      image:
        "https://cdn.pixabay.com/photo/2013/12/11/02/42/disney-world-226721_1280.jpg"
    },
    {
      name: "Place De La Concorde",
      location: "Paris",
      image:
        "https://cdn.pixabay.com/photo/2014/11/01/23/26/obelisk-513220_1280.jpg"
    },
    {
      name: "Colosseum",
      location: "Rome",
      image:
        "https://cdn.pixabay.com/photo/2016/11/05/08/32/colosseum-1799671_1280.jpg"
    },
    {
      name: "Pantheon",
      location: "Rome",
      image:
        "https://cdn.pixabay.com/photo/2015/07/08/00/18/statue-835240_1280.jpg"
    },
    {
      name: "Spanish's Steps",
      location: "Rome",
      image:
        "https://cdn.pixabay.com/photo/2017/08/24/13/58/spanish-steps-2676923_1280.jpg"
    },
    {
      name: "Vatican  City",
      location: "Rome",
      image:
        "https://cdn.pixabay.com/photo/2017/12/15/19/13/rome-3021586_1280.jpg"
    }
    // Add more popular places as needed
  ];

  // Sample data for tour packages
  const tourPackages = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2021/05/18/08/07/buildings-6262595_1280.jpg",
      name: "Swiss & Paris Tour Delight",
      description:
        "Start your post-wedding love with this fully customizable 07 nights 08 days Europe package from .....",
      duration: "Zurich (2) → Lucerne (2) → Paris (3)",
      cost: "Rs.1,29,000/person",
      link: "/france-package"
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_1280.jpg",
      name: "Harmonious Europe",
      description:
        "Start your Europe tour with this fully 12 nights  Europe package from ......",
      duration:
        "Paris (3) → Lyon (1) → Zurich (3) → Milan (1) → Rome (2) → Florence (1) → Venice (1)",
      cost: "Rs.1,62,490/person",
      link: "/france-europe-package"
    },
    {
      id: 2,
      name: "Paris Explorer",
      description: "Explore the beautiful city of Paris.",
      duration: "3 night 4days",
      cost: "50000/person",
      iternary: "day1- this thsi and this day2-this this and this"
    },
    {
      id: 2,
      name: "Paris Explorer",
      description: "Explore the beautiful city of Paris.",
      duration: "3 night 4days",
      cost: "50000/person",
      iternary: "day1- this thsi and this day2-this this and this"
    }
    // Add more tour packages as needed
  ];

  const handlePayment = (tourPackage) => {
    navigate(tourPackage.link);
  };

  return (
    <div>
      <Navbar />
      <img
        className="france_head_img"
        src="https://cdn.pixabay.com/photo/2023/08/24/04/44/ai-generated-8209791_1280.png"
        alt="france"
      />
      <h2 className="popular-places-head">Popular Places you can visit</h2>
      <div className="popular-places-container">
        {popularPlaces.map((place, index) => (
          <div className="popular-place" key={index}>
            <h3 className="place_head">{place.name}</h3>
            <p className="place-location">Location: {place.location}</p>
            <img src={place.image} alt={place.name} />
          </div>
        ))}
      </div>

      <h2 className="popular-places-head">Our Tour Packages</h2>
      <div className="tour-packages-container">
        {tourPackages.map((tourPackage, index) => (
          <div className="tour-package" key={index}>
            <img src={tourPackage.image} alt="tour image" />
            <h3>{tourPackage.name}</h3>
            <p>{tourPackage.description}</p>
            <p>{tourPackage.duration}</p>
            <p>
              starting from <span className="cost">{tourPackage.cost}</span>
            </p>
            <button
              className="confirm_trip"
              onClick={() => handlePayment(tourPackage)}
            >
              Let's Go
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default France;
