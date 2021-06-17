import styled from "styled-components";
import "@lottiefiles/lottie-player";

const primaryFont = "'Corben', cursive";
const SecondaryFont = "'Manrope', sans-serif";

const blue = "#223A59";
const red = "#ec4646";
const pink = "#ffdcdc";
const lightblue = "#a3ddcb";
const orange = "#f2a154";

export const Button = styled.button`
  border-radius: 8px;
  background-color: #8ca2ab;
  padding: 10px 20px;
  border: solid #fff 1.5px;
  border-radius: 50px;
  outline: none;
  color: #fff;
  font-size: 17px;
  margin-bottom: 10px;
  cursor: pointer;
  // :hover {
  //   background-color: #fc00ff;
  //   background-image: linear-gradient(90deg, #fc00ff 0%, #006cde 100%);
  // }
  @media (min-width: 767px) {
    font-size: 19px;
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

// Concept Header
export const Paragraph = styled.p`
  text-align: center;
  color: ${pink};
  font-size: 24px;
  width: 400px;
  font: ${SecondaryFont};
  font-weight: bold;
`;

// Concepts

export const ConceptButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 30px 80px;
  padding: 20px;
`;

//Desciption
//Footer

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2px 3%;
  margin-bottom: 10px;
  padding: 0;
  font-size: 14px;
  background-color: white;
  border-top: 2px solid black;
  color: black;
  height: 150px;
  @media (min-width: 767px) {
    font-size: 20px;
  }
`;

export const FooterParagraphs = styled.div`
  margin: 0;
  text-align: center;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  margin: 0;
`;

export const Link = styled.a`
  color: #aa0000;
`;

///Buttons

export const SigninButton = styled.div`
  display: inline-block;
  color: black;
  background-color: #FFCFF1;
  width: 100px;
  border: 4px solid #FFCFF1;
  text-align: center;
  font-weight: bold;
  padding: 13px;

  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;

    
`;

export const CustomButton = styled.button`
  border-radius: 4px;
  background-color: black;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 22px;
  padding: 15px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background-color: #ffcff1;
  border: none;
  color: black;
  text-align: center;
  font-size: 22px;
  padding: 15px;
  width: 500px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
`;
