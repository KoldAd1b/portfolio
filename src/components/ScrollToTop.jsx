import React, { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const ScrollToTop = () => {
  const ref = useRef(null);

  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    if (ref) {
      if (y > 200) {
        ref.current.style.opacity = "100";
      } else {
        ref.current.style.opacity = "0";
      }
    }
  }, [y]);
  const scrollTop = () => {
    let element = document.getElementById("navbar");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Up ref={ref} onClick={scrollTop}>
      &#x2191;
    </Up>
  );
};

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontlg};
  position: fixed;
  z-index: 1000;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default ScrollToTop;
