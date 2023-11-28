import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
function Contact() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </div>
  );
}
export default Contact;
