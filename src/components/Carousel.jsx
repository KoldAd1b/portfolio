import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

import { SiJavascript, SiMongodb, SiWebflow } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { CgFigma } from "react-icons/cg";

const RenderItem = ({ title, icon, color }) => {
  return (
    <CardItem color={color}>
      <article className="card">
        <div className="icon">{icon}</div>
        <h2 className="title">{title}</h2>
      </article>
    </CardItem>
  );
};

const CardItem = styled.article`
  height: 100%;
  width: 100%;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;

  transition: 0.2s;
  margin: 0;
  position: relative;

  .card {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .icon {
    color: ${(props) => props.color};
    font-size: 4em;
  }

  .title {
    color: ${(props) => props.theme.white};
    letter-spacing: 0.5ch;
    font-weight: 400;
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-size: 1.75em;
  }
`;

const skills = [
  { Icon: <SiJavascript />, color: "#f0db4f", title: "Javascript" },
  { Icon: <FaReact />, color: "#61dbfb", title: "React" },
  { Icon: <AiFillHtml5 />, color: "#f06529", title: "HTML" },
  { Icon: <DiCss3 />, color: "#2965f1", title: "CSS" },
  { Icon: <FaNodeJs />, color: "#68A063", title: "NodeJS" },
  { Icon: <SiMongodb />, color: "#4db33d", title: "MongoDB" },
  { Icon: <CgFigma />, color: "#e04a34", title: "Figma" },
  { Icon: <SiWebflow />, color: "#4353ff", title: "Webflow" },
];

const getSlidesPerView = (width) => {
  if (width < 640) {
    return 2;
  }
  if (width < 1024) {
    return 3;
  }
  return 4;
};

const Carousel = () => {
  const { width } = useWindowSize();
  const [slidesPerView, setSlidesPerView] = useState();

  useEffect(() => {
    setSlidesPerView(getSlidesPerView(width));
  }, [width]);

  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        grabCursor={true}
        slidesPerView={slidesPerView}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {skills.map((skill, i) => {
          return (
            <SwiperSlide key={skill.color + new Date()}>
              <RenderItem
                icon={skill.Icon}
                color={skill.color}
                title={skill.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin: 2rem 0;
  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
  }

  @media (max-width: 45em) {
    height: 45vh;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    color: white;
    padding-right: 1rem;
  }
  .swiper-button-prev {
    color: white;
    padding-right: 1rem;
  }
`;
export default Carousel;
