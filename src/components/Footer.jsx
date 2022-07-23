import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Section = styled.section`
  width: 100vw;
  height: 50vh;
  margin-top: -2.2rem;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: #130f40;
  background-image: linear-gradient(315deg, #130f40 0%, #000000 74%);

  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 40em) {
    justify-content: center;
  }
  border-bottom: 2px solid ${(props) => props.theme.text};
  padding-bottom: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 40em) {
    align-items: center;
  }
`;

const Socials = styled.div`
  display: flex;

  list-style: none;
  margin: 0 auto;
  flex-direction: column;

  & > * {
    padding-right: 0.5rem;
    transform: all 0s ease;
  }
  & > *:hover {
    transform: scale(1.1);
  }
  a {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 0.5rem;
    }
  }
`;

const MenuItems = styled.ul`
  list-style-type: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 40em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 40em) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Left>
          <Logo />
          <Socials>
            <a
              href="https://github.com/KoldAd1b"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a href="mailto: ahnafadib7546@gmail.com">
              <SiGmail /> ahnafadib7546@gmail.com
            </a>
          </Socials>
        </Left>
        <MenuItems>
          <Item onClick={() => navigate("/")}>Home</Item>
          <Item onClick={() => navigate("/about")}>About</Item>
          <Item onClick={() => navigate("/contact-me")}> Contact</Item>
          <Item onClick={() => navigate("/?scrollTo=skills")}>Skills</Item>
          <Item onClick={() => navigate("/?scrollTo=projects")}>Projects</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Ahnaf Adib. All rights reserved
        </span>
        <span>Hand-Crafted (Templatelessly)</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
