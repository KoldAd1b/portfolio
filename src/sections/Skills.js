import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/scrollbar";

import Carousel from "../components/Carousel";

const Roadmap = () => {
  const revealRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  revealRefs.current = [];

  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Container>
        <Carousel />
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  margin: -2rem 0;
  background-color: ${(props) => props.theme.black};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Playfair Display", sans-serif;
  margin: 2rem auto;
  justify-content: center;
  display: flex;

  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

export default Roadmap;
