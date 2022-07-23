import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ text, link, close }) => {
  const navigate = useNavigate();
  return (
    <Btn
      onClick={() => {
        navigate(link);
      }}
    >
      <div>{text}</div>
    </Btn>
  );
};

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontsm};
  padding: 0.8rem 2.3rem;

  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;

  div {
    -webkit-text-fill-color: ${(props) => props.theme.white};
  }

  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;

    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

export default Button;
