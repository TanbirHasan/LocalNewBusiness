import ContactForm from "../components/ContactForm/ContactForm";
import ContactUs from "../components/ContactUs/ContactUs";

import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar";

const Contact = () => {
  const colour = "transparent";

  return (
    <div>
      <div className="contact">
        <Navbar colour={colour} />
        <ContactUs />
      </div>
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
