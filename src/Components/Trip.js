// Trip.js
import "./Trip.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1614605670899-47ecba60bf2a?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Rishikesh"
          text="Beautiful scenery and adventurous activities."
        />
        <TripData
          image="https://images.unsplash.com/photo-1609276804051-8c5e906cc430?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Meghalaya"
          text="Breathtaking beauty of mountain,greenary and clouds"
        />
        <TripData
          image="https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Darjeeling"
          text="Beauty of Queen of Hills"
        />
      </div>
    </div>
  );
}

export default Trip;
