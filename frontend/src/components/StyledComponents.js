import styled from "styled-components";
import "@lottiefiles/lottie-player";

const primaryFont = "Montserrat, sans-serif";
const SecondaryFont = "Roboto, sans-serif";

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

// Frontpage
export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  height: 400px
  color: ${pink};
  box-sizing: border-box;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
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
  color: ${orange};
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${pink};
  font-size: 24px;
  width: 400px;
  font: ${SecondaryFont};
  font-weight: bold;
`;

export const FrontPageButton = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 50px;
  margin: 10px;
  border: 0;
  color: ${lightblue};
  font-family: "Nunito", sans-serif;
  font-size: 30px;
  font-weight: bold;
  background-color: ${red};
  box-shadow: 3px 5px;
  :hover {
    background-color: ${orange};
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

// Concepts

export const CardContainer = styled.div`
  background: ${pink};
  border-radius: 2px;
  display: inline-block;
  height: 100px;
  width: 150px;
  padding: 20px;
  text-decoration: none;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 3px 5px;
  :hover {
    background-color: #f2a154;
`;

export const CardInfo = styled.div`
  color: #350b40;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;
export const CardParagraphOne = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const FirstHeader = styled.div`
  font-family: ${primaryFont};
  font-size: 50px;
  color: ${lightblue};
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-align: center;
`;

export const SecondHeader = styled.div`
  font-size: 20px;
  font-family: ${primaryFont};
  color: ${orange};
  letter-spacing: 1.5px;
`;

export const ConceptButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 30px 80px;
  padding: 20px;
`;

//Desciption

export const CardContainerDescription = styled.div`
  background: ${pink};
  border-radius: 2px;
  display: inline-block;
  height: 200px;
  width: 200px;
  padding: 20px;
  text-decoration: none;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 3px 5px;
  :hover {
    background-color: #f2a154;
`;
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

export const SpanButtonPrevious = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  :after{
    content: '\00AB';
    position: absolute;
    opacity: 0;
    top: 0;
    left: 20px;
    transition: 0.5s;
  }
  :hover
  {padding-left: 25px;}
  :hover&:after{
    opacity: 1;
    left: 0;
  }

`;
