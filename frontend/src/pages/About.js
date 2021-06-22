import React from "react";
import styled from "styled-components/macro";

import Navigation from "../components/Navigation";
import annsofiimg from "../assets/annsofi.profile.JPG";
import saraimg from "../assets/profile-picture.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>
          <InfoText>
            <Title>ABOUT</Title>
            <Border></Border>
            <AboutTheSite>
              This site was created in Technigo Bootcamp as the final project.
              The idea came from our own experience, entering the tech-world and
              being exposed to A LOT of new words. If you are lucky are they
              quite self-explanatory for example "code review". But many of them
              are short for something such as "API", but and a lot of word might
              as well be greek!
            </AboutTheSite>
            <AboutTheSite>
              The purpose of this site is to be a friend in need when there is
              something you heard somewhere and are curious about. Or maybe
              something you just forgot and doesn't want to ask for the 47th
              time. And if you feel like you have a good explanation for
              something, be a start and add it!{" "}
              <span role="img" aria-label="star">
                {"🌟"}
              </span>
            </AboutTheSite>
          </InfoText>

          <AboutUs>
            <AboutUsCard>
              <Name>Sara Carlstein</Name>
              <ImgAndLinks>
                <SaraImg src={saraimg} alt="Sara Carlstein" />
                <LinksDiv>
                  <Links href="https://www.linkedin.com/in/sara-carlstein-532b2737/">
                    LinkedIn
                  </Links>
                  <Links href="https://sara-carlstein-portfolio.netlify.app/">
                    Portfolio
                  </Links>
                  <Links href="https://github.com/Sartish">Github</Links>
                </LinksDiv>
              </ImgAndLinks>
            </AboutUsCard>
            <AboutUsCard>
              <Name2>Ann-Sofi Jönsson</Name2>
              <ImgAndLinks>
                <AnnSofiImg src={annsofiimg} alt="Ann-Sofi Jönsson" />
                <LinksDiv>
                  <Links href="https://www.linkedin.com/in/annsofijonsson/">
                    LinkedIn
                  </Links>
                  <Links href="https://annsofi-jonsson-portfolio.netlify.app/">
                    Portfolio
                  </Links>
                  <Links href="https://github.com/Ann-Sofi">Github</Links>
                </LinksDiv>
              </ImgAndLinks>
            </AboutUsCard>
          </AboutUs>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default About;

const HeaderFont = "'Manrope', sans-serif";
const ParagraphFont = "'Roboto', sans-serif";
const HotPink = "#FF69B4";
const LightPink = "#FFCFF1";
const Gray = "#404040;";
const DarkGray = "#282828";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 350px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    maxwidth: 800px;
  }
`;

const InfoText = styled.div`
  // border: 2px solid pink;
`;

const Title = styled.h1`
  font-family: ${HeaderFont}
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  margin: 0px;
  font-family: ${HeaderFont};
  color: ${DarkGray};
  @media (min-width: 768px) {
    font-zize: 40px;
  }
`;

const Border = styled.div`
  display: flex;
  text-align: center;
  height: 10px;
  color: #ffcff1;
  border:  #ffcff1; 2px solid;
  background-color: #ffcff1;
  border-radius: 50px;
`;

const AboutTheSite = styled.p`
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
  font-family${ParagraphFont};
  color: ${Gray};
  line-height: 130%;
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

const AboutUsCard = styled.div`
  border: 4px solid ${LightPink};
  margin-bottom: 20px;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

const Name = styled.h1`
  font-family: ${ParagraphFont};
  color: ${Gray};
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;
`;

const Name2 = styled.h1`
  font-family: ${ParagraphFont};
  color: ${Gray};
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 7px;
  }
`;

const ImgAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 20px;
`;

const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 25px;

  @media (min-width: 768px) {
    margin-right: 35px;
  }
`;

const Links = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  background-color: ${LightPink};
  border-radius: 10px;
  padding: 7px;
  font-family: ${ParagraphFont};
  color: ${Gray};
  :hover {
    color: ${HotPink};
  }
`;

const SaraImg = styled.img`
  height: 150px;
  width: 142px;
  border-radius: 20%;
  margin-left: 10px;
  text-align: center;
`;

const AnnSofiImg = styled.img`
  height: 160px;
  width: 120px;
  border-radius: 20%;
  margin-left: 10px;
`;
