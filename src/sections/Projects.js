import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import stockqino from "../assets/Projects/stockqino.png";
import furnidence from "../assets/Projects/Furnidence.png";
import weatheringAway from "../assets/Projects/weatheringaway.png";
import thegram from "../assets/Projects/thegram.png";
import { useWindowSize } from "react-use";
import { links } from "../data/links";

const ProjectItem = ({ img, title, description, links }) => {
  const [hover, setHover] = useState();
  const { width } = useWindowSize();
  const containerRef = useRef();
  const mounted = useRef(false);
  const q = gsap.utils.selector(containerRef);

  useEffect(() => {
    const tl = gsap.timeline({});
    const hoverAnimation = () => {
      tl.to(q("h3 span"), { width: "100%", duration: 1 })
        .to(containerRef.current, { y: "0%", duration: 0.5 })
        .to(containerRef.current, {
          background: "rgba(0,0,0,0.6)",
          duration: 1,
        });
    };
    const outHover = () => {
      tl.to(containerRef.current, {
        y: "70%",
        duration: 0.5,
        backgroundColor: "transparent",
      }).to(q("h3 span"), { width: "0", duration: 1 });
    };
    if (mounted.current) {
      if (hover) hoverAnimation();
      else outHover();
    }

    mounted.current = true;

    return () => tl.kill();
    // eslint-disable-next-line
  }, [hover]);

  const clickAnimation = () => {
    if (width <= 1024) {
      setHover((prev) => !prev);
    }
    return;
  };

  return (
    <Item
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={clickAnimation}
    >
      <ImageContainer img={img}></ImageContainer>

      <Info ref={containerRef}>
        <h3>
          {title} <span></span>
        </h3>
        <p>{description}</p>
        {links[0] && (
          <button>
            <a href={links[0]} target="_blank" rel="noreferrer">
              Live
            </a>
          </button>
        )}
        {links?.[1] && (
          <button className="github">
            <a href={links[1]} target="_blank" rel="noreferrer">
              Github
            </a>
          </button>
        )}
        {links?.[2] && (
          <button className="demo">
            <a href={links[2]} target="_blank" rel="noreferrer">
              Demo Video
            </a>
          </button>
        )}
      </Info>
    </Item>
  );
};

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;

  transform: translateY(70%);

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  h3 {
    font-weight: bolder;
    font-size: 1.5em;
    color: ${(props) => props.theme.white};
    position: relative;

    span {
      width: 0;
      position: absolute;
      bottom: -4px;
      left: -20%;
      content: "";
      height: 5px;
      background-color: ${(props) => props.theme.white};
    }
  }
  p {
    font-weight: 300;
    opacity: 60;
    color: ${(props) => props.theme.white};
  }
  button {
    padding: 0.5em 1em;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.licorice};
    outline: none;
    border: none;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 6px;
    font-size: 1em;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.darkBlue};
      color: ${(props) => props.theme.white};
    }
    margin-right: 1rem;

    &.github {
      color: ${(props) => props.theme.white};
      background-color: #bd2c00;
      &:hover {
        background-color: ${(props) => props.theme.white};
        color: #bd2c00;
      }
    }
    &.demo {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.orangeRed};
      &:hover {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.licorice};
      }
    }
  }
`;

const Item = styled.div`
  width: calc(1.5 / 5 * 100%);
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  border-radius: 6px;
  position: relative;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 2px 4px,
    rgba(255, 255, 255, 0.4) 0px 7px 13px -3px,
    rgba(255, 255, 255, 0.3) 0px -3px 0px inset;

  min-height: 300px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 80em) {
    width: 350px;
  }

  @media (max-width: 64em) {
    width: 400px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background-image: ${(props) =>
    `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,.4)),url("${props.img}")  `};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;

  background-color: ${(props) => props.theme.carouselColor};

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h2 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
  }
`;

const Team = () => {
  return (
    <>
      <Section id="projects">
        <Title>Projects</Title>

        <Container>
          <ProjectItem
            img={furnidence}
            title={"Furniture E-Com"}
            description="A furniture e-commerce store built with the MERN stack "
            links={links.furnidence}
          />
          <ProjectItem
            img={thegram}
            title={"The Gram"}
            description="An instagram clone with my take on it. Built using NextJS and Firebase"
            links={links.thegram}
          />

          <ProjectItem
            img={stockqino}
            title={"StockQino"}
            description="A company website (mine and one of my friend's) that I developed using webflow"
            links={links.stockqino}
          />

          <ProjectItem
            img={weatheringAway}
            title={"Weathering Away"}
            description="A frontend weather application built with react and the openWeather API"
            links={links.weatheringaway}
          />
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.black};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  margin: 2rem auto;
  padding-top: 2rem;
  justify-content: center;
  display: flex;

  text-transform: uppercase;

  font-family: "Playfair Display", sans-serif;

  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  justify-content: space-around;
`;

export default Team;
