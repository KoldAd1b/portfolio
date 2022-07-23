import gsap from "gsap";
import React from "react";
import ContactSection from "../components/Contact";
import Transition from "../components/Transition";

const Contact = () => {
  const contact = gsap.timeline();
  return (
    <>
      <Transition timeline={contact} />
      <ContactSection />
    </>
  );
};

export default Contact;
