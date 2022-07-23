import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import contactBg from "../assets/contact-bg.jpg";
import { db } from "../firebase";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, error: false });

  const onSubmit = async (data) => {
    const { email } = data;

    setStatus({ success: false, error: false });

    try {
      setLoading(true);
      await setDoc(doc(db, "submissions", email), {
        ...data,
      });

      setStatus((prev) => ({ ...prev, success: true }));
      reset({
        firstName: "",
        lastName: "",
        message: "",
        email: "",
      });
    } catch (err) {
      setStatus((prev) => ({ ...prev, error: true }));
    }
    setLoading(false);
  };

  return (
    <Section>
      <Container>
        <ImageContainer bgImage={contactBg}>
          <h1>
            I'd love to hear from you
            <span>
              <a
                href="mailto:ahnafadib7546@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Mail me
              </a>
            </span>
          </h1>

          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </ImageContainer>
        <Content errors={errors}>
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter your First name"
              {...register("firstName", { required: true, maxLength: 80 })}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter your Last name"
              {...register("lastName", { required: true, maxLength: 100 })}
            />
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter your Message"
              {...register("message", { required: true })}
            />

            <button
              type="submit"
              className={`${loading && "loading"}`}
              disabled={loading}
            >
              {loading ? "Submitting" : "Submit"}
            </button>
            {status.error && (
              <p className="error">Something went wrong, please try again</p>
            )}
            {status.success && (
              <p className="success">Successfully submitted the form</p>
            )}
          </form>
        </Content>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  margin: 6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 64em) {
    margin: 3rem;
    margin-bottom: 6rem;
    flex-direction: column;
    align-items: center;
    height: auto;
    box-shadow: none;
  }
`;

const ImageContainer = styled.div`
  background: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 64em) {
    width: 80%;
  }
  padding: 2rem;
  h1 {
    font-size: 2.5rem;
    text-align: center;
    font-family: "Playfair Display", sans-serif;
    color: ${(props) => props.theme.white};
    margin-bottom: 1rem;

    span {
      margin-left: 1rem;

      opacity: 0.5;
      font-size: 1.5rem;
      padding: 0.25rem 1rem;
      border-radius: 12px;
      transition: all 0.4s ease-in-out;

      &:hover {
        opacity: 100;
      }
    }

    @media (max-width: 64em) {
      font-size: 2rem;
    }
  }
  .circles {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & > * {
      margin-bottom: 2rem;
    }
    & > *:nth-child(2) {
      border-style: dashed;
    }
    @media (max-width: 64em) {
      flex-direction: row;
      justify-content: space-between;
      & > * {
        margin-bottom: 0;
      }
    }
    @media (max-width: 30em) {
      justify-content: center;
      & > *:not(:first-child) {
        display: none;
      }
    }
  }
  .circle {
    width: 150px;
    height: 150px;

    @media (max-width: 80em) {
      width: 112.5px;
      height: 112.5px;
    }

    border-radius: 50%;
    border: 1px solid white;

    @media (max-width: 64em) {
      width: 100px;
      height: 100px;
    }
  }
`;
const Content = styled.div`
  padding: 2rem;
  font-family: "Playfair Display", sans-serif;
  width: 50%;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  h1 {
    font-family: "Playfair Display", sans-serif;
    margin-bottom: 2rem;
  }

  @media (max-width: 64em) {
    width: 80%;
  }

  input,
  label {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  label {
    margin-bottom: 0.5rem;
  }

  input[name="email"] {
    border-bottom: ${(props) =>
      `2px solid ${
        props.errors.email ? props.theme.red : props.theme.licorice
      } !important`};
  }
  textarea[name="message"] {
    border-bottom: ${(props) =>
      `2px solid ${props.errors.message && props.theme.red} !important`};
  }

  input[name="firstName"] {
    border-bottom: ${(props) =>
      `2px solid ${
        props.errors.firstName ? props.theme.red : props.theme.licorice
      } !important`};
  }

  input[name="lastName"] {
    border-bottom: ${(props) =>
      `2px solid ${
        props.errors.lastName ? props.theme.red : props.theme.licorice
      } !important`};
  }

  input,
  textarea {
    margin-bottom: 2rem;
    border: none;
    outline: none;
    padding: 1rem 1rem 1rem 0;
    background-color: ${(props) => props.theme.white};
    color: ${(props) =>
      props.error ? props.theme.orangeRed : props.theme.black};

    font-family: "Raleway", sans-serif;
    font-weight: light;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;

    & button.loading {
      background-color: ${(props) => props.theme.darkBlue};
      color: ${(props) => props.theme.white};
      animation: animate 1s linear infinite;

      @keyframes animate {
        0% {
          box-shadow: 0 0 0 0 cornflowerblue;
        }
        40% {
          box-shadow: 0 0 0 50px rgba(255, 26, 67, 0);
        }
        80% {
          box-shadow: 0 0 0 50px rgba(255, 206, 67, 0);
        }
        100% {
          box-shadow: 0 0 0 rgba(255, 206, 67, 0);
        }
      }
    }
  }

  .error {
    background-color: ${(props) => props.theme.red};
    color: whitesmoke;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
  .success {
    background-color: ${(props) => props.theme.green};
    color: whitesmoke;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
  button {
    position: relative;
    padding: 0.5rem 0;
    font-size: 1.3rem;
    color: whitesmoke;
    letter-spacing: 0.7rem;
    text-transform: uppercase;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    color: black;
    outline: none;
    border: none;
    border-bottom: ${(props) => `1px solid ${props.theme.darkBlue}`};
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      left: 0;
      top: 0;
      transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
      background-color: ${(props) => props.theme.darkBlue};
      z-index: -1;
    }

    &:hover {
      color: ${(props) => props.theme.white};
    }
    &:hover::before {
      width: 100%;
    }
  }
`;

export default Contact;
