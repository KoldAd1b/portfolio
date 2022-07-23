import gsap from "gsap";
import React from "react";
import Transition from "../components/Transition";
import AboutSection from "../sections/About";

const About = () => {
  const about = gsap.timeline();

  return (
    <>
      <Transition timeline={about} />
      <AboutSection />
    </>
  );
};

export default About;
