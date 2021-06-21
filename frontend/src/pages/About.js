import React from "react";

import styled from "styled-components/macro";

import Navigation from "../components/Navigation";
import annsofiimg from "../assets/annsofi.profile.JPG";
import saraimg from "../assets/profile-picture.jpg";

const About = () => {

  return (
    <>
     <Navigation />

    <Container>
    <Wrapper>
      <InfoText>
        <Title>ABOUT</Title>
        <Border></Border>

           <AboutTheSite>This site was created in Technigo Bootcamp as the final project. The idea came from our own experience, entering the tech-world and being exposed to A LOT of new words. If you are lucky are they quite self-explanatory for example "something here". But many of them are short for something such as "example", but and a lot of word might as well be greek!</AboutTheSite>
           <AboutTheSite>The purpose of this site is to be a friend in need when there is something you heard somewhere but maybe afraid to ask, or maybe just forgot. And if you feel like you have a good explanation for something, please add it! </AboutTheSite>
      </InfoText>

        <AboutUs>
          <AboutUsCard>
            <Name>Sara Carlstein</Name>
            <SaraImg src={saraimg} alt="Sara Carlstein" />
            <AboutUsText>Text and link to likedin and github</AboutUsText>
            <LinksDiv>
              <Links href="https://www.linkedin.com/in/sara-carlstein-532b2737/">LinkedIn</Links>
              <Links href="https://sara-carlstein-portfolio.netlify.app/">Portfolio</Links>
            </LinksDiv>
          </AboutUsCard>
          <AboutUsCard>
            <Name>Ann-Sofi Jönsson </Name>
            <AnnSofiImg src= {annsofiimg}alt="Ann-Sofi Jönsson" />
            <AboutUsText>Text and link to likedin and github</AboutUsText>
            <LinksDiv>
              <Links href="https://www.linkedin.com/in/annsofijonsson/">LinkedIn</Links>
              <Links href="https://annsofi-jonsson-portfolio.netlify.app/">Portfolio</Links>
            </LinksDiv>
          </AboutUsCard>
        </AboutUs>
        </Wrapper>

    </Container>


  </>
  );
};

export default About;

const AboutTheSite = styled.p`
  font-size: 14px;
  margin-left: 5px;
  margin-right: 5px;
`;

const SaraImg = styled.img`
  height: 150px;
  border-radius: 10%;
  margin-left: 10px;
`;

const AnnSofiImg = styled.img`
  height: 150px;
  border-radius: 10%;
  margin-left: 10px;
`;
const LinksDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

` ;

const AboutUsCard = styled.div`
  border: 4px solid #ffcff1;
  margin-bottom: 20px;
`;

const AboutUsText = styled.p`
  font-size: 16px;
  margin-left: 10px;
` ;

const Name = styled.h1`
  font-size: 20px;
  margin-left: 10px;
` ;

const Links = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const Wrapper = styled.div`
  max-width: 350px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 800px;

  }
`;

const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  border: 2px black;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    width: 1200px;
    border: black solid 2px;
    box-sizing: border-box;
    padding: 0;
  }
`;


const InfoText = styled.div`
  // border: 2px solid pink;

`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 10px;
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  // border: 2px solid pink;
  margin-top: 20px;

  @media (min-width: 768px) {
    // justify-content: space-around;
    // flex-direction: row;

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
  @media (min-width: 768px) {
    width: 800px;
  }
`;
