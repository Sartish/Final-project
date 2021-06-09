import styled from "styled-components";
import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";
import lottiePlayer from "@lottiefiles/lottie-player";

const primaryFont = "'Montserrat', sans-serif";
const SecondaryFont = "'font-family: 'Roboto', sans-serif'";

const blue = "#223A59";
const red = "#ec4646";
const pink = "#ffdcdc";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  min-height: 100vh;
  color: ${pink};
  box-sizing: border-box;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DesktopLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 100px;
  @media (max-width: 768px) {
    margin: 0;
    padding-top: 0;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 37px;
  margin-bottom: 10px;
  font-family: ${primaryFont};
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${pink};
  font-size: 24px;
  width: 400px;
  font: ${SecondaryFont};
  font-weight: bold;
`;

export const Button = styled.button`
  width: 250px;
  height: 80px;
  border-radius: 50px;
  margin: 10px;
  border: 0;
  color: ${pink};
  font-family: "Nunito", sans-serif;
  font-size: 30px;
  font-weight: bold;
  background-color: ${red};
  box-shadow: 3px 5px;
  :hover {
    background-color: #f2a154;
`;
export const LottieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 0;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
