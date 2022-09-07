import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState(" ");
  const [delta, setDelta] = useState(300 - Math.random() + 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Section id="Hero">
      <Container>
        <Box>
          <span className="welcome">Hi There! Welcome to my Potfolio</span>
          <h1 className="typewrite">
            {`I'm Adib `}
            <span
              className="txt-rotate"
              data-period="1000"
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <p className="intro">
            Sleepless Dreamer, full-time techie and function best in adrenaline
          </p>

          <ButtonContainer>
            <Button link={"/about"} text="Learn more" />
          </ButtonContainer>
        </Box>
      </Container>
      <Circle>
        <Icon>&#x2193;</Icon>
      </Circle>
    </Section>
  );
};

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  overflow: hidden;

  font-family: "Playfair display", sans-serif;
  background-color: ${(props) => props.theme.body};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 75%;
  position: relative;
  z-index: 1;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};

  .welcome {
    margin: 1rem 0;

    letter-spacing: 3px;
    font-weight: 700;
  }
  .typewrite {
    margin-bottom: 1rem;
    font-weight: lighter;
    font-family: "Playfair Display", sans-serif;
    font-size: ${(props) => props.theme.fontxl};
  }
  .intro {
    font-size: ${(props) => props.theme.fontxs};

    opacity: 0.5;
    margin-bottom: 1em;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 85%;
  }

  @media (max-width: 48em) {
    width: 100%;
    align-self: center;
    text-align: center;
    flex-direction: column-reverse;
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 40em) {
    & > *:first-child {
      width: 70%;

      margin-top: 2rem;
    }
  }
`;

const rotate = keyframes`
 100%{
    transform:rotate(1turn);
 }
`;
const Circle = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.text};

  animation: ${rotate} 6s linear infinite reverse;

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;

    right: 2rem;
  }
`;
const Icon = styled.span`
  width: 3rem;
  height: 3rem;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: 48em) {
    width: 80%;
    align-items: center;
    padding: 2rem;
  }
`;
export default Hero;
