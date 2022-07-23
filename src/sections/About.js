import React from "react";
import styled from "styled-components";
import me from "../assets/iconSiam.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Section id="about">
      <div class="about-wrapper">
        <div class="about-left">
          <div class="about-left-content">
            <div>
              <div class="shadow">
                <div class="about-img">
                  <img src={me} alt="me" />
                </div>
              </div>

              <h2>
                Ahnaf
                <br />
                Adib
              </h2>
              <h3>Web Developer/Designer</h3>
            </div>
          </div>
        </div>

        <div class="about-right">
          <h1>
            hi<span>!</span>
          </h1>
          <h2>Here's who I am and what I do</h2>

          <div class="about-para">
            <p>
              I'm a web developer / UI Designer. I strive to fabricate
              aesthetically pleasing, impactful websites tailored exclusively to
              your needs.
            </p>

            <p>
              If you're looking for a guy to bring your ideas to life, well look
              no further.
            </p>
          </div>
          <button className="btn" onClick={() => navigate("/contact-me")}>
            Send me a message
          </button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  font-family: "Playfair Display", sans-serif;

  .about-wrapper {
    height: 100vh;
  }
  .about-left {
    background: ${(props) => props.theme.white};

    height: 50vh;
  }
  .about-left-content > div {
    background: ${(props) => props.theme.black};
    padding: 4rem 4rem 2.5rem 5rem;
    text-align: center;
    color: white;
  }

  .about-left-content {
    position: relative;
    box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
    -webkit-box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
  }
  .about-img img {
    display: block;
    width: 200px;
  }
  .about-img {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
  }
  .shadow {
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: relative;
    cursor: pointer;
  }
  .shadow::after {
    content: "";
    position: absolute;
    background: ${(props) => props.theme.orangeRed};
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    height: 7px;
    width: 50px;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    opacity: 0;
    transition: all 0.6s ease;
  }
  .shadow:hover .about-img {
    transform: translateY(-10px);
  }
  .shadow:hover::after {
    opacity: 1;
  }
  .about-left-content h2 {
    font-family: "Playfair Display", sans-serif;
    font-size: 2rem;
    margin: 2.2rem 0 0.6rem 0;
    line-height: 1.2;
    padding-bottom: 1rem;
    border-bottom: ${(props) => `2px solid ${props.theme.white}`};
  }

  .about-left-content h3 {
    text-transform: uppercase;
    font-weight: 300;

    letter-spacing: 5px;
    margin-top: 1.2rem;
  }

  .about-right {
    background: ${(props) => props.theme.orangeRed};
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;
    text-align: left;
  }
  .about-right h1 {
    font-size: 7rem;
    text-transform: uppercase;
  }
  .about-right h1 span {
    color: whitesmoke;
  }
  .about-right h2 {
    font-weight: 600;
    font-family: "Playfair Display", sans-serif;
    margin-bottom: 1rem;
  }

  .about-para p {
    font-family: "Raleway", sans-serif;
    color: white;
    font-weight: 300;
    text-align: center;
    padding: 0.5rem;
    line-height: 1.2rem;
    font-size: 1.2rem;
    letter-spacing: 0.15ch;
    opacity: 0.8;
  }

  .btn {
    padding: 1rem 0.75rem;
    color: white;
    background-color: black;
    border: none;
    margin: 1rem 0;
    cursor: pointer;

    border-radius: 10px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      background-color: white;
      color: ${(props) => props.theme.orangeRed};
    }
  }

  @media screen and (min-width: 56em) {
    .about-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .about-left {
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      display: flex;

      div {
        position: static;
        background-color: ${(props) => props.theme.licorice};
      }
    }
    .about-left,
    .about-right {
      height: 100vh;
    }
    .about-right {
      align-items: start;
    }
    .about-para p {
      text-align: initial;
    }
    .about-left-content {
      position: absolute;
      right: -50px;
    }
  }
`;

export default About;
