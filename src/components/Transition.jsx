import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Power4 } from "gsap";

const Transition = ({ timeline }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: "7",
      x: 2600,
      ease: Power4.easeOut,
    });
  });

  return <TransitionContainer ref={trans}></TransitionContainer>;
};

const TransitionContainer = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: rgba(255, 40, 90);
  top: 0;
  width: 100%;
  height: 100%;
`;

export default Transition;
