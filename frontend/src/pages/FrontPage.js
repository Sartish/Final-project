import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Navigation from "../components/Navigation";
import CountUp from "react-countup";
import Footer from "../components/Footer";


const FrontPage = () => {
  const [allConcepts, setAllConcepts] = useState({ data: [] });

  useEffect(() => {
    fetch(`http://localhost:8080/concepts`)
      .then((res) => res.json())
      .then((data) => setAllConcepts(data));
  }, []);

  return (
    <>
      <Navigation />
      <BackgroundContainer>
      <FrontPageContainer>
          <CountingConceptHeader>
            <CountText>Currently</CountText>
            <CountText>
            <CountUp
              style={{
                marginBottom: 0,
                display: "flex",
              }}
              duration={10}
              end={allConcepts.data.length}
            />
            </CountText>
            <CountText>Concepts</CountText>
          </CountingConceptHeader>
          <TitleContainer>
            <Title>TECHTIONARY</Title>
            <Border></Border>
            <Paragraph>
              An open source <Span>tech-concept library</Span>, with the aim to
              understand tech concepts in an easier and fun way!
            </Paragraph>
          </TitleContainer>
          <ButtonSection>
              <ShowMe>Show me!</ShowMe>
              <Link to="/concepts">
                <FrontPageButton>Concepts</FrontPageButton>
              </Link>
            </ButtonSection>
      </FrontPageContainer>
      </BackgroundContainer>
      <Footer />
      </>
  );
};

export default FrontPage;

// Frontpage

const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif;"
const HotPink = "#FF69B4"
const LightPink = "#FFCFF1"
const Yellow = "#FFF5D1"

const BackgroundContainer = styled.section`
    margin: 0px;
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
const FrontPageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (min-width: 768px) {
      justify-content: space-around;
      flex-direction: row;
      width: 100%;
      margin: 0px;
      height: 500px;
    }
  `

export const CountingConceptHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  width: 200px;
  font-family: ${HeaderFont};
  padding: 0px;
    @media (min-width: 768px) {
    margin-top: 200px;
    }
`;

export const CountText = styled.h3`
  display: flex;
  margin: 12px;
  font-size: 30px;
  font-family: ${HeaderFont};
  margin: 0px;
  padding: 10px;
`;

export const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 5px;
  margin: 0px;
  @media (min-width: 768px) {
    width: 300px;
    margin-bottom: 80px;
    margin-top: 0px;
  }
`;


export const Title = styled.h1`
  display: flex;
  font-size: 40px;
  font-family: ${HeaderFont};
  margin-bottom: 10px;
  line-height: 150%;
  @media (min-width: 768px) {
    font-size: 120px;
    margin: 0px;
  }
`;


export const Border = styled.div`
  width: 200px;
  height: 20px;
  border: ${LightPink} 2px solid;
  background-color: ${LightPink};
  border-radius: 50px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 800px;
  }
`;
export const Paragraph = styled.p`
  font-size: 22px;
  font-family: ${HeaderFont};
  line-height: 150%;
  padding: 10px;
  background-color: ${Yellow};
  @media (min-width: 768px) {
    width: 600px;
  }
`;

export const Span = styled.span`
  border-bottom: #ff69b4 solid 2px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 200px;
  }
`;

const ShowMe = styled.h3`
  font-size: 24px;
  font-family: ${ParagraphFont};
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 40px;
    padding-bottom: 20px;
  }
`;

export const FrontPageButton = styled.button`
  display: inline-block;
  color: white;
  background-color: ${HotPink};
  width: 100px;
  border: 4px solid ${HotPink};;
  text-align: center;
  font-weight: bold;
  padding: 13px;
  font-family: ${ParagraphFont};
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 1s ease-in, color 1s ease-in;
  :hover {
    color: white;
    background-color: black;
    border:4px solid white;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
`;
