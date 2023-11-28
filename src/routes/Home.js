import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import Offer from "../Components/Offter";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Offer />
      <Trip />
      <Footer />
    </div>
  );
}
export default Home;
