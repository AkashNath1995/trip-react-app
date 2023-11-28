// // App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
import TravelPlan from "./Components/TravelPlan";
import Payment from "./Components/Payment";
import Confirmation from "./Components/Confirmation";
import France from "./PlacesToVisit/Paris/France";
import FrancePackage from "./PlacesToVisit/Paris/trip1/FrancePackage";
import FranceEuropePackage from "./PlacesToVisit/Paris/trip2/FranceEuropePackage";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/travel-plan" element={<TravelPlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/france" element={<France />} />
        <Route path="/france-package" element={<FrancePackage />} />
        <Route
          path="/france-europe-package"
          element={<FranceEuropePackage />}
        />
        {/* Add this line */}
      </Routes>
    </div>
  );
};

export default App;
