import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" title="About" btnClass="hide" />
      <Footer />
    </div>
  );
}
export default About;
