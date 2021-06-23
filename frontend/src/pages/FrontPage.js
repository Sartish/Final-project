import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import CountUp from "react-countup";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { BASE_URL } from "../reusables/urls";

const FrontPage = () => {
  const [allConcepts, setAllConcepts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/concepts/count`)
      .then((res) => res.json())
      .then((data) => {
        setAllConcepts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navigation />
      <BackgroundContainer>
        <FrontPageContainer>
          <TitleContainer>
            {isLoading ? null : (
              <CountingConceptHeader>
                <CountText>Currently</CountText>
                <CountText>
                  <CountUp
                    style={{
                      marginBottom: 0,
                      display: "flex",
                    }}
                    duration={9}
                    end={allConcepts}
                  />
                </CountText>

                <CountText>Concepts</CountText>
              </CountingConceptHeader>
            )}
            <Title>TECHTIONARY</Title>
            <Border></Border>
            <Paragraph>
              An open source <Span>tech-concept dictionary</Span>, with the aim
              to understand tech concepts in an easier and fun way.
            </Paragraph>
            <ButtonSection>
              <ShowMe>Show me!</ShowMe>
              <Link to="/concepts">
                <FrontPageButton>Concepts</FrontPageButton>
              </Link>
            </ButtonSection>
          </TitleContainer>
        </FrontPageContainer>
      </BackgroundContainer>
      <Footer />
    </>
  );
};

export default FrontPage;

const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif";
const HotPink = "#FF69B4";
const LightPink = "#FFCFF1";
const Yellow = "#FFF5D1";
const Gray = "#404040;";
const DarkGray = "#282828";

const BackgroundContainer = styled.section`
  margin: 0px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const FrontPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    margin: 0px;
    height: 500px;
  }
`;

const CountingConceptHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0px;
  width: 180px;
  font-family: ${HeaderFont};
  padding: 0px;
  color: ${Gray};
  border: ${LightPink} 1px solid;

  @media (min-width: 768px) {
    margin: 0px;
    width: 350px;
    padding: 14px;
    flex-direction: row;
    justify-content: center;
  }
`;

const CountText = styled.h2`
  display: flex;
  margin: 12px;
  font-size: 16px;
  font-family: ${HeaderFont};
  margin: 0px;
  padding: 2px;
  @media (min-width: 768px) {
    font-size: 25px;
    padding: 5px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 5px;
  margin: 0px;
  @media (min-width: 768px) {
    width: 1300px;
    margin-bottom: 80px;
    margin-top: 90px;
    position: relative;
  }
`;

const Title = styled.h1`
  display: flex;
  font-size: 40px;
  font-family: ${HeaderFont};
  margin: 0px;
  font-weight: 200;
  color: ${DarkGray};
  line-height: 100%;
  @media (min-width: 768px) {
    font-size: 110px;
    margin-top: 50px;
  }
`;

const Border = styled.div`
  width: 250px;
  height: 10px;
  border: ${LightPink} 2px solid;
  background-color: ${LightPink};
  margin: 0px;
  border-radius: 50px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 720px;
    margin: 0px;
  }
`;
const Paragraph = styled.p`
  font-size: 16px;
  font-family: ${HeaderFont};
  line-height: 150%;
  padding: 10px;
  color: #404040;
  width: 200px;
  background-color: ${Yellow};
  @media (min-width: 768px) {
    width: 580px;
    text-align: start;
    margin-top: 10px;
    font-size: 22px;
  }
`;

const Span = styled.span`
  border-bottom: #ff69b4 solid 2px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  width: 150px;
  margin-top: 10px;
  border: ${LightPink} 1px solid;
  @media (min-width: 768px) {
    padding: 14px;
    width: 300px;
    flex-direction: row;
    margin-top: 0px;
  }
`;

const ShowMe = styled.h2`
  font-size: 24px;
  font-family: ${ParagraphFont};
  margin-bottom: 10px;
  margin-top: 5px;
  color: ${Gray};
  @media (min-width: 768px) {
    font-size: 24px;
    padding-bottom: 3px;
    margin-right: 20px;
  }
`;

const FrontPageButton = styled.button`
  display: inline-block;
  color: white;
  background-color: ${HotPink};
  width: 100px;
  margin: 0px;
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
