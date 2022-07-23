import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <LogoText>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </LogoText>
  );
};

const LogoText = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.red};
  transition: all 0.2s ease;
  padding-top: 1rem;

  &:hover {
    transform: rotate(45deg);
    animation: logo_anim 4s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @keyframes logo_anim {
    0% {
      transform: rotate(0deg);
      color: ${(props) => props.theme.red};
    }

    25% {
      transform: rotate(-30deg);
      color: ${(props) => props.theme.white};
    }

    50% {
      transform: rotate(0deg);
      color: ${(props) => props.theme.red};
    }
    75% {
      transform: rotate(30deg);
      color: ${(props) => props.theme.white};
    }
    100% {
      transform: rotate(0deg);
      color: ${(props) => props.theme.red};
    }
  }
`;

export default Logo;
