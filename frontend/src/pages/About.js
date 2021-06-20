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

           <p>This site was created in Technigo Bootcamp as the final project. The idea came from our own experience, entering the tech-world and being exposed to A LOT of new words. If you are lucky are they quite self-explanatory for example "something here". But many of them are short for something such as "example", but and a lot of word might as well be greek!</p>
           <p>The purpose of this site is to be a friend in need when there is something you heard somewhere but maybe afraid to ask, or maybe just forgot. And if you feel like you have a good explanation for something, please add it! </p>
      </InfoText>

        <AboutUs>
          <AboutSara>
            <p>Sara Carlstein</p>
            <SaraImg src={saraimg} alt="Sara Carlstein" />
            <p>Text and link to likedin and github</p>
          </AboutSara>
          <AboutAnnSofi>
            <p>Ann-Sofi Jönsson </p>
            <AnnSofiImg src= {annsofiimg}alt="Ann-Sofi Jönsson" />
            <p>Text and link to likedin and github</p>
          </AboutAnnSofi>
        </AboutUs>
        </Wrapper>

    </Container>


  </>
  );
};

export default About;

const SaraImg = styled.img`
  height: 150px;
  border-radius: 10%;

`

const AnnSofiImg = styled.img`
  height: 150px;
  border-radius: 10%;
`


const AboutSara = styled.div`
border: 2px solid black;
`


const AboutAnnSofi = styled.div`
border: 2px solid black;
`

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Wrapper = styled.div`
max-width: 370px;
margin-top: 20px;
`

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
  border: 2px solid pink;
`



// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: space-between;
//   border: solid 2px #ffcff1;
//   padding: 10px;
//   // height: 400px;
//   max-width: 370px;
//   border: 2px, solid, pink;
// `;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: solid 2px #ffcff1;
  padding: 10px;
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid pink;
  margin-top: 20px;
`;




