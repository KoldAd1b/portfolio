import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
    setNavbarOpen(false);
  };

  return (
    <div>
      <Section id="navbar">
        <Nav>
          <Logo />
          <BurgerContainer
            onClick={(prev) => {
              if (!navbarOpen) setNavbarOpen(true);
              else setNavbarOpen(false);
            }}
          >
            <Hamburger open={navbarOpen}></Hamburger>
          </BurgerContainer>
          )
          <Menu navbarOpen={navbarOpen}>
            <Times onClick={() => setNavbarOpen(false)} open={navbarOpen}>
              Close
            </Times>

            <MenuItem onClick={() => goTo("/")}>Home</MenuItem>
            <MenuItem onClick={() => goTo("/about")}>About</MenuItem>

            <MenuItem onClick={() => goTo("/?scrollTo=skills")}>
              Skills
            </MenuItem>

            <MenuItem onClick={() => goTo("/?scrollTo=projects")}>
              Projects
            </MenuItem>
          </Menu>
          {!navbarOpen && (
            <Button
              close={() => setNavbarOpen(false)}
              text={"Contact"}
              link="/contact-me"
            />
          )}
        </Nav>
      </Section>
    </div>
  );
};

const BurgerContainer = styled.div`
  position: absolute;
  display: none;
  left: 50%;
  top: 50%;
  width: 4rem;
  height: 4rem;
  transform: translate(-50%, -50%);
  cursor: pointer;
  @media (max-width: 64em) {
    display: block;
  }
`;

const Hamburger = styled.span`
  width: ${(props) => (props.open ? "2rem " : "1.5rem")};
  height: 2px;
  background: ${(props) => {
    return props.theme.text;
  }};

  position: absolute;
  top: 2rem;
  left: 50%;
  z-index: 10;
  transform: ${(props) =>
    props.open
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  display: none;

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.open ? "1rem " : "1.5rem")};
    right: ${(props) => (props.open ? "-2px " : "0")};
    height: 2px;
    position: absolute;
    transition: all 0.3s ease;
    background: ${(props) => props.theme.text};
  }
  &::after {
    top: ${(props) => (props.open ? "0.3rem " : "0.5rem")};
    transform: ${(props) => (props.open ? " rotate(-40deg)" : " rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.open ? "0.3rem " : "0.5rem")};
    transform: ${(props) => (props.open ? ") rotate(40deg)" : " rotate(0)")};
  }
  @media (max-width: 64em) {
    display: flex;
  }
`;

const Times = styled.div`
  position: absolute;
  display: ${(props) => (props.open ? "block" : "none")};
  top: 2rem;
  right: 0;
  transform: translate(-50%, -50%);
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.red};
  cursor: pointer;
  transition: color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  font-size: ${(props) => props.theme.fontxs};
  padding: 0 1em;

  @media (max-width: 48em) {
    top: 20%;
    left: 50%;
    right: initial;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    left: 2%;
    background-color: ${(props) => props.theme.white};
    transition: width 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.darkBlue};
  }
  &:hover::after {
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  position: relative;
  font-family: "Playfair display", sans-serif;

  .mobile {
    display: none;
  }
  @media (max-width: 64em) {
    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-weight: bold;
  margin: 0 auto;

  @media (max-width: 64em) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background-color: ${(props) => props.theme.licorice};
    backdrop-filter: blur(2px);
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;

    font-size: ${(props) => props.theme.fontxxl};
    transform: ${(props) =>
      props.navbarOpen ? "translateY(0)" : "translateY(100%)"};
    transition: all 0.4s ease-in;
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-weight: light;
  font-family: "Playfair Display", sans-serif;

  text-transform: uppercase;

  background: ${(props) =>
    `linear-gradient(to right, ${props.theme.white} 50%,${props.theme.darkBlue})`};

  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-position: -100%;
  }

  &::after {
    content: "";
    display: block;
    width: 0 !important;

    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
export default Navbar;
