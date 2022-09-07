import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Preloader = () => {
  let preloader = useRef();
  let percent = useRef();
  let bar = useRef();
  // eslint-disable-next-line
  let barConfirm = useRef();

  const [progress, setProgress] = useState(1);

  const tl = gsap.timeline({
    paused: "true",
  });

  useEffect(() => {
    tl.to([percent, bar], {
      duration: 2,
      opacity: 0,
      zIndex: -1,
    });
    tl.to(preloader, {
      duration: 0.8,
      width: "0%",
    });
    // eslint-disable-next-line
  }, []);

  let width = 1;
  let interval;
  const move = () => {
    interval = setInterval(frame, 10);
  };
  const frame = () => {
    if (width >= 100) {
      clearInterval(interval);
      tl.play();
    } else {
      width++;
      document.querySelector(".bar").style.width = width + "%";
      setProgress((prev) => width);
    }
  };
  window.addEventListener("load", function (e) {
    move();
  });

  return (
    <PreloaderContainer ref={(el) => (preloader = el)}>
      <div className="percent" ref={(el) => (percent = el)}>
        {progress}%
      </div>
      <div className="bar" ref={(el) => (bar = el)}>
        <div className="barConfirm" ref={(el) => (barConfirm = el)}></div>
      </div>
    </PreloaderContainer>
  );
};

const PreloaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #0f0f0f;
  flex-direction: column;

  .percent {
    color: white;
    font-family: "Neutral Face";
  }
  .bar {
    width: 0;
    margin-top: 20px;
    height: 20px;
    background-color: white;
    text-align: center;
  }
  .barConfirm {
    width: 1%;
    padding: 1px 0px;
    background-color: white;
  }
  @media (max-width: 64em) {
    display: none;
  }
`;

export default Preloader;
