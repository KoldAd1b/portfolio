import gsap from "gsap";
import React, { useEffect } from "react";
import Transition from "../components/Transition";
import Hero from "../sections/Hero";
import Roadmap from "../sections/Skills";
import Team from "../sections/Projects";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const home = gsap.timeline();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const scrollSection = searchParams.get("scrollTo");
    if (scrollSection) {
      setSearchParams(new URLSearchParams(""));
      document.getElementById(scrollSection).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [searchParams, setSearchParams]);

  return (
    <>
      <Transition timeline={home} />
      <Hero />

      <Roadmap />
      <Team />
    </>
  );
};

export default Home;
